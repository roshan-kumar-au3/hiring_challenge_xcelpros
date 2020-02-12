import React from 'react';

import './homepage.styles.scss';
import Header from '../../components/header/header.component';
// import { Redirect } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar.component';
import CardList from '../../components/card-list/card-list.component';




const Homepage = () => (
        (localStorage.jwtToken) ?
            <div className='homepage'>
                <Sidebar />
                <Header />
                <CardList />
            </div>
        :
            <div>Not authorized</div>
)

export default Homepage;