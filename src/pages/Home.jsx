import React from "react";
import { ReactComponent as FBLogo } from "../assets/images/facebook.svg";
import { ReactComponent as GithubLogo } from "../assets/images/github.svg";
import { ReactComponent as TwitterLogo } from "../assets/images/twitter.svg";
import { ReactComponent as InstaLogo } from "../assets/images/instagram.svg";
import { ReactComponent as LinkedinLogo } from "../assets/images/linkedin.svg";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="App"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      <header id="header" className="header">
        <div className="header__main">
          <h2 className="header__main__subtitle">
            <span className="red">Hello World,</span> my name is
          </h2>
          <h1 className="header__main__title">William Farré</h1>
          <h2 className="header__main__subtitle">
            I am a <span className="red">front-end developer</span> specialized
            in React who loves coding.
          </h2>
        </div>
        <div className="header__cta">
          <button className="button">CONTACT ME</button>
        </div>
        <div className="header__sns">
          <a className="sns-logo-wrapper" href="google.com">
            <FBLogo className="logo" />
          </a>
          <a className="sns-logo-wrapper" href="google.com">
            <TwitterLogo className="logo" />
          </a>
          <a className="sns-logo-wrapper" href="google.com">
            <InstaLogo className="logo" />
          </a>
          <a className="sns-logo-wrapper" href="google.com">
            <LinkedinLogo className="logo" />
          </a>
          <a className="sns-logo-wrapper" href="google.com">
            <GithubLogo className="logo" />
          </a>
        </div>
      </header>
      <main className="main">
        <div className="section section--home">
          <header className="section__header">
            <h2 className="section__header__title">Let's work together!</h2>
          </header>
          <div className="section__main">
            <p className="section__main__text">
              I am a front-end developper, so my job is to build websites, so
              that your users can enjoy the design you built them. Of course, I
              use HTML/CSS and Javascript (no surprise here), but I can also use
              React.js if you want to use it (spoiler: this website is built
              with React).
            </p>
          </div>
          <footer className="section__footer">
            <button className="button">ABOUT ME</button>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
