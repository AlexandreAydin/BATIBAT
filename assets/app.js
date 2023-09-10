/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';
const $ = require('jquery');



import { Tooltip, Toast, Popover } from 'bootstrap';

/*******************************
*! Navbar start
*******************************/
// ajoute la class navbar-custom-bg pour ajouter bg-color
$(document).ready(function(){
  $(".navbar-toggler").click(function(){
      $(".navbar .container").toggleClass("navbar-custom-bg");
  });
});


window.sr = ScrollReveal({
    reset: false,
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

sr.reveal(".feature-reveal .reveal-bottom", {
  duration: 2000,
  origin: "bottom",
  distance: "200px",
});

sr.reveal(".feature-reveal .reveal-bottom i", {
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
  
// sr.reveal(".about-reveal .reveal", {
//   duration: 2000,
//   origin: "bottom",
//   distance: "200px",
// });

// sr.reveal(".about-reveal .reveal .btn", {
//   duration: 2000,
//   origin: "right",
//   distance: "350px",
//   delay: 150,
// });

// sr.reveal(".about-reveal .reveal img", {
//   duration: 2000,
//   origin: "left",
//   distance: "300px",
//   delay: 150,
// });

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
*! _footer.html.twig start
****************************************************************************************************************************/

/*******************************
* ! Img Start
/*******************************/
sr.reveal(".footer-reveal-img",{
  duration : 3000 ,
  origin:"bottom",
  distance :"200px",
})
/*******************************
* ! Img End
/*******************************/

/****************************************************************************************************************************
*! _footer.html.twig end
****************************************************************************************************************************/
/****************************************************************************************************************************
*! details_realization.html.twig start
****************************************************************************************************************************/
//getting all required elements
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    }
    
}
/****************************************************************************************************************************
*! details_realization.html.twig end
****************************************************************************************************************************/