import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';


const CheckOut = () => {
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };
	const loggedInUser = JSON.parse(localStorage.getItem('user'))
	const params = useParams()
	const id = params.id
	const [book, setBook] = useState({})
	const [result, setResult] = useState({})
	useEffect(() => {
		axios({
			url: 'https://strawberry-cobbler-47407.herokuapp.com/find/' + id
		})
			.then(res => {
				setBook(res.data[0])
			})
	}, [id])
	const { name, authorName, price, _id, img } = book


	const handleCheckout = () => {
		const checkoutDetails = {
			email: loggedInUser.email,
			bookName: name,
			authorName: authorName,
			price: price,
			img: img,
			date: new Date().toDateString('dd/MM/yyyy')

		}
		axios.post('https://strawberry-cobbler-47407.herokuapp.com/checkoutDetails', checkoutDetails)
			.then(res => {
				console.log(res)
				setResult({ result: 'Book successfully added' })
				history.replace(from);

			})
			.catch(function (error) {
				setResult({ result: 'Failed to upload please try again later.' })
			});


	}
	return (
		<div className='m-5 px-5 '>
			<h2>Check Out</h2>
			<p>{result.result}</p>
			<div style={{ borderRadius: "10px" }} className='p-4 bg-light p-2 round'>
				<table className='w-100 fw-bold'>
					<thead>
						<tr className='text-muted border-bottom mb-3'>
							<td>Desciption</td>
							<td>Quantity</td>
							<td>Price</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='py-2'>{name} by {authorName}</td>
							<td className='py-2'>1</td>
							<td className='py-4'>${price}</td>

						</tr>
					</tbody>
					<tfoot>
						<tr className='text-muted border-top mb-3'>
							<td>Total</td>
							<td> </td>
							<td>${book.price}</td>
						</tr>
					</tfoot>
				</table>
				<button onClick={handleCheckout} className='btn btn-success d-flex ms-auto mt-3'>CheckOut</button>
			</div>
		</div >
	);
};

export default CheckOut;