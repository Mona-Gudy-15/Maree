import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';
import Quiz from './components/Quiz';
import Checkout from './components/Checkout';
import CartPage from './components/CartPage';
import LoginPage from './components/LoginPage';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <ScrollToHash />
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Shop />
                <About />
                <Quiz />
                <Contact />
              </>
            } />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<LoginPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;


