import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
	const loggedInUser = JSON.parse(localStorage.getItem('user'))

	const handleSignOut = () => {
		localStorage.removeItem('user')
		window.location.reload();
	}

	return (
		<div className="d-block bg-white border-bottom sticky-top">
			<nav className="navbar navbar-expand-lg navbar-light  px-4">
				<div className="container-fluid ">
					<h2 className="fw-bolder fs-1"><FontAwesomeIcon icon={faBookOpen} /> Boii Ghor</h2>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link fs-5 fw-bold" to="/home">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link fs-5 fw-bold " to="/orders">Orders</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link fs-5 fw-bold" to="/Admin">Admin</Link>
							</li>
							<li className="nav-item me-3">
								<Link className="nav-link fs-5 fw-bold" to="#">Deals</Link>
							</li>


							{loggedInUser?.name ?
								<li className="nav-item dropdown">
									<p className="nav-link dropdown-toggle fw-bold text-success fs-5" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										{loggedInUser.name}
									</p>
									<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
										<li><Link className="dropdown-item" to="#" onClick={handleSignOut}>Sign Out</Link></li>

									</ul>
								</li> :
								<li>
									<Link className="ms-2 btn btn-success fs-5" to="/signIn">Sign In</Link>
								</li>
							}

						</ul>
					</div>
				</div>
			</nav>
		</div >
	);
};

export default Header;