import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="footer-brand">
              <h4 className="mb-3">
                <i className="fas fa-sparkles me-2"></i>
                Maree
              </h4>
              <p className="text-muted mb-4">
                Transform your skin with our premium brightening cream. 
                Natural ingredients, proven results, radiant skin.
              </p>
              <div className="social-links">
                <a href="#" className="social-link me-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link me-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link me-3">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a 
                  href="#home" 
                  className="text-muted text-decoration-none"
                  onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#shop" 
                  className="text-muted text-decoration-none"
                  onClick={(e) => { e.preventDefault(); scrollToSection('shop'); }}
                >
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#about" 
                  className="text-muted text-decoration-none"
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#contact" 
                  className="text-muted text-decoration-none"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Shipping Info</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Returns</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Size Guide</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4 mb-4">
            <h6 className="mb-3">Newsletter</h6>
            <p className="text-muted mb-3">
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <div className="newsletter-form">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email"
                  style={{borderRadius: '25px 0 0 25px'}}
                />
                <button 
                  className="btn btn-primary" 
                  type="button"
                  style={{borderRadius: '0 25px 25px 0'}}
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-4" style={{borderColor: '#444'}} />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted mb-0">
              © 2025 Maree. All rights reserved.
            </p>
          </div>
          {/*<div className="col-md-6 text-md-end">
            <div className="payment-methods">
              <span className="text-muted me-3">We accept:</span>
              <i className="fab fa-cc-visa brand"></i>
              <i className="fab fa-cc-mastercard brand"></i>
              <i className="fab fa-cc-paypal brand"></i>
              <i className="fab fa-cc-apple-pay brand"></i>
            </div>
          </div>*/}
        </div>
      </div>
      
      <style jsx>{`
        .footer{background:#0f1720;color:#cfd8e3}
        .footer h6{color:#ffffff;font-weight:700}
        .footer-brand h4{background:linear-gradient(135deg,#ff6b9d,#ffc107);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .text-muted{color:#9aa4b2 !important}
        .social-link{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;background:rgba(255,255,255,0.08);color:#fff;border-radius:50%;text-decoration:none;transition:all .3s}
        .social-link:hover{background:linear-gradient(135deg,#ff6b9d,#ffc107);transform:translateY(-3px);color:#fff}
        .newsletter-form .form-control{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2);color:#fff}
        .newsletter-form .form-control::placeholder{color:rgba(255,255,255,0.6)}
        .newsletter-form .form-control:focus{background:rgba(255,255,255,0.12);border-color:#ff6b9d;box-shadow:0 0 0 .2rem rgba(255,107,157,.25);color:#fff}
        .payment-methods{display:flex;align-items:center;gap:12px;flex-wrap:nowrap;white-space:nowrap}
        .payment-methods .brand{font-size:1.6rem;color:#cfd8e3;opacity:.85;transition:transform .2s,opacity .2s}
        .payment-methods .brand:hover{opacity:1;transform:translateY(-2px)}
        @media (max-width:480px){.payment-methods .brand{font-size:1.35rem}}
        .footer a.text-decoration-none:hover{color:#fff}
      `}</style>
    </footer>
  );
};

export default Footer;



