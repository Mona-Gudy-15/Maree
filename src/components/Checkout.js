import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'credit-card'
  });

  // Get product data from location state or use default
  const product = location.state?.product || {
    name: "Skin Care Brand Shampoo",
    price: 49.99,
    image: "/image/productMaree.png"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order processing
    setOrderPlaced(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const handleBackToShop = () => {
    navigate('/');
  };

  if (orderPlaced) {
    return (
      <section className="checkout-section">
        <div className="container">
          <div className="order-success">
            <div className="success-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
            <button className="btn-primary" onClick={handleBackToShop}>
              Continue Shopping
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-section">
      <div className="container">
        <div className="checkout-header">
          <button className="back-btn" onClick={handleBackToShop}>
            <i className="fas fa-arrow-left"></i> Back to Shop
          </button>
          <h1>Checkout</h1>
        </div>

        <div className="checkout-content">
          <div className="checkout-form-container">
            <form className="checkout-form" onSubmit={handleSubmit}>
              <div className="form-section">
                <h3>Shipping Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Payment Method</h3>
                <div className="payment-methods">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                    />
                    <span className="payment-label">
                      <i className="fas fa-credit-card"></i>
                      Credit Card
                    </span>
                  </label>
                  
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                    />
                    <span className="payment-label">
                      <i className="fab fa-paypal"></i>
                      PayPal
                    </span>
                  </label>
                  
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank-transfer"
                      checked={formData.paymentMethod === 'bank-transfer'}
                      onChange={handleInputChange}
                    />
                    <span className="payment-label">
                      <i className="fas fa-university"></i>
                      Bank Transfer
                    </span>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn-place-order">
                Place Order
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="order-item">
              <div className="item-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="item-details">
                <h4>{product.name}</h4>
                <p className="item-price">${product.price}</p>
              </div>
            </div>
            
            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${product.price}</span>
              </div>
              <div className="total-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="total-row">
                <span>Tax:</span>
                <span>${(product.price * 0.08).toFixed(2)}</span>
              </div>
              <div className="total-row total-final">
                <span>Total:</span>
                <span>${(product.price * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
