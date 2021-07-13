import React from 'react';
import Directory from '../../components/directory/directory.component';
import './Homepage.style.scss'
const Homepage = () => {
    return(
    <div className='homepage'>
        <h1>Welcome to CROWN CLOTHING</h1>
        <Directory/>
    </div>
    ) 
}

export default Homepage;