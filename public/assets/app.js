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
  origin: "bottom",
  distance: "100px"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3hEdEIsVUFBVSxDQUFDdUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ2hDbEIsTUFBTSxDQUFDYyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO01BQzlCbEIsU0FBUyxDQUFDVyxPQUFPLEdBQUcsWUFBSTtRQUNwQkYsUUFBUSxHQUFHQyxlQUFlLENBQUMsQ0FBQztRQUM1QkssT0FBTyxDQUFDRSxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO1FBQy9CRixPQUFPLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87UUFDL0JyQixVQUFVLENBQUN1QixTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbkNuQixNQUFNLENBQUNjLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07UUFDN0JwQyxRQUFRLENBQUNnQixhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNtQixLQUFLLENBQUNFLFFBQVEsR0FBRyxRQUFRO01BQzVELENBQUM7SUFDTCxDQUFDO0VBRUwsQ0FBQztFQXZERCxLQUFLLElBQUliLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1gsT0FBTyxDQUFDYSxNQUFNLEVBQUVGLENBQUMsRUFBRTtJQUFBRCxLQUFBLENBQUFDLENBQUE7RUFBQTtBQXlEM0MsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuXHJcbmltcG9ydCB7IFRvb2x0aXAsIFRvYXN0LCBQb3BvdmVyIH0gZnJvbSAnYm9vdHN0cmFwJztcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIE5hdmJhciBzdGFydFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vLyBham91dGUgbGEgY2xhc3MgbmF2YmFyLWN1c3RvbS1iZyBwb3VyIGFqb3V0ZXIgYmctY29sb3JcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAkKFwiLm5hdmJhci10b2dnbGVyXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQoXCIubmF2YmFyIC5jb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJuYXZiYXItY3VzdG9tLWJnXCIpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG53aW5kb3cuc3IgPSBTY3JvbGxSZXZlYWwoe1xyXG4gICAgcmVzZXQ6IGZhbHNlLFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIEluZGV4Lmh0bWwudHdpZyBzdGFydFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qISBGZWF0dXJlIHN0YXJ0XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5zci5yZXZlYWwoXCIuZmVhdHVyZS1yZXZlYWwgLnJldmVhbC1sZWZ0XCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwibGVmdFwiLFxyXG4gIGRpc3RhbmNlOiBcIjIwMHB4XCIsXHJcbn0pO1xyXG5cclxuc3IucmV2ZWFsKFwiLmZlYXR1cmUtcmV2ZWFsIC5yZXZlYWwtbGVmdCBpXCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwibGVmdFwiLFxyXG4gIGRpc3RhbmNlOiBcIjI1MHB4XCIsXHJcbiAgZGVsYXk6IDE1MCxcclxufSk7XHJcblxyXG5zci5yZXZlYWwoXCIuZmVhdHVyZS1yZXZlYWwgLnJldmVhbC1ib3R0b21cIiwge1xyXG4gIGR1cmF0aW9uOiAyMDAwLFxyXG4gIG9yaWdpbjogXCJib3R0b21cIixcclxuICBkaXN0YW5jZTogXCIyMDBweFwiLFxyXG59KTtcclxuXHJcbnNyLnJldmVhbChcIi5mZWF0dXJlLXJldmVhbCAucmV2ZWFsLWJvdHRvbSBpXCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwibGVmdFwiLFxyXG4gIGRpc3RhbmNlOiBcIjI1MHB4XCIsXHJcbiAgZGVsYXk6IDE1MCxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qISBGZWF0dXJlIGVuZFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIEFib3V0IFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBcclxuLy8gc3IucmV2ZWFsKFwiLmFib3V0LXJldmVhbCAucmV2ZWFsXCIsIHtcclxuLy8gICBkdXJhdGlvbjogMjAwMCxcclxuLy8gICBvcmlnaW46IFwiYm90dG9tXCIsXHJcbi8vICAgZGlzdGFuY2U6IFwiMjAwcHhcIixcclxuLy8gfSk7XHJcblxyXG4vLyBzci5yZXZlYWwoXCIuYWJvdXQtcmV2ZWFsIC5yZXZlYWwgLmJ0blwiLCB7XHJcbi8vICAgZHVyYXRpb246IDIwMDAsXHJcbi8vICAgb3JpZ2luOiBcInJpZ2h0XCIsXHJcbi8vICAgZGlzdGFuY2U6IFwiMzUwcHhcIixcclxuLy8gICBkZWxheTogMTUwLFxyXG4vLyB9KTtcclxuXHJcbi8vIHNyLnJldmVhbChcIi5hYm91dC1yZXZlYWwgLnJldmVhbCBpbWdcIiwge1xyXG4vLyAgIGR1cmF0aW9uOiAyMDAwLFxyXG4vLyAgIG9yaWdpbjogXCJsZWZ0XCIsXHJcbi8vICAgZGlzdGFuY2U6IFwiMzAwcHhcIixcclxuLy8gICBkZWxheTogMTUwLFxyXG4vLyB9KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogISBBYm91dCBlbmRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgU2VydmljZSBzdGFydFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbnNyLnJldmVhbChcIi5zZXJ2aWNlLXJldmVhbFwiLCB7XHJcbiAgZHVyYXRpb246IDMwMDAsXHJcbiAgb3JpZ2luOiBcImJvdHRvbVwiLFxyXG4gIGRpc3RhbmNlOiBcIjEwMHB4XCIsXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIFNlcnZpY2UgZW5kXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIENvbnRhY3Qgc3RhcnRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnNyLnJldmVhbChcIi5jb250YWN0LXJldmVhbCAucmV2ZWFsLXRvcFwiLCB7XHJcbiAgZHVyYXRpb246IDIwMDAsXHJcbiAgb3JpZ2luOiBcInRvcFwiLFxyXG4gIGRpc3RhbmNlOiBcIjIwMHB4XCIsXHJcbn0pO1xyXG5cclxuc3IucmV2ZWFsKFwiLmNvbnRhY3QtcmV2ZWFsIC5yZXZlYWwtYm90dG9tXCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwiYm90dG9tXCIsXHJcbiAgZGlzdGFuY2U6IFwiMjAwcHhcIixcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgQ29udGFjdCBlbmRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIFdvcmsgU3RhcnRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnNyLnJldmVhbChcIi53b3JrLXJldmVhbFwiLHtcclxuICBkdXJhdGlvbiA6IDMwMDAgLFxyXG4gIG9yaWdpbjpcImJvdHRvbVwiLFxyXG4gIGRpc3RhbmNlIDpcIjYwJVwiLFxyXG59KVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgV29yayBFbmRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIEluZGV4Lmh0bWwudHdpZyBlbmRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIF9mb290ZXIuaHRtbC50d2lnIHN0YXJ0XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgSW1nIFN0YXJ0XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5zci5yZXZlYWwoXCIuZm9vdGVyLXJldmVhbC1pbWdcIix7XHJcbiAgZHVyYXRpb24gOiAzMDAwICxcclxuICBvcmlnaW46XCJib3R0b21cIixcclxuICBkaXN0YW5jZSA6XCIyMDBweFwiLFxyXG59KVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgSW1nIEVuZFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIF9mb290ZXIuaHRtbC50d2lnIGVuZFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qISBkZXRhaWxzX3JlYWxpemF0aW9uLmh0bWwudHdpZyBzdGFydFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vL2dldHRpbmcgYWxsIHJlcXVpcmVkIGVsZW1lbnRzXHJcbmNvbnN0IGdhbGxlcnkgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWFnZVwiKSxcclxucHJldmlld0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJldmlldy1ib3hcIiksXHJcbnByZXZpZXdJbWcgPSBwcmV2aWV3Qm94LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIiksXHJcbmNsb3NlSWNvbiA9IHByZXZpZXdCb3gucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpLFxyXG5jdXJyZW50SW1nID0gcHJldmlld0JveC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtaW1nXCIpLFxyXG50b3RhbEltZyA9IHByZXZpZXdCb3gucXVlcnlTZWxlY3RvcihcIi50b3RhbC1pbWdcIiksXHJcbnNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hhZG93XCIpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpPT57XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbGxlcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0b3RhbEltZy50ZXh0Q29udGVudCA9IGdhbGxlcnkubGVuZ3RoOyAvL3Bhc3NpbmcgdG90YWwgaW1nIGxlbmd0aCB0byB0b3RhbEltZyB2YXJpYWJsZVxyXG4gICAgICAgIGxldCBuZXdJbmRleCA9IGk7IC8vcGFzc2luZyBpIHZhbHVlIHRvIG5ld0luZGV4IHZhcmlhYmxlXHJcbiAgICAgICAgbGV0IGNsaWNrZWRJbWdJbmRleDsgLy9jcmVhdGluZyBuZXcgdmFyaWFibGVcclxuICAgICAgICBcclxuICAgICAgICBnYWxsZXJ5W2ldLm9uY2xpY2sgPSAoKSA9PntcclxuICAgICAgICAgICAgY2xpY2tlZEltZ0luZGV4ID0gaTsgLy9wYXNzaW5nIGNsaWtlZCBpbWFnZSBpbmRleCB0byBjcmVhdGVkIHZhcmlhYmxlIChjbGlja2VkSW1nSW5kZXgpXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByZXZpZXcoKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbWcudGV4dENvbnRlbnQgPSBuZXdJbmRleCArIDE7IC8vcGFzc2luZyBjdXJyZW50IGltZyBpbmRleCB0byBjdXJyZW50SW1nIHZhcmlibGUgd2l0aCBhZGRpbmcgKzFcclxuICAgICAgICAgICAgICAgIGxldCBpbWFnZVVSTCA9IGdhbGxlcnlbbmV3SW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjOyAvL2dldHRpbmcgdXNlciBjbGlja2VkIGltZyB1cmxcclxuICAgICAgICAgICAgICAgIHByZXZpZXdJbWcuc3JjID0gaW1hZ2VVUkw7IC8vcGFzc2luZyB1c2VyIGNsaWNrZWQgaW1nIHVybCBpbiBwcmV2aWV3SW1nIHNyY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZpZXcoKTsgLy9jYWxsaW5nIGFib3ZlIGZ1bmN0aW9uXHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJldlwiKTtcclxuICAgICAgICAgICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dFwiKTtcclxuICAgICAgICAgICAgaWYobmV3SW5kZXggPT0gMCl7IC8vaWYgaW5kZXggdmFsdWUgaXMgZXF1YWwgdG8gMCB0aGVuIGhpZGUgcHJldkJ0blxyXG4gICAgICAgICAgICAgICAgcHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG5ld0luZGV4ID49IGdhbGxlcnkubGVuZ3RoIC0gMSl7IC8vaWYgaW5kZXggdmFsdWUgaXMgZ3JlYXRlciBhbmQgZXF1YWwgdG8gZ2FsbGVyeSBsZW5ndGggYnkgLTEgdGhlbiBoaWRlIG5leHRCdG5cclxuICAgICAgICAgICAgICAgIG5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2QnRuLm9uY2xpY2sgPSAoKT0+eyBcclxuICAgICAgICAgICAgICAgIG5ld0luZGV4LS07IC8vZGVjcmVtZW50IGluZGV4XHJcbiAgICAgICAgICAgICAgICBpZihuZXdJbmRleCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3KCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5leHRCdG4ub25jbGljayA9ICgpPT57IFxyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXgrKzsgLy9pbmNyZW1lbnQgaW5kZXhcclxuICAgICAgICAgICAgICAgIGlmKG5ld0luZGV4ID49IGdhbGxlcnkubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldygpOyBcclxuICAgICAgICAgICAgICAgICAgICBuZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgcHJldmlld0JveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTsgXHJcbiAgICAgICAgICAgIHNoYWRvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyBcclxuICAgICAgICAgICAgY2xvc2VJY29uLm9uY2xpY2sgPSAoKT0+e1xyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSBjbGlja2VkSW1nSW5kZXg7IC8vYXNzaWduaW5nIHVzZXIgZmlyc3QgY2xpY2tlZCBpbWcgaW5kZXggdG8gbmV3SW5kZXhcclxuICAgICAgICAgICAgICAgIHByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgXHJcbiAgICAgICAgICAgICAgICBuZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3Qm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgc2hhZG93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIGRldGFpbHNfcmVhbGl6YXRpb24uaHRtbC50d2lnIGVuZFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIlRvb2x0aXAiLCJUb2FzdCIsIlBvcG92ZXIiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsIndpbmRvdyIsInNyIiwiU2Nyb2xsUmV2ZWFsIiwicmVzZXQiLCJyZXZlYWwiLCJkdXJhdGlvbiIsIm9yaWdpbiIsImRpc3RhbmNlIiwiZGVsYXkiLCJnYWxsZXJ5IiwicXVlcnlTZWxlY3RvckFsbCIsInByZXZpZXdCb3giLCJxdWVyeVNlbGVjdG9yIiwicHJldmlld0ltZyIsImNsb3NlSWNvbiIsImN1cnJlbnRJbWciLCJ0b3RhbEltZyIsInNoYWRvdyIsIm9ubG9hZCIsIl9sb29wIiwiaSIsInRleHRDb250ZW50IiwibGVuZ3RoIiwibmV3SW5kZXgiLCJjbGlja2VkSW1nSW5kZXgiLCJvbmNsaWNrIiwicHJldmlldyIsImltYWdlVVJMIiwic3JjIiwicHJldkJ0biIsIm5leHRCdG4iLCJzdHlsZSIsImRpc3BsYXkiLCJvdmVyZmxvdyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=