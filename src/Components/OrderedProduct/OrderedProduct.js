import axios from 'axios';
import React from 'react';

const OrderedProduct = props => {
	const { bookName, authorName, price, img, date, _id } = props.order;

	const handleCancel = id => {
		axios({
			method: 'delete',
			url: 'https://strawberry-cobbler-47407.herokuapp.com/cancelOrder/' + id,

		});
		window.location.reload();
	}
	return (


		<div className='bg-light d-flex m-3' style={{ borderRadius: '10px' }}>

			<div style={{ width: '50px' }} className='m-4'>
				<img style={{ height: '80px' }} src={img} alt="" />
			</div>
			<div className='p m-4 '>
				<h4>{bookName}</h4>
				<small>{authorName}</small>
			</div>
			<div className='p-2 m-4 ms-auto my-auto d-flex'>
				<h4 className="text-secondary fw-light">Order Date: {date}</h4>
				<h4 className="ms-5">Price = ${price}</h4>
			</div>

			<button onClick={() => handleCancel(_id)} className='btn btn-danger' refresh="true">Cancel Order</button>



		</div>


	);
};

export default OrderedProduct;