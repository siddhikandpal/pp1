import React, { useState } from 'react';
import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('✅ Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Error: ' + data.error);
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to send message');
    }
  };

  return (
    <div id="contact">
      <section className="contact container section">
        <h2 className="section__title">Get In Touch</h2>
        <div className="contact__container grid">
          <div className="contact__info">
            <h3 className="contact_title">Let's connect!</h3>
            <p className="contact_details">Send me an email :)</p>
          </div>
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="contact__form-input"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__form-div">
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="contact__form-input"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="contact__form-div2">
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn">Send message 💬</button>
            <p>{status}</p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
