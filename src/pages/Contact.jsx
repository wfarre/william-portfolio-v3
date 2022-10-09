import React from "react";

import { ReactComponent as ContactIcon } from "../assets/images/pictures/undraw_contact_us.svg";

const Contact = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Contact</h1>
      </header>
      <main className="main">
        <div className="wrapper">
          <div className="container container--empty">
            <ContactIcon />
          </div>
          <div className="container">
            <div className="contact__info">
              <div className="contact__info__item">
                <h3 className="contact__info__item__title">Address</h3>
                <p className="contact__info__item__content">
                  Sanmin District, Jianxing Road, 807 Kaohsiung, Taiwan{" "}
                </p>
              </div>
            </div>
            <div className="contact__info">
              <div className="contact__info__item">
                <h3 className="contact__info__item__title">Phone number</h3>
                <p className="contact__info__item__content">+886-933-730-512</p>
              </div>
            </div>
            <div className="contact__info">
              <div className="contact__info__item">
                <h3 className="contact__info__item__title">Email address</h3>
                <p className="contact__info__item__content">
                  william.farre@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
