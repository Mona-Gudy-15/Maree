import React from 'react';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  const handleQuantityChange = (id, quantity) => {
    const parsed = parseInt(quantity, 10);
    if (Number.isNaN(parsed) || parsed <= 0) return;
    updateQuantity(id, parsed);
  };

  const total = getTotalPrice();

  return (
    <div className="cart-page container">
      <h1 className="cart-title">Your Cart</h1>

      {items.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <div className="cart-empty-message">Your cart is empty</div>
          <a className="cart-empty-cta" href="/#shop">Continue Shopping</a>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items cart-items-container">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                </div>
                <div className="cart-item-actions">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="quantity-input"
                  />
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="cart-summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <a className="checkout-btn" href="/checkout">Go to Checkout</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;


