import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectTotalQuantity,
  selectTotalAmount,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";
import "./CartItem.css";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalAmount = useSelector(selectTotalAmount);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    alert("Checkout coming soon!");
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your cart is empty</h2>
        <Link to="/plants">
          <button className="continue-btn">Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <p>Total plants: {totalQuantity}</p>
      <p>Total cost: ${totalAmount.toFixed(2)}</p>

      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Unit price: ${item.price.toFixed(2)}</p>
              <p>
                Total: ${(item.price * item.quantity).toFixed(2)} (
                {item.quantity}x)
              </p>
              <div className="cart-actions">
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
                <button onClick={() => handleRemove(item.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <Link to="/plants">
          <button className="continue-btn">Continue Shopping</button>
        </Link>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
