import React, { useEffect } from 'react';
import './CartNotification.css';

const CartNotification = ({ show, message, onHide }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  if (!show) return null;

  return (
    <div className="cart-notification">
      <div className="cart-notification-content">
        <div className="cart-notification-icon">✓</div>
        <div className="cart-notification-message">{message}</div>
        <button 
          className="cart-notification-close" 
          onClick={onHide}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CartNotification;
