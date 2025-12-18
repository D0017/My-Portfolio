import React from "react";
import AnimatedFooterTitle from "../AnimatedFooterTitle";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-hero-wrap">
          <AnimatedFooterTitle text="PRAVEEN DINUWARA" />
        </div>
        <div className="footer-top">
          <div className="footer-left">
            <p className="footer-label">Portfolio</p>
            <p className="footer-copy">
              © {year} Praveen Dinuwara. All rights reserved.
            </p>
          </div>
          <div className="footer-right">
            <button
              type="button"
              className="footer-top-btn"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              Back to top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
