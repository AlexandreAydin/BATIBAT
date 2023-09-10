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
  reset: false
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
sr.reveal(".feature-reveal .reveal-bottom", {
  duration: 2000,
  origin: "bottom",
  distance: "200px"
});
sr.reveal(".feature-reveal .reveal-bottom i", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ21CLEtBQUssQ0FBQ0UsUUFBUSxHQUFHLFFBQVE7TUFDeER0QixVQUFVLENBQUN1QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDaENsQixNQUFNLENBQUNjLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87TUFDOUJsQixTQUFTLENBQUNXLE9BQU8sR0FBRyxZQUFJO1FBQ3BCRixRQUFRLEdBQUdDLGVBQWUsQ0FBQyxDQUFDO1FBQzVCSyxPQUFPLENBQUNFLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87UUFDL0JGLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztRQUMvQnJCLFVBQVUsQ0FBQ3VCLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNuQ25CLE1BQU0sQ0FBQ2MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtRQUM3QnBDLFFBQVEsQ0FBQ2dCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ21CLEtBQUssQ0FBQ0UsUUFBUSxHQUFHLFFBQVE7TUFDNUQsQ0FBQztJQUNMLENBQUM7RUFFTCxDQUFDO0VBdkRELEtBQUssSUFBSWIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHWCxPQUFPLENBQUNhLE1BQU0sRUFBRUYsQ0FBQyxFQUFFO0lBQUFELEtBQUEsQ0FBQUMsQ0FBQTtFQUFBO0FBeUQzQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVPQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgVG9vbHRpcCwgVG9hc3QsIFBvcG92ZXIgfSBmcm9tICdib290c3RyYXAnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiEgTmF2YmFyIHN0YXJ0XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8vIGFqb3V0ZSBsYSBjbGFzcyBuYXZiYXItY3VzdG9tLWJnIHBvdXIgYWpvdXRlciBiZy1jb2xvclxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICQoXCIubmF2YmFyLXRvZ2dsZXJcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgJChcIi5uYXZiYXIgLmNvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcIm5hdmJhci1jdXN0b20tYmdcIik7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbndpbmRvdy5zciA9IFNjcm9sbFJldmVhbCh7XHJcbiAgICByZXNldDogZmFsc2UsXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiEgSW5kZXguaHRtbC50d2lnIHN0YXJ0XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIEZlYXR1cmUgc3RhcnRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbnNyLnJldmVhbChcIi5mZWF0dXJlLXJldmVhbCAucmV2ZWFsLWxlZnRcIiwge1xyXG4gIGR1cmF0aW9uOiAyMDAwLFxyXG4gIG9yaWdpbjogXCJsZWZ0XCIsXHJcbiAgZGlzdGFuY2U6IFwiMjAwcHhcIixcclxufSk7XHJcblxyXG5zci5yZXZlYWwoXCIuZmVhdHVyZS1yZXZlYWwgLnJldmVhbC1sZWZ0IGlcIiwge1xyXG4gIGR1cmF0aW9uOiAyMDAwLFxyXG4gIG9yaWdpbjogXCJsZWZ0XCIsXHJcbiAgZGlzdGFuY2U6IFwiMjUwcHhcIixcclxuICBkZWxheTogMTUwLFxyXG59KTtcclxuXHJcbnNyLnJldmVhbChcIi5mZWF0dXJlLXJldmVhbCAucmV2ZWFsLWJvdHRvbVwiLCB7XHJcbiAgZHVyYXRpb246IDIwMDAsXHJcbiAgb3JpZ2luOiBcImJvdHRvbVwiLFxyXG4gIGRpc3RhbmNlOiBcIjIwMHB4XCIsXHJcbn0pO1xyXG5cclxuc3IucmV2ZWFsKFwiLmZlYXR1cmUtcmV2ZWFsIC5yZXZlYWwtYm90dG9tIGlcIiwge1xyXG4gIGR1cmF0aW9uOiAyMDAwLFxyXG4gIG9yaWdpbjogXCJsZWZ0XCIsXHJcbiAgZGlzdGFuY2U6IFwiMjUwcHhcIixcclxuICBkZWxheTogMTUwLFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIEZlYXR1cmUgZW5kXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgQWJvdXQgXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gIFxyXG4vLyBzci5yZXZlYWwoXCIuYWJvdXQtcmV2ZWFsIC5yZXZlYWxcIiwge1xyXG4vLyAgIGR1cmF0aW9uOiAyMDAwLFxyXG4vLyAgIG9yaWdpbjogXCJib3R0b21cIixcclxuLy8gICBkaXN0YW5jZTogXCIyMDBweFwiLFxyXG4vLyB9KTtcclxuXHJcbi8vIHNyLnJldmVhbChcIi5hYm91dC1yZXZlYWwgLnJldmVhbCAuYnRuXCIsIHtcclxuLy8gICBkdXJhdGlvbjogMjAwMCxcclxuLy8gICBvcmlnaW46IFwicmlnaHRcIixcclxuLy8gICBkaXN0YW5jZTogXCIzNTBweFwiLFxyXG4vLyAgIGRlbGF5OiAxNTAsXHJcbi8vIH0pO1xyXG5cclxuLy8gc3IucmV2ZWFsKFwiLmFib3V0LXJldmVhbCAucmV2ZWFsIGltZ1wiLCB7XHJcbi8vICAgZHVyYXRpb246IDIwMDAsXHJcbi8vICAgb3JpZ2luOiBcImxlZnRcIixcclxuLy8gICBkaXN0YW5jZTogXCIzMDBweFwiLFxyXG4vLyAgIGRlbGF5OiAxNTAsXHJcbi8vIH0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIEFib3V0IGVuZFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogISBTZXJ2aWNlIHN0YXJ0XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuc3IucmV2ZWFsKFwiLnNlcnZpY2UtcmV2ZWFsXCIsIHtcclxuICBkdXJhdGlvbjogMzAwMCxcclxuICBvcmlnaW46IFwibGVmdFwiLFxyXG4gIGRpc3RhbmNlOiBcIjIwMHB4XCIsXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIFNlcnZpY2UgZW5kXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIENvbnRhY3Qgc3RhcnRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnNyLnJldmVhbChcIi5jb250YWN0LXJldmVhbCAucmV2ZWFsLXRvcFwiLCB7XHJcbiAgZHVyYXRpb246IDIwMDAsXHJcbiAgb3JpZ2luOiBcInRvcFwiLFxyXG4gIGRpc3RhbmNlOiBcIjIwMHB4XCIsXHJcbn0pO1xyXG5cclxuc3IucmV2ZWFsKFwiLmNvbnRhY3QtcmV2ZWFsIC5yZXZlYWwtYm90dG9tXCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwiYm90dG9tXCIsXHJcbiAgZGlzdGFuY2U6IFwiMjAwcHhcIixcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgQ29udGFjdCBlbmRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIFdvcmsgU3RhcnRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnNyLnJldmVhbChcIi53b3JrLXJldmVhbFwiLHtcclxuICBkdXJhdGlvbiA6IDMwMDAgLFxyXG4gIG9yaWdpbjpcImJvdHRvbVwiLFxyXG4gIGRpc3RhbmNlIDpcIjYwJVwiLFxyXG59KVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgV29yayBFbmRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIEluZGV4Lmh0bWwudHdpZyBlbmRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIF9mb290ZXIuaHRtbC50d2lnIHN0YXJ0XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgSW1nIFN0YXJ0XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5zci5yZXZlYWwoXCIuZm9vdGVyLXJldmVhbC1pbWdcIix7XHJcbiAgZHVyYXRpb24gOiAzMDAwICxcclxuICBvcmlnaW46XCJib3R0b21cIixcclxuICBkaXN0YW5jZSA6XCIyMDBweFwiLFxyXG59KVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgSW1nIEVuZFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIF9mb290ZXIuaHRtbC50d2lnIGVuZFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qISBkZXRhaWxzX3JlYWxpemF0aW9uLmh0bWwudHdpZyBzdGFydFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vL2dldHRpbmcgYWxsIHJlcXVpcmVkIGVsZW1lbnRzXHJcbmNvbnN0IGdhbGxlcnkgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWFnZVwiKSxcclxucHJldmlld0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJldmlldy1ib3hcIiksXHJcbnByZXZpZXdJbWcgPSBwcmV2aWV3Qm94LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIiksXHJcbmNsb3NlSWNvbiA9IHByZXZpZXdCb3gucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpLFxyXG5jdXJyZW50SW1nID0gcHJldmlld0JveC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtaW1nXCIpLFxyXG50b3RhbEltZyA9IHByZXZpZXdCb3gucXVlcnlTZWxlY3RvcihcIi50b3RhbC1pbWdcIiksXHJcbnNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hhZG93XCIpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpPT57XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbGxlcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0b3RhbEltZy50ZXh0Q29udGVudCA9IGdhbGxlcnkubGVuZ3RoOyAvL3Bhc3NpbmcgdG90YWwgaW1nIGxlbmd0aCB0byB0b3RhbEltZyB2YXJpYWJsZVxyXG4gICAgICAgIGxldCBuZXdJbmRleCA9IGk7IC8vcGFzc2luZyBpIHZhbHVlIHRvIG5ld0luZGV4IHZhcmlhYmxlXHJcbiAgICAgICAgbGV0IGNsaWNrZWRJbWdJbmRleDsgLy9jcmVhdGluZyBuZXcgdmFyaWFibGVcclxuICAgICAgICBcclxuICAgICAgICBnYWxsZXJ5W2ldLm9uY2xpY2sgPSAoKSA9PntcclxuICAgICAgICAgICAgY2xpY2tlZEltZ0luZGV4ID0gaTsgLy9wYXNzaW5nIGNsaWtlZCBpbWFnZSBpbmRleCB0byBjcmVhdGVkIHZhcmlhYmxlIChjbGlja2VkSW1nSW5kZXgpXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByZXZpZXcoKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbWcudGV4dENvbnRlbnQgPSBuZXdJbmRleCArIDE7IC8vcGFzc2luZyBjdXJyZW50IGltZyBpbmRleCB0byBjdXJyZW50SW1nIHZhcmlibGUgd2l0aCBhZGRpbmcgKzFcclxuICAgICAgICAgICAgICAgIGxldCBpbWFnZVVSTCA9IGdhbGxlcnlbbmV3SW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjOyAvL2dldHRpbmcgdXNlciBjbGlja2VkIGltZyB1cmxcclxuICAgICAgICAgICAgICAgIHByZXZpZXdJbWcuc3JjID0gaW1hZ2VVUkw7IC8vcGFzc2luZyB1c2VyIGNsaWNrZWQgaW1nIHVybCBpbiBwcmV2aWV3SW1nIHNyY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZpZXcoKTsgLy9jYWxsaW5nIGFib3ZlIGZ1bmN0aW9uXHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJldlwiKTtcclxuICAgICAgICAgICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dFwiKTtcclxuICAgICAgICAgICAgaWYobmV3SW5kZXggPT0gMCl7IC8vaWYgaW5kZXggdmFsdWUgaXMgZXF1YWwgdG8gMCB0aGVuIGhpZGUgcHJldkJ0blxyXG4gICAgICAgICAgICAgICAgcHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG5ld0luZGV4ID49IGdhbGxlcnkubGVuZ3RoIC0gMSl7IC8vaWYgaW5kZXggdmFsdWUgaXMgZ3JlYXRlciBhbmQgZXF1YWwgdG8gZ2FsbGVyeSBsZW5ndGggYnkgLTEgdGhlbiBoaWRlIG5leHRCdG5cclxuICAgICAgICAgICAgICAgIG5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2QnRuLm9uY2xpY2sgPSAoKT0+eyBcclxuICAgICAgICAgICAgICAgIG5ld0luZGV4LS07IC8vZGVjcmVtZW50IGluZGV4XHJcbiAgICAgICAgICAgICAgICBpZihuZXdJbmRleCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3KCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5leHRCdG4ub25jbGljayA9ICgpPT57IFxyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXgrKzsgLy9pbmNyZW1lbnQgaW5kZXhcclxuICAgICAgICAgICAgICAgIGlmKG5ld0luZGV4ID49IGdhbGxlcnkubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldygpOyBcclxuICAgICAgICAgICAgICAgICAgICBuZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgcHJldmlld0JveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTsgXHJcbiAgICAgICAgICAgIHNoYWRvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyBcclxuICAgICAgICAgICAgY2xvc2VJY29uLm9uY2xpY2sgPSAoKT0+e1xyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSBjbGlja2VkSW1nSW5kZXg7IC8vYXNzaWduaW5nIHVzZXIgZmlyc3QgY2xpY2tlZCBpbWcgaW5kZXggdG8gbmV3SW5kZXhcclxuICAgICAgICAgICAgICAgIHByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgXHJcbiAgICAgICAgICAgICAgICBuZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3Qm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgc2hhZG93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIGRldGFpbHNfcmVhbGl6YXRpb24uaHRtbC50d2lnIGVuZFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIlRvb2x0aXAiLCJUb2FzdCIsIlBvcG92ZXIiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsIndpbmRvdyIsInNyIiwiU2Nyb2xsUmV2ZWFsIiwicmVzZXQiLCJyZXZlYWwiLCJkdXJhdGlvbiIsIm9yaWdpbiIsImRpc3RhbmNlIiwiZGVsYXkiLCJnYWxsZXJ5IiwicXVlcnlTZWxlY3RvckFsbCIsInByZXZpZXdCb3giLCJxdWVyeVNlbGVjdG9yIiwicHJldmlld0ltZyIsImNsb3NlSWNvbiIsImN1cnJlbnRJbWciLCJ0b3RhbEltZyIsInNoYWRvdyIsIm9ubG9hZCIsIl9sb29wIiwiaSIsInRleHRDb250ZW50IiwibGVuZ3RoIiwibmV3SW5kZXgiLCJjbGlja2VkSW1nSW5kZXgiLCJvbmNsaWNrIiwicHJldmlldyIsImltYWdlVVJMIiwic3JjIiwicHJldkJ0biIsIm5leHRCdG4iLCJzdHlsZSIsImRpc3BsYXkiLCJvdmVyZmxvdyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=