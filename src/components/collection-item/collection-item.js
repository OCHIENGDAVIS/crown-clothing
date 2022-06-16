import React from 'react';
import { connect } from 'react-redux';

import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Pick
      </CustomButton>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
