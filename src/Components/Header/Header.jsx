import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";

const Header = ({ title }) => {
  useEffect(() => {
    gsap.fromTo(
      ".header__title",
      {
        translateY: 200,
        opacity: 0,
        scale: 3,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 1.5,
        scale: 1,
      }
    );
  }, []);

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
  );
};

export default Header;
