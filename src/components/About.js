import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <h2 className="about-title">
            About <span className="accent-pink">Our</span> Brand
            <br />
            And <span className="accent-pink">Work</span>
          </h2>
          <p className="about-intro">
            At Your Brand, we believe that skincare should be more than just a routine – it
            should be a transformative experience. Our journey began with a simple yet profound
            realization: the power of natural ingredients to nourish, heal, and rejuvenate the
            skin is unparalleled. With this vision in mind,
          </p>
          <button className="about-cta" onClick={() => document.getElementById('shop').scrollIntoView({ behavior: 'smooth' })}>
            Explore more
          </button>
        </div>

        <div className="about-grid">
          {/* Left column: big image spanning two rows */}
          <div className="image-left grid-left-big">
            <div className="image-wrap">
              <img src="/image/Skincare routine.png" alt="Skincare bottle on pedestal" />
              
            </div>
          </div>

          {/* Center column: top text block */}
          <div className="about-text grid-center-text">
            <h3>Our brand story</h3>
            <p>
              Our brand story is one of passion, dedication, and unwavering commitment to your
              beauty and confidence.
            </p>
          </div>

          {/* Center column: bottom small image */}
          <div className="about-mini image-bottom grid-center-mini">
            <img src="/image/Maree.png" alt="Model applying serum" />
          </div>

          {/* Right column: top pink tile image */}
          <div className="image-right grid-right-image">
            <div className="pink-tile">
              <img src="/image/Maree1.png" alt="Dropper over pink background" />
            </div>
          </div>

          {/* Right column: bottom mission text */}
          <p className="about-mission grid-right-text">
            Our mission is simple yet profound: to empower individuals like you to embrace your
            natural beauty and radiate confidence through healthy, glowing skin.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
