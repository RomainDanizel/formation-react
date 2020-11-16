import './CartItem.css';

function CartItem(props) {
  const { product, updateQuantity } = props;
  const { id, name, price, quantity } = product;
  const total = price * quantity;
  // const [ total, setTotal ] = useState(price * quantity);

  function handleMinus() {
    if (quantity > 0) {
      updateQuantity(id, quantity - 1);
    }
  }

  function handlePlus() {
    updateQuantity(id, quantity + 1);
  }

  return (
    <div className="CartItem">
      <div>{name}</div>
      <div>
        <button onClick={handleMinus}>-</button>
        {quantity}
        <button onClick={(handlePlus)}>+</button>
      </div>
      <div>{total}€</div>
    </div>
  ); 
}

export default CartItem;
