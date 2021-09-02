import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collection-overview.styles.scss';

import CollectionPreview from '../preview-components/collection-preview.components';
import { selectCollectionOverview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
             {collections.map(({id,...otherCollectionProps}) => (
                    <CollectionPreview key={id}{...otherCollectionProps}/>
                ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionOverview
});

export default connect(mapStateToProps)(CollectionOverview);