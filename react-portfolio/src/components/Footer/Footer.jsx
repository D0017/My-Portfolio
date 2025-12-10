import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const heroText = "PRAVEEN"; // change this to whatever big word you want

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-bottom">
          <p>© {year} Praveen Dinuwara. All rights reserved.</p>
          <button
            type="button"
            className="footer-back-to-top"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            Back to top ↑
          </button>
        </div>
      </div>

      {/* Big animated word at the very bottom */}
      <div className="footer-hero-word" aria-hidden="true">
        {heroText.split("").map((char, index) => (
          <span
            key={index}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
