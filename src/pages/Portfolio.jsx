import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import CarouselItem from "../Components/CarouselItem/CarouselItem";

import { ReactComponent as ChevronRight } from "../assets/images/icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../assets/images/icons/chevron-left.svg";

// import { portfolioSlides } from "../assets/data/portfolioSlides";

import Kasa from "../assets/images/pictures/kasa.png";
import ArgenBank from "../assets/images/pictures/argent-bank.png";

import Ohmyfood from "../assets/images/pictures/ohmyfood.png";
import Fisheye from "../assets/images/pictures/fisheye.png";

const portfolioSlides = [
  {
    title: "Kasa",
    description:
      "This is the first web application I made using React with OpenClassrooms. The website is like Airbnb so the users can look for different accommodations. Then, when you click on the accommodation, you have will be redirected to the accommodation's page with all the information about the accommodation: the owners, the rating, the location, the equipment... In the past, I have already used React, but this project was a great opportunity to learn more about it and improve my skills.",
    tags: ["HTML", "CSS", "Javascript", "React", "Sass"],
    github: "https://github.com/wfarre/kasa-app-P11/tree/master",
    website: "https://kasa-app-p11.vercel.app/",
    picture: Kasa,
    id: 0,
  },
  {
    title: "Oh my food!",
    description:
      "This is one of the first project I have done with OpenClassrooms. It is a very simple design but I did enjoy doing the animation for website (which was the main purpose of this project). The application allows the user to order food in a restaurant in advance, so that he/she can be served once he/she gets into the restaurant. The biggest challenge in that project was to make the animation for favorite button work, especially using gradient colors.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/wfarre/WilliamFarre_P3_12012022/tree/main",
    website: "https://p3-ohmyfood.vercel.app/",
    picture: Ohmyfood,
    id: 1,
  },
  {
    title: "Argent Bank",
    description:
      "This is Bank web application where the user can log in, log out and also change his/her name in the application. The purpose of this project was to interact with an API using methods like GET, POST. I had to use Redux, so this was the big challenge as it was my first time using it.",
    tags: ["HTML", "CSS", "Javascript", "React", "Redux"],
    github: "https://github.com/wfarre/bank-app",
    picture: ArgenBank,
    id: 2,
  },
  {
    title: "Fisheye",
    description:
      "This website allows photographer to sell their services and they also can share their portfolio. The big challenge was to make this website accessible, I had to learn accessibility for the web. This was a very interesting project, and I still it's challenging",
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/wfarre/Front-End-Fisheye/tree/main",
    website: "https://front-end-fisheye.vercel.app/",
    picture: Fisheye,
    id: 3,
  },
];

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [slideMax, setSlideMax] = useState(3);

  // useEffect(() => {
  //   setSlideMax(portfolioSlides.length - 1);
  //   setCurrentSlide(0);
  // }, []);

  console.log(slideMax);
  console.log(currentSlide);

  // useEffect(() => {
  //   setSlideMax(portfolioSlides.length);
  // }, );

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
    console.log(currentSlide);
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
      <header className="header">
        <h1 className="header__title">Portfolio</h1>
      </header>

      <main className="">
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
