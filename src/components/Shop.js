import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartNotification from './CartNotification';
import './CartButton.css';
import './Shop.css';
import './CartEnhancements.css';

const Shop = () => {
  const navigate = useNavigate();
  const { addToCart, showNotification, notificationMessage, hideNotification } = useCart();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addToCartSuccess, setAddToCartSuccess] = useState(false);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    // Simulate a brief loading state for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addToCart(product);
    setIsAddingToCart(false);
    setAddToCartSuccess(true);
    
    // Reset success state after animation
    setTimeout(() => setAddToCartSuccess(false), 2000);
  };

  const handleBuyNow = () => {
    navigate('/checkout', { 
      state: { 
        product: {
          name: product.name,
          price: 49.99,
          image: "/image/productMaree.png"
        }
      } 
    });
  };

  const product = {
    id: "skincare-shampoo-001",
    name: "Skin Care Brand Shampoo",
    description: "Discover 100% Vegetarian Beauty Products In World With. Products Are Cruelty Free Beauty Products. Buy Face, Body, Hair Care, Makeup Products, Fragrances On.",
    price: 49.99,
    image: "/image/productMaree.png"
  };

  return (
    <>
      <CartNotification 
        show={showNotification} 
        message={notificationMessage} 
        onHide={hideNotification} 
      />
      <section id="shop" className="shop-section">
        <div className="container">
          {/* Header Section */}
          <div className="shop-header">
            <h1 className="shop-title">
              <span className="title-green">Skin Care Products</span>
              <span className="title-dark"> For Teenage Girl</span>
            </h1>
            <p className="shop-description">
              Discover 100% Vegetarian Beauty Products In World With. Products Are Cruelty Free Beauty Products. Buy Face, Body, Hair Care, Makeup Products, Fragrances On.
            </p>
          </div>
          
          {/* Main Product Section */}
          <div className="product-showcase">
            {/* Left Product Display Card */}
            <div className="product-display-card">
              <div className="product-bottles">
                <div className="bottle-container">
                  <div className="bottle-pedestal">
                    <img 
                      src="/image/productMaree.png" 
                      alt="Brighting cream" 
                      className="product-image"
                    />
                  </div>
                </div>
                <div className="botanical-elements">
                  <div className="leaf leaf-1"></div>
                  <div className="leaf leaf-2"></div>
                  <div className="leaf leaf-3"></div>
                  <div className="leaf leaf-4"></div>
                  <div className="leaf leaf-5"></div>
                </div>
              </div>
            </div>
            
            {/* Right Product Details Card */}
            <div className="product-details-card">
              <h2 className="product-title">
                <span className="title-dark">Skin Care</span>
                <span className="title-green"> Brand Shampoo</span>
              </h2>
              <p className="product-description">
                {product.description}
              </p>
              <div className="product-buttons">
                <button 
                  className={`btn-add-to-cart ripple-effect ${isAddingToCart ? 'loading' : ''} ${addToCartSuccess ? 'success' : ''}`}
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                >
                  {isAddingToCart ? 'Adding...' : addToCartSuccess ? 'Added!' : 'Add To Cart'}
                </button>
                <button 
                  className="btn-buy-now"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;