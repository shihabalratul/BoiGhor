import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faThLarge, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const SideBar = () => {


	return (

		<div style={{ height: '100vh' }}>
			<ProSidebar className='h-100'>
				<SidebarHeader>
					<h2 className="fw-bolder text-light ms-5 py-2 pb-4">Admin Panel</h2>
				</SidebarHeader>
				<SidebarContent>
					<Menu className='mt-2'>
						<MenuItem to='' className='focus text-light ps-4 ms-1'>
							<h5><FontAwesomeIcon icon={faThLarge} />   Manage</h5>
							<Link to='/admin/manage' />
						</MenuItem>
						<MenuItem className='focus text-light ps-4 ms-1'>
							<h5><FontAwesomeIcon icon={faPlus} />  Add Book</h5>
							<Link to='/admin/addProduct' />
						</MenuItem>
					</Menu>
				</SidebarContent>
			</ProSidebar >
		</div >
	);
};

export default SideBar;