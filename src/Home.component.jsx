import React from 'react';
import './Homepage.style.scss'
const Homepage = () => {
    return(
    <div className='homepage'>
        <h1>Welcome to CROWN CLOTHING</h1>
        <div className='directory-menu'>
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
    
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>JACKETS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
       
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>SNEAKERS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
       
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>WOMEN</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
    
            <div className='menu-items'>
                <div className='content'>
                    <h1 className='title'>MEN</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
    ) 
}

export default Homepage;