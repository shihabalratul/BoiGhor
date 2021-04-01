import axios from 'axios';
import React, { useEffect, useState } from 'react';
import OrderedProduct from '../OrderedProduct/OrderedProduct';

const Orders = () => {
	const [loading, setLoading] = useState({
		loading: false
	})
	const loggedInUser = JSON.parse(localStorage.getItem('user'))
	const { email } = loggedInUser;
	const [orders, setOrders] = useState([])
	useEffect(() => {
		setLoading({ loading: true })
		axios({
			url: 'https://strawberry-cobbler-47407.herokuapp.com/orderDetails/' + email
		})
			.then(res => {
				setOrders(res.data)
				setLoading({ loading: false })
			})
	}, [email])
	console.log(orders)
	return (
		<div className='p-3'>

			<h4>Order List</h4>


			{
				!loading.loading && !orders[0] ? <h5 className=' my-5 text-danger'>
					You haven't ordered anything yet. Please go to home page to order.
				</h5> :
					loading.loading ? <div style={{ marginTop: '200px', marginBottom: '300px' }} className="spinner-border mx-auto d-flex text-success" role="status">
						<span className="visually-hidden">Loading...</span>
					</div> :
						<div></div>
			}

			<div>
				{

					orders.map(order => <OrderedProduct key={order._id} order={order} />)
				}
			</div>

		</div>
	);
};

export default Orders;