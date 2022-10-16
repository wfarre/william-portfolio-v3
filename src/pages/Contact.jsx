import gsap from "gsap";
import React, { useEffect } from "react";

import { ReactComponent as ContactIcon } from "../assets/images/pictures/undraw_contact_us.svg";
import Header from "../Components/Header/Header";

const Contact = () => {
  useEffect(() => {
    gsap.fromTo(
      ".main",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1,
        duration: 0.5,
      }
    );
  });
  return (
    <div>
      <Header title="Contact" />
      <main className="main">
        <div className="wrapper">
          <div className="container container--empty">
            <ContactIcon className="img" />
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
