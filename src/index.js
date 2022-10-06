import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

// function animateFrom(elem, direction) {
//   direction = direction || 1;
//   var x = 0,
//     y = direction * 100;
//   if (elem.classList.contains("reveal_from_top")) {
//     x = -100;
//     y = 0;
//   } else if (elem.classList.contains("reveal_from_bottom")) {
//     x = 100;
//     y = 0;
//   }
//   elem.style.transform = "translate(" + x + "px, " + y + "px)";
//   elem.style.opacity = "0";
//   gsap.fromTo(
//     elem,
//     { x: x, y: y, autoAlpha: 0 },
//     {
//       duration: 1.25,
//       x: 0,
//       y: 0,
//       autoAlpha: 1,
//       ease: "expo",
//       overwrite: "auto",
//     }
//   );
// }

// function hide(elem) {
//   gsap.set(elem, { autoAlpha: 0 });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.utils.toArray(".reveal").forEach(function (elem) {
//     hide(elem); // assure that the element is hidden when scrolled into view

//     ScrollTrigger.create({
//       trigger: elem,
//       onEnter: function () {
//         animateFrom(elem);
//       },
//       onEnterBack: function () {
//         animateFrom(elem, -1);
//       },
//       onLeave: function () {
//         hide(elem);
//       }, // assure that the element is hidden when scrolled into view
//     });
//   });
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
