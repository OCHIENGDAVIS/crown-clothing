import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.tyle.scss';

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingCartIcon className="shopping-icon">
        <span className="item-count">0</span>
      </ShoppingCartIcon>
    </div>
  );
};

export default connect(null, { toggleCartHidden })(CartIcon);
