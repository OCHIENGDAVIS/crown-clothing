import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.style.scss';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart in empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate('/checkout');
          toggleCartHidden();
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems,
  };
};

export default connect(mapStateToProps, { toggleCartHidden })(CartDropdown);
