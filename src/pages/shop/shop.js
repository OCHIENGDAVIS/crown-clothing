import React from 'react';
import { connect } from 'react-redux';

import PreviewCollection from '../../components/preview-collections/preview-collection';
import './shop.style.scss';

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map((collection) => (
        <PreviewCollection key={collection.id} {...collection} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ shop }) => {
  return { collections: shop };
};

export default connect(mapStateToProps)(ShopPage);
