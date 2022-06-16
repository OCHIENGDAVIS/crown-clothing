import React from 'react';
import { connect } from 'react-redux';
import { removeItem, clearItem, addItem } from '../../redux/cart/cart.actions';
import './checkout-item.scss';

const CheckOutItem = ({ cartItem, removeItem, clearItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => clearItem(cartItem)}>
          {' '}
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          {' '}
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { removeItem, clearItem, addItem })(CheckOutItem);
