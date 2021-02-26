import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  // const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  // total price
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total += product.price;
  }

  // shipping cost
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  // tax
  const tax = Math.round(total / 10).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);

  const formatNumber = (num) => {
    const presision = num.toFixed();
    return Number(presision);
  };

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Orderd: {cart.length}</p>
      <p>Product price: {formatNumber(total)}</p>
      <p>
        <small>shipping cost: {shipping}</small>
      </p>
      <p>
        <small>tax: {tax}</small>
      </p>
      <p>Total price: {grandTotal}</p>
    </div>
  );
};

export default Cart;
