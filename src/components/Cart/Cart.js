import { useState } from 'react';

import CartItem from '../CartItem/CartItem';

function Cart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      price: 12,
      name: 'foo',
      quantity: 1
    },
    {
      id: 2,
      price: 42,
      name: 'bar',
      quantity: 1
    }
  ]);

  function updateQuantity(id, quantity) {
    const newCart = cart.map(
      item => item.id === id
        ? { ...item, quantity: quantity }
        : item
    );
    setCart(newCart);
  }

  const total = cart.reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );

  return (
    <div>
      {cart.map(item => <CartItem
        product={item}
        key={item.id}
        updateQuantity={updateQuantity}
      />)}
      <div>total = {total}€</div>
    </div>
  );
}

export default Cart;
