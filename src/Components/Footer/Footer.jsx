import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <h3 className="footer__header">William Farré's portfolio</h3>
        <nav className="footer__nav">
          {/* <a href="#" className="footer__nav__item">
            <p>Home</p>
          </a>
          <a href="#" className="footer__nav__item">
            <p>About me</p>
          </a>
          <a href="#" className="footer__nav__item">
            <p>Portfolio</p>
          </a>
          <a href="#" className="footer__nav__item">
            <p>Contact</p>
          </a> */}
        </nav>
        <span className="footer__copyright">
          Designed and coded by William Farré - 2022
        </span>
      </footer>
    </div>
  );
};

export default Footer;
