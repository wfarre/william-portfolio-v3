import React, { useEffect, useState } from "react";
import gsap from "gsap";

import CarouselItem from "../Components/CarouselItem/CarouselItem";

import { ReactComponent as ChevronRight } from "../assets/images/icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../assets/images/icons/chevron-left.svg";

import { portfolioSlides } from "../assets/data/portfolioSlides";
import Header from "../Components/Header/Header";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [slideMax, setSlideMax] = useState(3);

  useEffect(() => {
    gsap.fromTo(
      ".main-p",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1,
        duration: 1,
      }
    );
  }, []);

  // useEffect(() => {
  //   setSlideMax(portfolioSlides.length - 1);
  //   setCurrentSlide(0);
  // }, []);

  // useEffect(() => {
  //   setSlideMax(portfolioSlides.length);
  // }, );

  window.addEventListener("keyup", (e) => {
    const action = e.key;

    switch (action) {
      case "ArrowRight":
        if (currentSlide === slideMax) {
          return;
        } else {
          setCurrentSlide(currentSlide + 1);
        }
        break;
      case "ArrowLeft":
        if (currentSlide === 0) {
          return;
        } else {
          setCurrentSlide(currentSlide - 1);
        }
        break;
      default:
        console.log(action);
        break;
    }
  });

  const handleClick = (e) => {
    console.log(e.target.id);

    const action = e.target.closest(".cbutton").id;

    switch (action) {
      case "next":
        if (currentSlide === slideMax) {
          return;
        } else {
          setCurrentSlide(currentSlide + 1);
        }
        break;
      case "previous":
        if (currentSlide === 0) {
          return;
        } else {
          setCurrentSlide(currentSlide - 1);
        }
        break;
      default:
        console.log(action);
        break;
    }
  };

  useEffect(() => {
    const carouselViewport = document.querySelector(".carousel");
    const slideWidth = carouselViewport.offsetWidth;

    console.log(currentSlide * slideWidth);
    carouselViewport.scroll({
      // left: currentSlide * (slideWidth - 160),
      // left: currentSlide * (slideWidth + 64),
      left: currentSlide * slideWidth,
      behavior: "smooth",
    });

    // console.log(carouselWidth);
  }, [currentSlide, slideMax]);

  return (
    <div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
      <Header title="Portfolio" />

      <main className="main-p">
        <div className="container">
          <button
            className={
              currentSlide === 0
                ? "cbutton cbutton--l cbutton--hidden"
                : "cbutton cbutton--l "
            }
            id="previous"
            onClick={handleClick}
          >
            <ChevronLeft className="chevron" />
          </button>
          <div className="carousel">
            {portfolioSlides.map((slide, index = -1) => {
              index++;
              console.log(slide.title);
              return (
                <CarouselItem
                  currentSlide={currentSlide}
                  key={slide.title + slide.id}
                  title={slide.title}
                  description={slide.description}
                  tags={slide.tags}
                  github={slide.github}
                  website={slide.website}
                  picture={slide.picture}
                  id={slide.id}
                  pictureMobile={slide.pictureMobile}
                />
              );
            })}
          </div>
          <button
            className={
              currentSlide === slideMax
                ? "cbutton cbutton--r cbutton--hidden"
                : "cbutton cbutton--r"
            }
            id="next"
            onClick={handleClick}
          >
            <ChevronRight className="chevron" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
