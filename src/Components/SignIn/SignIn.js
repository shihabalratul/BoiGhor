import React from 'react';
import firebaseConfig from '../../firebase.config';
import google from '../../icon/google.png';
import firebase from 'firebase';
import { useHistory, useLocation } from 'react-router';
if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

const SignIn = () => {
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	const handleFbSignIn = async () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		await firebase.auth()
			.signInWithPopup(provider)
			.then(res => {
				const userInfo = {
					name: res.user.displayName,
					email: res.user.email
				}
				localStorage.setItem('user', JSON.stringify(userInfo))
				// console.log(userInfo)
				// setLoggedInUser(userInfo)
				history.replace(from);
				window.location.reload();
			}).catch((error) => {
				const errorMessage = error.message;

			});
	}
	return (
		<div className='d-flex pt-5'>
			<div onClick={handleFbSignIn} style={{ borderRadius: "35px", height: '40px' }} className='d-flex  mx-auto my-5 p-3 pb-5 btn btn-outline-success'>
				<img src={google} alt="" style={{ height: '30px' }} />
				<h4 className='ms-2'>Continue with Google</h4>
			</div>
		</div>
	);
};

export default SignIn;