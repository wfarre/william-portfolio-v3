import React from "react";
import computer from "../assets/images/pictures/computer.jpg";
import {
  motion,
  useScroll,
  MotionValue,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import Section from "../Components/Section/Section";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Button = () => {
  return <div></div>;
};

const sectionContents = [
  {
    title: "Me and the web development",
    content: [
      {
        paragraph:
          "I have always been day dreamer who likes images and stories (movies and video games mainly), so working in this kind ofindustry was very attractive to me. Also, I was interested inprogramming and solving problems, but it was very absract to me for a long time.",
      },
      {
        paragraph:
          "Until the day, I decided to go back to programming and start learning web development, and I really enjoyed, especially the front end. Even though I am front-end developper, I have some notions in back-end development as well, but I need to understand better the back-end development to be a better front-end developper.",
      },
    ],
    image: computer,
  },
  {
    title: "Languages",
    content: [
      {
        paragraph:
          "I am French, so I can speak Franch, but I can also speak English and Japanese fluently. I lived in Japan for 5 years where I have worked for 4 years mainly in the travel/hospitality industry.",
      },
      {
        paragraph:
          "Now, I am currently living in Taiwan where I am struggling learning Chinese.",
      },
      {
        paragraph:
          "I guess my passion for languages also lead to learn programming as well.",
      },
    ],
    image: computer,
  },
  {
    title: "My hobbies",
    content: [
      {
        paragraph:
          "I have a big interests in photography. I wish I could be a better photographer but for now, I do enjoy going somewhere and I take what I feel interesting to be taking.",
      },
      {
        paragraph:
          "Another passion, maybe connected with my love for Japanese culture, but I do enjoy martial arts, especially aikido, even though I haven’t practice a lot in my life, but I enjoy the movements of it and the clothes. For now, as I am in Taiwan, I try to learn some Taichichuan, I do enjoy it as weel.",
      },
    ],
    image: computer,
  },
];

// gsap.registerPlugin(ScrollTrigger);

// // document.querySelector(".image-wrapper").style.opacity = 0;
// // document.querySelector(".container").style.opacity = 0;

// // sections.for((section) => {
// gsap.to(".image-wrapper", {
//   scrollTrigger: {
//     trigger: ".section",
//     markers: true,
//     scrub: true,
//   },
//   y: -400,
//   opacity: 1,
//   //   duration: 3,
// });

// gsap.to(".container", {
//   scrollTrigger: {
//     trigger: ".section",
//     markers: true,
//     scrub: true,
//   },
//   y: 400,
//   opacity: 1,
//   //   duration: 3,
// });

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      onScroll={() => {
        console.log("hello");
      }}
    >
      {/* <motion.div
        className="parallax-container"
        // ref={scrollRef}
        style={{ overflow: "scroll" }}
        // contentOffsetY={y}
        // onScroll={(e) => {
        //   const container = document.querySelector(".parallax-container");
        //   console.log(container.scrollTop);
        //   setScrollY(Math.abs(container.scrollTop));
        // }}
      > */}
      <header className="header">
        <h1 className="header__title">About me</h1>
      </header>

      <main className="main">
        {sectionContents.map((section, counter) => {
          counter++;
          return (
            <Section
              key={section.title}
              title={section.title}
              content={section.content}
              image={section.image}
              reverse={counter % 2 === 0 ? "section--reverse " + counter : ""}
            />
          );
        })}
      </main>

      {/* </motion.div> */}
    </div>
  );
};

export default About;
