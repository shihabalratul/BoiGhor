import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
	const { name, authorName, img, price, _id } = props.book;
	return (
		<div className="col-md-4">
			<div style={{ borderRadius: "10px" }} className="card h-100">
				<img style={{ borderRadius: "10px" }} className="m-4" src={img} alt="" />
				<div className="p-2">
					<h4 className="text-align-center">{name}</h4>
					<p>By: {authorName}</p>
					<div className="p-2 d-flex">
						<h3>${price}</h3>
						<Link to={`/checkOut/${_id}`} className="btn btn-success ms-auto">
							Buy Now
						</Link>
					</div>

				</div>
			</div>
		</div >
	);
};

export default Card;