import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How long does shipping take?',
      a: 'We offer free worldwide shipping with delivery times of 3-7 business days.'
    },
    {
      q: 'Is the cream suitable for sensitive skin?',
      a: 'Yes, our cream is dermatologist-tested and suitable for all skin types, including sensitive skin.'
    },
    {
      q: 'What is your return policy?',
      a: "We offer a 30-day money-back guarantee if you're not completely satisfied with your purchase."
    },
    {
      q: 'How should I use the cream?',
      a: 'Apply a small amount to clean skin twice daily, morning and evening, for best results.'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 2500);
    }, 1200);
  };

  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        {/* FAQ FIRST */}
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find quick answers to the most common questions</p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <div className="faq">
              {faqs.map((item, idx) => (
                <div key={idx} className="faq-item border-0 shadow-sm mb-3">
                  <button
                    className={`faq-question ${openFaq === idx ? 'open' : ''}`}
                    aria-expanded={openFaq === idx}
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  >
                    <i className="fas fa-question-circle text-primary me-2"></i>
                    {item.q}
                    <span className="ms-auto faq-icon">{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="faq-answer text-muted">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACT HERO (matches reference) */}
        <div className="row align-items-start contact-hero">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="contact-title">Get in Touch</h2>
            <h5 className="contact-subtitle">I'd like to hear from you!</h5>
            <p className="contact-copy">If you have any inquiries or just want to say hi, please use the contact form!</p>

            <div className="contact-email d-flex align-items-center mb-3">
              <i className="far fa-envelope me-2"></i>
              <a href="mailto:hello@yourbrand.com" className="email-link">hello@yourbrand.com</a>
            </div>

            <div className="contact-social d-flex align-items-center gap-2">
              <a href="#" className="soc-btn" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="soc-btn" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" className="soc-btn" aria-label="Behance"><i className="fab fa-behance"></i></a>
              <a href="#" className="soc-btn" aria-label="Dribbble"><i className="fab fa-dribbble"></i></a>
              <a href="#" className="soc-btn" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="row g-3 align-items-end">
                <div className="col-6">
                  <label className="form-label form-label-muted">First Name</label>
                  <input type="text" className="form-control contact-input" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="col-6">
                  <label className="form-label form-label-muted">Last Name</label>
                  <input type="text" className="form-control contact-input" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <label className="form-label form-label-muted">Email *</label>
                  <input type="email" className="form-control contact-input" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="col-12">
                  <label className="form-label form-label-muted">Message</label>
                  <textarea className="form-control contact-textarea" rows="4" name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn send-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </div>

              {isSubmitted && (
                <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
                  <i className="fas fa-check-circle me-2"></i>
                  Thank you for your message! We'll get back to you soon.
                  <button type="button" className="btn-close" onClick={() => setIsSubmitted(false)}></button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-hero{background:#faf4ef;border-radius:12px;padding:24px}
        .contact-title{font-size:40px;font-weight:700;color:#8a4b2e;margin:0 0 8px}
        .contact-subtitle{font-weight:700;color:#8a4b2e;margin-bottom:12px}
        .contact-copy{color:#7a7a7a;max-width:380px}
        .email-link{color:#8a4b2e;text-decoration:underline}
        .soc-btn{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;border:1px solid #222;border-radius:50%;color:#222}
        .form-label-muted{color:#6c6c6c;font-weight:600}
        .contact-input{border:1px solid #222;border-radius:2px}
        .contact-textarea{border:1px solid #222;border-radius:2px}
        .send-btn{background:#a4542f;color:#fff;border:none;padding:10px 24px;border-radius:2px}
        .faq-item{border-radius:12px;background:#fff;padding:0}
        .faq-question{width:100%;text-align:left;background:#fff;border:none;outline:none;padding:16px 18px;border-radius:12px;display:flex;align-items:center;gap:8px;font-weight:600}
        .faq-question.open{box-shadow:inset 0 -1px 0 #eee}
        .faq-answer{padding:0 18px 16px}
        .faq-icon{font-weight:700}
      `}</style>
    </section>
  );
};

export default Contact;



