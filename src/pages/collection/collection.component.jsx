import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

import { selectCollectionItem } from '../../redux/shop/shop.selector';

const CollectionPage = ({collections}) => {
    // console.log('collection', collection.title, collection.items)
    const {title, items} = collections;
    return(
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map( item => 
                    <CollectionItem key={item.id} item={item}/>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => ({
    collections : selectCollectionItem(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);