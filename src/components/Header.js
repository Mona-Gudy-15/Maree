import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const cartItemCount = getTotalItems();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll / Navigation
  const goTo = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCartClick = () => navigate('/cart');
  const handleLogin = () => navigate('/login');
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <>
      <nav className={`navbar fixed-top ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-grid">
          {/* Left: Logo */}
          <div className="nav-left">
            <a
              href="#"
              className="navbar-brand"
              onClick={(e) => { e.preventDefault(); goTo('home'); }}
            >
              <img src="/image/logo.png" alt="Maree" className="navbar-logo" />
            </a>
          </div>

          {/* Center: Nav Links */}
          <div className="nav-center">
            <ul className="nav-center-list">
              <li className="nav-item"><a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); goTo('home'); }}>Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); goTo('shop'); }}>Shop</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); goTo('about'); }}>About</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); goTo('quiz'); }}>Quiz</a></li>
              <li className="nav-item"><a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); goTo('contact'); }}>Contact</a></li>
              
            </ul>
          </div>

          {/* Right: Cart + Login */}
          <div className="nav-right">
            <button className="cart-button" onClick={handleCartClick} title="Shopping Cart">
              <i className="fas fa-shopping-cart"></i>
              {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
            </button>

            {!isLoggedIn ? (
              <button className="login-button" onClick={handleLogin}>
                <i className="fas fa-sign-in-alt me-1"></i> Login
              </button>
            ) : (
              <button className="user-button" onClick={handleLogout}>
                <i className="fas fa-user-circle me-1"></i> {user?.name || 'User'}
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
