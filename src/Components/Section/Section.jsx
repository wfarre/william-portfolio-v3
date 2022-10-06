import React, { useEffect } from "react";
import { useRef } from "react";
import { useTransform, MotionValue, useScroll, motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// function useParallax(value = MotionValue, distance) {
//   return useTransform(value, [1, 0], [-distance, distance]);
// }

// function reverseuseParallax(value, distance) {
//   return useTransform(value, [0, 1], [distance, -distance])
// }

// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: ".section",
//       start: "center center",
//       end: "bottom top",
//       scrub: true,
//       pin: true,
//     },
//   })
//   .from(".container", { yPercent: -40 }, 0)
//   .from(".image-wrapper", { yPercent: -100 }, 0);

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
// });

// gsap.registerPlugin(ScrollTrigger);

// // sections.for((section) => {
// gsap.to(".image-wrapper", {
//   scrollTrigger: {
//     trigger: ".image-wrapper",
//     markers: true,
//     scrub: true,
//   },
//   y: -400,
//   opacity: 1,
//   //   duration: 3,
// });

const Section = ({ title, content, image, reverse }) => {
  //   console.log(content);
  //   const ref = useRef(null);
  //   const { scrollYProgress } = useScroll({ target: ref });
  //   const y = useParallax(scrollYProgress, 300);
  //   const yneg = useParallax(scrollYProgress, 300);

  //   document.querySelector(".image-wrapper").style.opacity = 0;
  //   document.querySelector(".container").style.opacity = 0;

  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef();
  const textRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    gsap.to(textRef.current, {
      scrollTrigger: {
        start: "top center",
        end: "bottom bottom",
        trigger: sectionRef.current,
        // markers: true,
        scrub: 3,
      },
      y: 0,
      opacity: 1,
      duration: 3,
      delay: 2,
    });

    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom bottom",
        // markers: true,
        scrub: 3,
      },
      y: 0,
      opacity: 1,
      delay: 1,
    });
  });

  return (
    <section
      className={"section " + reverse + " section--about"}
      ref={sectionRef}
    >
      <div className="container reveal_from_top" ref={textRef}>
        <header className="section__header">
          <h2 className="section__header__title">{title}</h2>
        </header>
        <div className="section__main">
          {/* {content} */}
          {content.map((paragraph, key = 0) => {
            key++;
            return (
              <p key={key} className="section__main__text">
                {paragraph.paragraph}
              </p>
            );
          })}
        </div>
        <footer className="section__footer"></footer>
      </div>
      <div className="image-wrapper" ref={imgRef}>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default Section;
