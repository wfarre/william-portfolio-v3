import Kasa from "../images/pictures/kasa.png";
import ArgenBank from "../images/pictures/argent-bank.png";

import Ohmyfood from "../images/pictures/ohmyfood.png";
import Fisheye from "../images/pictures/fisheye.png";

import KasaMobile from "../images/pictures/portfolio - mobile/kasa.png";
import OMFMobile from "../images/pictures/portfolio - mobile/ohmyfood.png";
import ABMobile from "../images/pictures/portfolio - mobile/argentbank.png";
import FisheyeMobile from "../images/pictures/portfolio - mobile/fisheye.png";

export const portfolioSlides = [
  {
    title: "Kasa",
    description:
      "This is the first web application I made using React with OpenClassrooms. The website is like Airbnb so the users can look for different accommodations. Then, when you click on the accommodation, you have will be redirected to the accommodation's page with all the information about the accommodation: the owners, the rating, the location, the equipment... In the past, I have already used React, but this project was a great opportunity to learn more about it and improve my skills.",
    tags: ["HTML", "CSS", "Javascript", "React", "Sass"],
    github: "https://github.com/wfarre/kasa-app-P11/tree/master",
    website: "https://kasa-app-p11.vercel.app/",
    picture: Kasa,
    pictureMobile: KasaMobile,
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
    pictureMobile: OMFMobile,
    id: 1,
  },
  {
    title: "Argent Bank",
    description:
      "This is Bank web application where the user can log in, log out and also change his/her name in the application. The purpose of this project was to interact with an API using methods like GET, POST. I had to use Redux, so this was the big challenge as it was my first time using it.",
    tags: ["HTML", "CSS", "Javascript", "React", "Redux"],
    github: "https://github.com/wfarre/bank-app",
    picture: ArgenBank,
    pictureMobile: ABMobile,
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
    pictureMobile: FisheyeMobile,
    id: 3,
  },
];
