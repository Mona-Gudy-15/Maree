import React from 'react';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content fade-in-up">
              <h1>Transform Your Skin</h1>
              <p className="lead">
                Discover the power of our premium skin brightening cream. 
                Get radiant, glowing skin with our advanced formula that 
                works naturally to enhance your skin's natural beauty.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => scrollToSection('shop')}
                >
                  <i className="fas fa-shopping-cart me-2"></i>
                  Shop Now
                </button>
                <button 
                  className="btn btn-outline-light btn-lg"
                  onClick={() => scrollToSection('quiz')}
                >
                  <i className="fas fa-question-circle me-2"></i>
                  Take Quiz
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <div className="product-showcase">
                <div className="product-image-large">
                  <i className="fas fa-gem"></i>
                </div>
                <div className="floating-elements">
                  <div className="floating-element element-1">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="floating-element element-2">
                    <i className="fas fa-heart"></i>
                  </div>
                  <div className="floating-element element-3">
                    <i className="fas fa-sparkles"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .product-showcase {
          position: relative;
          margin-top: 2rem;
        }
        
        .product-image-large {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #ff6b9d 0%, #ffc107 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 5rem;
          color: white;
          margin: 0 auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          animation: float 3s ease-in-out infinite;
        }
        
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .floating-element {
          position: absolute;
          font-size: 2rem;
          color: #ff6b9d;
          animation: float 2s ease-in-out infinite;
        }
        
        .element-1 {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .element-2 {
          top: 20%;
          right: 10%;
          animation-delay: 0.5s;
        }
        
        .element-3 {
          bottom: 20%;
          left: 20%;
          animation-delay: 1s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 768px) {
          .product-image-large {
            width: 200px;
            height: 200px;
            font-size: 3rem;
          }
          
          .floating-element {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
