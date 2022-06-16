import React from 'react';
import { connect } from 'react-redux';

import './checkout.style.scss';
import CheckOutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-buttton';

const CheckOut = ({ cartItems }) => {
  let totals = 0;
  if (cartItems.length) {
    totals = cartItems
      .map(({ price, quantity }) => price * quantity)
      .reduce((accum, sum) => accum + sum, 0);
  }
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span className="">Product</span>
        </div>
        <div className="header-block">
          <span className="">Description</span>
        </div>
        <div className="header-block">
          <span className="">Quantity</span>
        </div>
        <div className="header-block">
          <span className="">Price</span>
        </div>
        <div className="header-block">
          <span className="">Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: $ {totals}</span>
      </div>
      <div className="test-warning">
        *Use the fillowing test credit card number * <br />
        4242 4242 4242 4242 - CVV 123
      </div>
      <StripeCheckoutButton price={totals} />
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems,
  };
};

export default connect(mapStateToProps)(CheckOut);
