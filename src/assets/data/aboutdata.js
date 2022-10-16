import { ReactComponent as ProgrammingIcon } from "../images/pictures/undraw_web_development.svg";
import { ReactComponent as HobbyIcon } from "../images/pictures/undraw_making_art.svg";

import { ReactComponent as WorldIcon } from "../images/pictures/undraw_the_world_is_mine.svg";

export const sectionContents = [
  {
    title: "Me and the web development",
    content: [
      {
        paragraph:
          "I have always been day dreamer who likes images and stories (movies and video games mainly), so working in this kind ofi ndustry was very attractive to me. Also, I was interested in programming and solving problems, but it was very absract to me for a long time.",
      },
      {
        paragraph:
          "Until the day, I decided to go back to programming and start learning web development, and I really enjoyed, especially the front end. Even though I am front-end developper, I have some notions in back-end development as well, but I need to understand better the back-end development to be a better front-end developper.",
      },
    ],
    image: <ProgrammingIcon className="img" />,
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
          "I guess my passion for languages also lead me to learn programming as well.",
      },
    ],
    image: <WorldIcon className="img" alt="hello" />,
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
          "Another passion, maybe connected with my love for Japanese culture, but I do enjoy martial arts, especially aikido, even though I haven’t practice a lot in my life, but I enjoy the movements of it and the clothes. For now, as I am in Taiwan, I try to learn some Taichichuan, I do enjoy it as well.",
      },
    ],
    image: <HobbyIcon className="img" />,
  },
];
