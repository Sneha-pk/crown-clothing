import React from 'react';
import './menu-items.style.scss';
import { withRouter } from 'react-router-dom';
const MenuItems = ({title,imageUrl, size,history,match,linkUrl}) => {
    return(
        <div 
            className= {`${size} menu-items`}
            onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{
            backgroundImage:`url(${imageUrl})`
            }}/>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItems);