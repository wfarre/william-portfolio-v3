import React from "react";
import { ReactComponent as GithubLogo } from "../../assets/images/icons/github.svg";
import { ReactComponent as GlobeLogo } from "../../assets/images/icons/globe-solid.svg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

const CarouselItem = ({
  currentSlide,
  id,
  title,
  description,
  tags,
  github,
  website,
  picture,
  pictureMobile,
}) => {
  gsap.registerPlugin(ScrollTrigger);

  const imageRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    gsap.to(".carousel__item .carousel__item__header__title", {
      opacity: 0,
      y: 100,
      duration: 0.5,
    });

    gsap.to(".carousel__item .carousel__item__information", {
      opacity: 0,
      scaleY: 0,
      duration: 0.5,
    });
    gsap.to(".carousel__item__image", {
      scale: 0.9,
    });
  }, [currentSlide, title, description, picture]);

  useEffect(() => {
    gsap.to(".carousel__item.active .carousel__item__header__title", {
      opacity: 1,
      y: 0,
      duration: 1,

      // scale: 1,
    });

    gsap.to(".carousel__item.active .carousel__item__information", {
      opacity: 1,
      scaleY: 1,
      duration: 0.5,
      delay: 0.7,
    });
    // gsap.to(".carousel__item__image__image", {
    //   scale: 0.9,
    // });

    gsap.to(".carousel__item.active .carousel__item__image", {
      scale: 1,
    });
  }, [currentSlide, title, description, picture]);

  return (
    <div>
      <article
        className={
          currentSlide === id ? "carousel__item active" : "carousel__item"
        }
        id={id}
      >
        <header className="carousel__item__header">
          <h2 className="carousel__item__header__title" ref={titleRef}>
            {title}
          </h2>
        </header>

        <div className="carousel__item__image" ref={imageRef}>
          <picture>
            <source media="(max-width: 650px)" srcSet={pictureMobile} />
            <img
              className="carousel__item__image__image"
              src={picture}
              alt=""
            ></img>
          </picture>
        </div>

        <div className="carousel__item__information">
          <div className="carousel__item__information__header">
            <div className="carousel__item__information__links">
              <a className="logo-wrapper" href={github}>
                <GithubLogo className="logo" />
              </a>
              <a className="logo-wrapper link" href={website}>
                <GlobeLogo className={!website ? "logo inactive" : "logo"} />
              </a>
            </div>
            <div className="carousel__item__information__techno">
              {tags.map((tag) => {
                return (
                  <span key={tag} className="techno-tag">
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="carousel__item__information__description">
            <p>{description}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CarouselItem;
