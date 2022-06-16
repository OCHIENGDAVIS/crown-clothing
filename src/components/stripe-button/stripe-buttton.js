import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  console.log(token);
  alert('payment sucessfull');
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51GqYc5COh3tw3J7e4JBd1IYLrbdBgEwVXMX8aTamL1wFaFgMHbeAauSP6zOt0R9MGlhcFwuKtYu2uGwZU9mJS0Sm00zahfMYBy';
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
