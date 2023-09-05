"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


/*******************************
*! Navbar start
*******************************/
// ajoute la class navbar-custom-bg pour ajouter bg-color
$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar .container").toggleClass("navbar-custom-bg");
  });
});
window.sr = ScrollReveal({
  reset: true
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
  distance: "200px"
});
sr.reveal(".feature-reveal .reveal-left i", {
  duration: 2000,
  origin: "left",
  distance: "250px",
  delay: 150
});
sr.reveal(".feature-reveal .reveal-rigth", {
  duration: 2000,
  origin: "rigth",
  distance: "200px"
});
sr.reveal(".feature-reveal .reveal-rigth i", {
  duration: 2000,
  origin: "left",
  distance: "250px",
  delay: 150
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
  distance: "200px"
});
sr.reveal(".about-reveal .reveal .btn", {
  duration: 2000,
  origin: "rigth",
  distance: "350px",
  delay: 150
});
sr.reveal(".about-reveal .reveal img", {
  duration: 2000,
  origin: "left",
  distance: "300px",
  delay: 150
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
  distance: "200px"
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
  distance: "200px"
});
sr.reveal(".contact-reveal .reveal-bottom", {
  duration: 2000,
  origin: "bottom",
  distance: "200px"
});

/*******************************
* ! Contact end
/*******************************/

/*******************************
* ! Work Start
/*******************************/
sr.reveal(".work-reveal", {
  duration: 3000,
  origin: "bottom",
  distance: "60%"
});
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
sr.reveal(".footer-reveal-img", {
  duration: 3000,
  origin: "bottom",
  distance: "200px"
});
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
var gallery = document.querySelectorAll(".image"),
  previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  currentImg = previewBox.querySelector(".current-img"),
  totalImg = previewBox.querySelector(".total-img"),
  shadow = document.querySelector(".shadow");
window.onload = function () {
  var _loop = function _loop(i) {
    totalImg.textContent = gallery.length; //passing total img length to totalImg variable
    var newIndex = i; //passing i value to newIndex variable
    var clickedImgIndex; //creating new variable

    gallery[i].onclick = function () {
      clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
      function preview() {
        currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
        var imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
        previewImg.src = imageURL; //passing user clicked img url in previewImg src
      }

      preview(); //calling above function

      var prevBtn = document.querySelector(".prev");
      var nextBtn = document.querySelector(".next");
      if (newIndex == 0) {
        //if index value is equal to 0 then hide prevBtn
        prevBtn.style.display = "none";
      }
      if (newIndex >= gallery.length - 1) {
        //if index value is greater and equal to gallery length by -1 then hide nextBtn
        nextBtn.style.display = "none";
      }
      prevBtn.onclick = function () {
        newIndex--; //decrement index
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        } else {
          preview();
          nextBtn.style.display = "block";
        }
      };
      nextBtn.onclick = function () {
        newIndex++; //increment index
        if (newIndex >= gallery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        } else {
          preview();
          prevBtn.style.display = "block";
        }
      };
      document.querySelector("body").style.overflow = "hidden";
      previewBox.classList.add("show");
      shadow.style.display = "block";
      closeIcon.onclick = function () {
        newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
      };
    };
  };
  for (var i = 0; i < gallery.length; i++) {
    _loop(i);
  }
};
/****************************************************************************************************************************
*! details_realization.html.twig end
****************************************************************************************************************************/

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IFRvb2x0aXAsIFRvYXN0LCBQb3BvdmVyIH0gZnJvbSAnYm9vdHN0cmFwJztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIE5hdmJhciBzdGFydFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyBham91dGUgbGEgY2xhc3MgbmF2YmFyLWN1c3RvbS1iZyBwb3VyIGFqb3V0ZXIgYmctY29sb3JcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAkKFwiLm5hdmJhci10b2dnbGVyXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoXCIubmF2YmFyIC5jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJuYXZiYXItY3VzdG9tLWJnXCIpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG53aW5kb3cuc3IgPSBTY3JvbGxSZXZlYWwoe1xyXG4gICAgcmVzZXQ6IHRydWUsXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiEgSW5kZXguaHRtbC50d2lnIHN0YXJ0XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIEZlYXR1cmUgc3RhcnRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbnNyLnJldmVhbChcIi5mZWF0dXJlLXJldmVhbCAucmV2ZWFsLWxlZnRcIiwge1xyXG4gIGR1cmF0aW9uOiAyMDAwLFxyXG4gIG9yaWdpbjogXCJsZWZ0XCIsXHJcbiAgZGlzdGFuY2U6IFwiMjAwcHhcIixcclxufSk7XHJcblxyXG5zci5yZXZlYWwoXCIuZmVhdHVyZS1yZXZlYWwgLnJldmVhbC1sZWZ0IGlcIiwge1xyXG4gIGR1cmF0aW9uOiAyMDAwLFxyXG4gIG9yaWdpbjogXCJsZWZ0XCIsXHJcbiAgZGlzdGFuY2U6IFwiMjUwcHhcIixcclxuICBkZWxheTogMTUwLFxyXG59KTtcclxuXHJcbnNyLnJldmVhbChcIi5mZWF0dXJlLXJldmVhbCAucmV2ZWFsLXJpZ3RoXCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwicmlndGhcIixcclxuICBkaXN0YW5jZTogXCIyMDBweFwiLFxyXG59KTtcclxuXHJcbnNyLnJldmVhbChcIi5mZWF0dXJlLXJldmVhbCAucmV2ZWFsLXJpZ3RoIGlcIiwge1xyXG4gIGR1cmF0aW9uOiAyMDAwLFxyXG4gIG9yaWdpbjogXCJsZWZ0XCIsXHJcbiAgZGlzdGFuY2U6IFwiMjUwcHhcIixcclxuICBkZWxheTogMTUwLFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIEZlYXR1cmUgZW5kXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgQWJvdXQgXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIFxyXG5zci5yZXZlYWwoXCIuYWJvdXQtcmV2ZWFsIC5yZXZlYWxcIiwge1xyXG4gIGR1cmF0aW9uOiAyMDAwLFxyXG4gIG9yaWdpbjogXCJyaWd0aFwiLFxyXG4gIGRpc3RhbmNlOiBcIjIwMHB4XCIsXHJcbn0pO1xyXG5cclxuc3IucmV2ZWFsKFwiLmFib3V0LXJldmVhbCAucmV2ZWFsIC5idG5cIiwge1xyXG4gIGR1cmF0aW9uOiAyMDAwLFxyXG4gIG9yaWdpbjogXCJyaWd0aFwiLFxyXG4gIGRpc3RhbmNlOiBcIjM1MHB4XCIsXHJcbiAgZGVsYXk6IDE1MCxcclxufSk7XHJcblxyXG5zci5yZXZlYWwoXCIuYWJvdXQtcmV2ZWFsIC5yZXZlYWwgaW1nXCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwibGVmdFwiLFxyXG4gIGRpc3RhbmNlOiBcIjMwMHB4XCIsXHJcbiAgZGVsYXk6IDE1MCxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgQWJvdXQgZW5kXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIFNlcnZpY2Ugc3RhcnRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5zci5yZXZlYWwoXCIuc2VydmljZS1yZXZlYWxcIiwge1xyXG4gIGR1cmF0aW9uOiAzMDAwLFxyXG4gIG9yaWdpbjogXCJsZWZ0XCIsXHJcbiAgZGlzdGFuY2U6IFwiMjAwcHhcIixcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgU2VydmljZSBlbmRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgQ29udGFjdCBzdGFydFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuc3IucmV2ZWFsKFwiLmNvbnRhY3QtcmV2ZWFsIC5yZXZlYWwtdG9wXCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwidG9wXCIsXHJcbiAgZGlzdGFuY2U6IFwiMjAwcHhcIixcclxufSk7XHJcblxyXG5zci5yZXZlYWwoXCIuY29udGFjdC1yZXZlYWwgLnJldmVhbC1ib3R0b21cIiwge1xyXG4gIGR1cmF0aW9uOiAyMDAwLFxyXG4gIG9yaWdpbjogXCJib3R0b21cIixcclxuICBkaXN0YW5jZTogXCIyMDBweFwiLFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogISBDb250YWN0IGVuZFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgV29yayBTdGFydFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuc3IucmV2ZWFsKFwiLndvcmstcmV2ZWFsXCIse1xyXG4gIGR1cmF0aW9uIDogMzAwMCAsXHJcbiAgb3JpZ2luOlwiYm90dG9tXCIsXHJcbiAgZGlzdGFuY2UgOlwiNjAlXCIsXHJcbn0pXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogISBXb3JrIEVuZFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiEgSW5kZXguaHRtbC50d2lnIGVuZFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiEgX2Zvb3Rlci5odG1sLnR3aWcgc3RhcnRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogISBJbWcgU3RhcnRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnNyLnJldmVhbChcIi5mb290ZXItcmV2ZWFsLWltZ1wiLHtcclxuICBkdXJhdGlvbiA6IDMwMDAgLFxyXG4gIG9yaWdpbjpcImJvdHRvbVwiLFxyXG4gIGRpc3RhbmNlIDpcIjIwMHB4XCIsXHJcbn0pXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogISBJbWcgRW5kXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiEgX2Zvb3Rlci5odG1sLnR3aWcgZW5kXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIGRldGFpbHNfcmVhbGl6YXRpb24uaHRtbC50d2lnIHN0YXJ0XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vZ2V0dGluZyBhbGwgcmVxdWlyZWQgZWxlbWVudHNcclxuY29uc3QgZ2FsbGVyeSAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltYWdlXCIpLFxyXG5wcmV2aWV3Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmV2aWV3LWJveFwiKSxcclxucHJldmlld0ltZyA9IHByZXZpZXdCb3gucXVlcnlTZWxlY3RvcihcImltZ1wiKSxcclxuY2xvc2VJY29uID0gcHJldmlld0JveC5xdWVyeVNlbGVjdG9yKFwiLmljb25cIiksXHJcbmN1cnJlbnRJbWcgPSBwcmV2aWV3Qm94LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1pbWdcIiksXHJcbnRvdGFsSW1nID0gcHJldmlld0JveC5xdWVyeVNlbGVjdG9yKFwiLnRvdGFsLWltZ1wiKSxcclxuc2hhZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGFkb3dcIik7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCk9PntcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FsbGVyeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRvdGFsSW1nLnRleHRDb250ZW50ID0gZ2FsbGVyeS5sZW5ndGg7IC8vcGFzc2luZyB0b3RhbCBpbWcgbGVuZ3RoIHRvIHRvdGFsSW1nIHZhcmlhYmxlXHJcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gaTsgLy9wYXNzaW5nIGkgdmFsdWUgdG8gbmV3SW5kZXggdmFyaWFibGVcclxuICAgICAgICBsZXQgY2xpY2tlZEltZ0luZGV4OyAvL2NyZWF0aW5nIG5ldyB2YXJpYWJsZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbGxlcnlbaV0ub25jbGljayA9ICgpID0+e1xyXG4gICAgICAgICAgICBjbGlja2VkSW1nSW5kZXggPSBpOyAvL3Bhc3NpbmcgY2xpa2VkIGltYWdlIGluZGV4IHRvIGNyZWF0ZWQgdmFyaWFibGUgKGNsaWNrZWRJbWdJbmRleClcclxuICAgICAgICAgICAgZnVuY3Rpb24gcHJldmlldygpe1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEltZy50ZXh0Q29udGVudCA9IG5ld0luZGV4ICsgMTsgLy9wYXNzaW5nIGN1cnJlbnQgaW1nIGluZGV4IHRvIGN1cnJlbnRJbWcgdmFyaWJsZSB3aXRoIGFkZGluZyArMVxyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlVVJMID0gZ2FsbGVyeVtuZXdJbmRleF0ucXVlcnlTZWxlY3RvcihcImltZ1wiKS5zcmM7IC8vZ2V0dGluZyB1c2VyIGNsaWNrZWQgaW1nIHVybFxyXG4gICAgICAgICAgICAgICAgcHJldmlld0ltZy5zcmMgPSBpbWFnZVVSTDsgLy9wYXNzaW5nIHVzZXIgY2xpY2tlZCBpbWcgdXJsIGluIHByZXZpZXdJbWcgc3JjXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJldmlldygpOyAvL2NhbGxpbmcgYWJvdmUgZnVuY3Rpb25cclxuICAgIFxyXG4gICAgICAgICAgICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmV2XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXh0XCIpO1xyXG4gICAgICAgICAgICBpZihuZXdJbmRleCA9PSAwKXsgLy9pZiBpbmRleCB2YWx1ZSBpcyBlcXVhbCB0byAwIHRoZW4gaGlkZSBwcmV2QnRuXHJcbiAgICAgICAgICAgICAgICBwcmV2QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobmV3SW5kZXggPj0gZ2FsbGVyeS5sZW5ndGggLSAxKXsgLy9pZiBpbmRleCB2YWx1ZSBpcyBncmVhdGVyIGFuZCBlcXVhbCB0byBnYWxsZXJ5IGxlbmd0aCBieSAtMSB0aGVuIGhpZGUgbmV4dEJ0blxyXG4gICAgICAgICAgICAgICAgbmV4dEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZCdG4ub25jbGljayA9ICgpPT57IFxyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXgtLTsgLy9kZWNyZW1lbnQgaW5kZXhcclxuICAgICAgICAgICAgICAgIGlmKG5ld0luZGV4ID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldygpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmV4dEJ0bi5vbmNsaWNrID0gKCk9PnsgXHJcbiAgICAgICAgICAgICAgICBuZXdJbmRleCsrOyAvL2luY3JlbWVudCBpbmRleFxyXG4gICAgICAgICAgICAgICAgaWYobmV3SW5kZXggPj0gZ2FsbGVyeS5sZW5ndGggLSAxKXtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3KCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldygpOyBcclxuICAgICAgICAgICAgICAgICAgICBwcmV2QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBwcmV2aWV3Qm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpOyBcclxuICAgICAgICAgICAgc2hhZG93LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7IFxyXG4gICAgICAgICAgICBjbG9zZUljb24ub25jbGljayA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IGNsaWNrZWRJbWdJbmRleDsgLy9hc3NpZ25pbmcgdXNlciBmaXJzdCBjbGlja2VkIGltZyBpbmRleCB0byBuZXdJbmRleFxyXG4gICAgICAgICAgICAgICAgcHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyBcclxuICAgICAgICAgICAgICAgIG5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIHByZXZpZXdCb3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICBzaGFkb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc3R5bGUub3ZlcmZsb3cgPSBcInNjcm9sbFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiEgZGV0YWlsc19yZWFsaXphdGlvbi5odG1sLnR3aWcgZW5kXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiVG9vbHRpcCIsIlRvYXN0IiwiUG9wb3ZlciIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwid2luZG93Iiwic3IiLCJTY3JvbGxSZXZlYWwiLCJyZXNldCIsInJldmVhbCIsImR1cmF0aW9uIiwib3JpZ2luIiwiZGlzdGFuY2UiLCJkZWxheSIsImdhbGxlcnkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJldmlld0JveCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2aWV3SW1nIiwiY2xvc2VJY29uIiwiY3VycmVudEltZyIsInRvdGFsSW1nIiwic2hhZG93Iiwib25sb2FkIiwiX2xvb3AiLCJpIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJuZXdJbmRleCIsImNsaWNrZWRJbWdJbmRleCIsIm9uY2xpY2siLCJwcmV2aWV3IiwiaW1hZ2VVUkwiLCJzcmMiLCJwcmV2QnRuIiwibmV4dEJ0biIsInN0eWxlIiwiZGlzcGxheSIsIm92ZXJmbG93IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==