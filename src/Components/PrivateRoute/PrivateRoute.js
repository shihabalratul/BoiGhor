import React from 'react';
import { Redirect, Route } from 'react-router';


const PrivateRoute = ({ children, ...rest }) => {
	const loggedInUser = JSON.parse(localStorage.getItem('user'))
	return (

		<Route
			{...rest}
			render={({ location }) =>
				loggedInUser ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/signIn",
							state: { from: location }
						}}
					/>
				)
			}
		/>

	);
};

export default PrivateRoute;