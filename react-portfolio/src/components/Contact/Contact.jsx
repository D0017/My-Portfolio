import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="section contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="section-header">
          <h2>Contact</h2>
          <p>Let’s work together</p>
        </div>

        <div className="contact-layout">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              // later: integrate EmailJS / Formspree
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input id="name" type="text" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input id="email" type="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea id="message" rows="5" required />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <p>You can also reach me via:</p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:youremail@example.com">
                  youremail@example.com
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/your-username
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/your-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/your-link
                </a>
              </li>
            </ul>

            <a
              href="/assets/YourName-CV.pdf"
              className="btn btn-secondary"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
