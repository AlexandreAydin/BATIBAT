/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';


import { Tooltip, Toast, Popover } from 'bootstrap';


window.sr = ScrollReveal({
    reset: true,
});

/****************************************************************************************************************************
*! Index.html.twig start
****************************************************************************************************************************/
/*******************************
*! Feature start
*******************************/

sr.reveal(".feature-reveal .reveal-left", {
  duration: 2000,
  origin: "left",
  distance: "200px",
});

sr.reveal(".feature-reveal .reveal-left i", {
  duration: 2000,
  origin: "left",
  distance: "250px",
  delay: 150,
});

sr.reveal(".feature-reveal .reveal-rigth", {
  duration: 2000,
  origin: "rigth",
  distance: "200px",
});

sr.reveal(".feature-reveal .reveal-rigth i", {
  duration: 2000,
  origin: "left",
  distance: "250px",
  delay: 150,
});

/*******************************
*! Feature end
*******************************/

/*******************************
* ! About 
/*******************************/
  
sr.reveal(".about-reveal .reveal", {
  duration: 2000,
  origin: "rigth",
  distance: "200px",
});

sr.reveal(".about-reveal .reveal .btn", {
  duration: 2000,
  origin: "rigth",
  distance: "350px",
  delay: 150,
});

sr.reveal(".about-reveal .reveal img", {
  duration: 2000,
  origin: "left",
  distance: "300px",
  delay: 150,
});

/*******************************
* ! About end
/*******************************/

/*******************************
* ! Service start
/*******************************/

sr.reveal(".service-reveal", {
  duration: 3000,
  origin: "left",
  distance: "200px",
});

/*******************************
* ! Service end
/*******************************/

/*******************************
* ! Contact start
/*******************************/
sr.reveal(".contact-reveal .reveal-top", {
  duration: 2000,
  origin: "top",
  distance: "200px",
});

sr.reveal(".contact-reveal .reveal-bottom", {
  duration: 2000,
  origin: "bottom",
  distance: "200px",
});

/*******************************
* ! Contact end
/*******************************/


/*******************************
* ! Work Start
/*******************************/
sr.reveal(".work-reveal",{
  duration : 3000 ,
  origin:"bottom",
  distance :"60%",
})
/*******************************
* ! Work End
/*******************************/
/****************************************************************************************************************************
*! Index.html.twig end
****************************************************************************************************************************/

/****************************************************************************************************************************
*! _footer.html.twig
****************************************************************************************************************************/

/*******************************
* ! Img Start
/*******************************/
.reveal(".footer-reveal-img",{
  duration : 3000 ,
  origin:"bottom",
  distance :"60%",
})
/*******************************
* ! Img End
/*******************************/
