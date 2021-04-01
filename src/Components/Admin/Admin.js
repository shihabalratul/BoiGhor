import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import Manage from '../Manage/Manage';
import SideBar from '../SideBar/SideBar';

const Admin = () => {
	return (
		<div className="row w-100">
			<Router>
				<div style={{ height: '90vh' }} className="col-sm-3 h-100 sticky-top" >
					<SideBar />
				</div>

				<div className="col-sm-9 mt-5">
					<Switch>
						<Route path='/admin/manage'>
							<Manage />
						</Route>
						<Route path='/admin/addProduct'>
							<AddProduct />
						</Route>
						<Route path='/admin/'>
							<AddProduct />
						</Route>
					</Switch>
				</div>


			</Router>
		</div>
	);
};

export default Admin;