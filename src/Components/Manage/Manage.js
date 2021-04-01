import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory, useLocation } from 'react-router';


const Manage = () => {

	const [books, setBooks] = useState([])
	const [loading, setLoading] = useState({
		loading: false
	})

	const { name, authorName, price, _id } = books;
	useEffect(() => {
		setLoading({ loading: true })
		axios({
			url: 'https://strawberry-cobbler-47407.herokuapp.com/products'
		})
			.then(res => {
				setBooks(res.data)
				setLoading({ loading: false })
			})
	}, [])

	const handleDelete = (id) => {
		console.log(id)
		axios({
			method: 'delete',
			url: 'https://strawberry-cobbler-47407.herokuapp.com/remove/' + id,

		});

		window.location.reload();
	}

	return (
		<div className='bg-light p-3 rounded-3'>
			<table className='w-100'>

				<thead className='bg-white rounded-3'>
					<tr >
						<td className='fw-bold p-2'>Book Name</td>
						<td className='fw-bold p-2'>Author Name</td>
						<td className='fw-bold p-2'>Price</td>
						<td className='fw-bold p-2'>Action</td>
					</tr>
				</thead>


				<tbody>
					{
						books.map(book => <tr className='p-2' key={book._id}>
							<td className='p-2'>{book.name}</td>
							<td className='p-2'>{book.authorName}</td>
							<td className='p-2'>${book.price}</td>
							<td className='p-2'>
								<small><button onClick={() => handleDelete(book._id)} className='btn btn-danger mt-2' refresh="true"><FontAwesomeIcon icon={faTrashAlt} /></button></small>
							</td>
						</tr>
						)
					}
				</tbody>

			</table>
			{loading.loading ? <div className="spinner-border m-auto d-flex text-success" role="status">
				<span className="visually-hidden">Loading...</span>
			</div> :
				<div></div>
			}
		</div>
	);
};

export default Manage;