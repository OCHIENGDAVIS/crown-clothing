import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.tyle.scss';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden, ItemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingCartIcon className="shopping-icon"></ShoppingCartIcon>
      <span className="item-count">{ItemCount}</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    ItemCount: cartItems.reduce(
      (acculatedQuantity, cartItem) => acculatedQuantity + cartItem.quantity,
      0
    ),
  };
};

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
