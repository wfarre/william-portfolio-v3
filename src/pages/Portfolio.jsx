import React from "react";

import { motion } from "framer-motion";
import Image from "../assets/images/computer.jpg";
import { ReactComponent as GithubLogo } from "../assets/images/github.svg";

const Portfolio = () => {
  return (
    <div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
      <header className="header">
        <h1 className="header__title">Portfolio</h1>
      </header>

      <main className="">
        <div className="container">
          <div className="carousel">
            <article className="carousel__item">
              <header className="carousel__item__header">
                <h2 className="carousel__item__header__title">Title</h2>
              </header>

              <div className="carousel__item__image">
                <img src={Image} alt=""></img>
              </div>

              <div className="carousel__item__information">
                <div className="carousel__item__information__links">
                  <a className="logo-wrapper">
                    <GithubLogo className="logo" />
                  </a>
                  <a className="link">Link</a>
                </div>
                <div className="carousel__item__information__techno">
                  <span className="techno-tag">HTML</span>
                  <span className="techno-tag">CSS</span>
                </div>
                <div className="carousel__item__information__description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce bibendum maximus viverra. Vivamus luctus feugiat elit
                    et mollis. Suspendisse tempus imperdiet arcu eu faucibus.
                    Aenean non augue sed libero posuere lacinia consequat id
                    odio. Proin ut est vitae mauris hendrerit tempus et non
                    arcu. Phasellus sodales rutrum elit, sit amet dapibus enim
                    sagittis vitae. Cras sed purus ac odio dictum tempus.
                    Praesent sodales euismod neque. Donec nec nulla at ex ornare
                    mollis in at dui. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                  </p>
                </div>
              </div>
            </article>
            <article className="carousel__item">
              <header className="carousel__item__header">
                <h2 className="carousel__item__header__title">Title</h2>
              </header>

              <div className="carousel__item__image">
                <img src={Image} alt=""></img>
              </div>

              <div className="carousel__item__information">
                <div className="carousel__item__information__links">
                  <a className="logo-wrapper">GitHub</a>
                  <a className="logo-wrapper">Link</a>
                </div>
                <div className="carousel__item__information__description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce bibendum maximus viverra. Vivamus luctus feugiat elit
                    et mollis. Suspendisse tempus imperdiet arcu eu faucibus.
                    Aenean non augue sed libero posuere lacinia consequat id
                    odio. Proin ut est vitae mauris hendrerit tempus et non
                    arcu. Phasellus sodales rutrum elit, sit amet dapibus enim
                    sagittis vitae. Cras sed purus ac odio dictum tempus.
                    Praesent sodales euismod neque. Donec nec nulla at ex ornare
                    mollis in at dui. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                  </p>
                </div>
              </div>
            </article>
            <article className="carousel__item">
              <header className="carousel__item__header">
                <h2 className="carousel__item__header__title">Title</h2>
              </header>

              <div className="carousel__item__image">
                <img src={Image} alt=""></img>
              </div>

              <div className="carousel__item__information">
                <div className="carousel__item__information__links">
                  <a className="logo-wrapper">GitHub</a>
                  <a className="logo-wrapper">Link</a>
                </div>
                <div className="carousel__item__information__description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce bibendum maximus viverra. Vivamus luctus feugiat elit
                    et mollis. Suspendisse tempus imperdiet arcu eu faucibus.
                    Aenean non augue sed libero posuere lacinia consequat id
                    odio. Proin ut est vitae mauris hendrerit tempus et non
                    arcu. Phasellus sodales rutrum elit, sit amet dapibus enim
                    sagittis vitae. Cras sed purus ac odio dictum tempus.
                    Praesent sodales euismod neque. Donec nec nulla at ex ornare
                    mollis in at dui. Pellentesque habitant morbi tristique
                    senectus et netus et malesuada fames ac turpis egestas.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
