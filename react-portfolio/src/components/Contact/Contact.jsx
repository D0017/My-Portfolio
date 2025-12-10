import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); 
  const [budget, setBudget] = useState("50-100");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_w7almzm",  
        "template_cd6m97i",  
        formRef.current,
        "7VPWPTY8vDAuWRttH"
      );
      setSending(false);
      setStatus("success");
      formRef.current.reset();
      setBudget("50-100");
    } catch (err) {
      console.error(err);
      setSending(false);
      setStatus("error");
    }
  };

  return (
    <motion.section
      id="contact"
      className="section contact-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container contact-container">
        {/* left side = connect info */}
        <div className="contact-info-panel">
          <div className="contact-info-header">
            <a href="#contact-form" className="contact-cta-link">
              CONTACT ME ↗
            </a>
          </div>

          <div className="contact-main-info">
            <p className="contact-phone">+94 76 877 0859</p>
            <a
              href="mailto:dinuwara01@gmail.com"
              className="contact-email"
            >
              dinuwara01@gmail.com
            </a>
          </div>

          <div className="contact-social-row">
            <a
              href="https://github.com/D0017"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-dinuwara-219a362a0/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noreferrer"
            >
              X / TWITTER ↗
            </a>
          </div>

          <div className="contact-address">
            <p>Address:</p>
            <p>
              15/B, Richmond Hill,<br />
              Galle, Sri Lanka
            </p>
          </div>
        </div>

        {/* form */}
        <div className="contact-form-panel" id="contact-form">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <label htmlFor="name">YOUR NAME*</label>
              <input id="name" name="user_name" type="text" required />
            </div>

            <div className="form-row">
              <label htmlFor="phone">PHONE*</label>
              <input id="phone" name="user_phone" type="tel" required />
            </div>

            <div className="form-row">
              <label htmlFor="email">YOUR EMAIL*</label>
              <input id="email" name="user_email" type="email" required />
            </div>

            <div className="form-row">
              <label htmlFor="message">HOW CAN I HELP YOU</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              />
            </div>

            <div className="form-row budget-row">
              <span className="budget-label">PROJECT BUDGET (USD)</span>
              <div className="budget-options">
                <button
                  type="button"
                  className={
                    budget === "50-100"
                      ? "budget-option active"
                      : "budget-option"
                  }
                  onClick={() => setBudget("50-100")}
                >
                  50-100
                </button>
                <button
                  type="button"
                  className={
                    budget === "100-500"
                      ? "budget-option active"
                      : "budget-option"
                  }
                  onClick={() => setBudget("100-500")}
                >
                  100–500
                </button>
                <button
                  type="button"
                  className={
                    budget === "MORE"
                      ? "budget-option active"
                      : "budget-option"
                  }
                  onClick={() => setBudget("MORE")}
                >
                  MORE
                </button>
              </div>
              <input
                type="hidden"
                name="project_budget"
                value={budget}
              />
            </div>

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={sending}
            >
              {sending ? "SENDING..." : "DISCUSS THE PROJECT ↗"}
            </button>

            {status === "success" && (
              <p className="form-status success">
                Thank you! I’ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-status error">
                Oops, something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
