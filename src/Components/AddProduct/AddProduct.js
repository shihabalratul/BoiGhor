import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const AddProduct = () => {
	const { register, handleSubmit, watch, errors } = useForm();
	const [imgUrl, setImgUrl] = useState(null)
	const [product, setProduct] = useState([])
	const [result, setResult] = useState({})

	const onSubmit = (data, e) => {

		const bookData = {
			name: data.name,
			authorName: data.authorName,
			price: Number(data.price),
			img: imgUrl
		}

		if (bookData.img) {
			setProduct(bookData)
			e.target.reset();
		}
		else {
			setResult({ result: 'Please add a image file.' })
		}


		// setResult({ result: true })

		// 	// setResult({ result: false })
		// }
	};

	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current) {
			axios.post('https://strawberry-cobbler-47407.herokuapp.com/bookDetails', product)
				.then(res => {
					console.log(res)
					setResult({ result: 'Book successfully added' })
				})
				.catch(function (error) {
					setResult({ result: 'Failed to upload please try again later.' })
				});

		} else {
			isMounted.current = true;
		}


	}, [product]);

	const handleImgUpload = event => {
		const imgData = new FormData();
		imgData.set('key', '63ceb41b5eba6952b116404e38013e9d');
		imgData.append('image', event.target.files[0]);
		axios.post('https://api.imgbb.com/1/upload',
			imgData)
			.then(function (response) {
				setImgUrl(response.data.data.url);

			})
			.catch(function (error) {
				console.log(error);
			});

	}

	return (
		<div className='w-100'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div style={{ borderRadius: "10px" }} className='row bg-light p-4 mt-5 w-100'>
					<div className='col-md-6'>
						<h6 className='fw-bold'>Book Name</h6>
						<input className='form-control' name="name" ref={register({ required: true })} />
						{errors.name && <span className='text-danger'>This field is required</span>}
						<h6 className='fw-bold mt-2'>Author Name</h6>
						<input className='form-control' name="authorName" ref={register({ required: true })} />
						{errors.authorName && <span className='text-danger'>This field is required</span>}
					</div>
					<div className='col-md-6'>
						<h6 className='fw-bold'>Price</h6>
						<input className='form-control' type="text" name="price" ref={register({ required: true })} />
						{errors.price && <span className='text-danger'>This field is required</span>}
						<label className='mt-4 p-1 d-block' >
							<p id="1" className="btn btn-outline-success mt-2 form-control" aria-hidden="true"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Image</p>
							<input id="2" className="" type="file" name="img" onChange={handleImgUpload} hidden />
						</label>
					</div>
					<p>{result.result}</p>
				</div>


				<input className='btn btn-success mt-2 ms-auto d-flex me-4' type="submit" value="Save Book" />
			</form>
		</div>
	);
};

export default AddProduct;