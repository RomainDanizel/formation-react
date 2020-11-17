import { useContext } from 'react';

import cartContext from '../../contexts/cart';
import setCartContext from '../../contexts/setCart';

import CartItem from '../CartItem/CartItem';

function Cart() {
  const cart  = useContext(cartContext);
  const dispatch  = useContext(setCartContext);

  function updateQuantity(id, quantity) {
    dispatch({
      type: 'updateQuantity',
      id: id,
      quantity: quantity
    });
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
