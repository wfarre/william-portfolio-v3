import React from "react";

import Section from "../Components/Section/Section";

import { sectionContents } from "../assets/data/aboutdata";

import Header from "../Components/Header/Header";

const About = () => {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  return (
    <div
      onScroll={() => {
        console.log("hello");
      }}
    >
      <Header title="About me" />

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
    </div>
  );
};

export default About;
