import axios from 'axios';
import React, { useEffect, useState } from 'react';
import shuffle from 'shuffle-array';
import Card from '../Card/Card';


const Home = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState({
		loading: false
	})
	useEffect(() => {
		setLoading({ loading: true })
		axios({
			url: 'https://strawberry-cobbler-47407.herokuapp.com/products'
		})
			.then(res => {
				setBooks(shuffle(res.data))
				setLoading({ loading: false })
			})
	}, [])

	return (
		<div className="pb-5 bg-light">
			<div className='d-flex row pt-5 g-5 w-75 mx-auto' >{
				books.map(book => <Card key={book._id} book={book}></Card>)
			}

			</div >
			{loading.loading ? <div style={{ marginTop: '200px', marginBottom: '300px' }} className="spinner-border mx-auto d-flex text-success" role="status">
				<span className="visually-hidden">Loading...</span>
			</div> :
				<div></div>
			}
		</div>
	);
};

export default Home;