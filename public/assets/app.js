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


window.addEventListener('scroll', function () {
  var topNavbar = document.getElementById('top-navbar').offsetHeight;
  var mainNavbar = document.getElementById('main-navbar');
  if (window.pageYOffset >= topNavbar) {
    mainNavbar.style.position = 'fixed';
    mainNavbar.style.top = '0';
  } else {
    mainNavbar.style.position = 'static';
  }
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7SUFDTCxDQUFDO0VBRUwsQ0FBQztFQXZERCxLQUFLLElBQUlaLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1gsT0FBTyxDQUFDYSxNQUFNLEVBQUVGLENBQUMsRUFBRTtJQUFBRCxLQUFBLENBQUFDLENBQUE7RUFBQTtBQXlEM0MsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoUEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcblxyXG5pbXBvcnQgeyBUb29sdGlwLCBUb2FzdCwgUG9wb3ZlciB9IGZyb20gJ2Jvb3RzdHJhcCc7XHJcblxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCB0b3BOYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9wLW5hdmJhcicpLm9mZnNldEhlaWdodDtcclxuICAgIGNvbnN0IG1haW5OYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1uYXZiYXInKTtcclxuXHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHRvcE5hdmJhcikge1xyXG4gICAgICBtYWluTmF2YmFyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgbWFpbk5hdmJhci5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYWluTmF2YmFyLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxud2luZG93LnNyID0gU2Nyb2xsUmV2ZWFsKHtcclxuICAgIHJlc2V0OiB0cnVlLFxyXG59KTtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIEluZGV4Lmh0bWwudHdpZyBzdGFydFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qISBGZWF0dXJlIHN0YXJ0XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5zci5yZXZlYWwoXCIuZmVhdHVyZS1yZXZlYWwgLnJldmVhbC1sZWZ0XCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwibGVmdFwiLFxyXG4gIGRpc3RhbmNlOiBcIjIwMHB4XCIsXHJcbn0pO1xyXG5cclxuc3IucmV2ZWFsKFwiLmZlYXR1cmUtcmV2ZWFsIC5yZXZlYWwtbGVmdCBpXCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwibGVmdFwiLFxyXG4gIGRpc3RhbmNlOiBcIjI1MHB4XCIsXHJcbiAgZGVsYXk6IDE1MCxcclxufSk7XHJcblxyXG5zci5yZXZlYWwoXCIuZmVhdHVyZS1yZXZlYWwgLnJldmVhbC1yaWd0aFwiLCB7XHJcbiAgZHVyYXRpb246IDIwMDAsXHJcbiAgb3JpZ2luOiBcInJpZ3RoXCIsXHJcbiAgZGlzdGFuY2U6IFwiMjAwcHhcIixcclxufSk7XHJcblxyXG5zci5yZXZlYWwoXCIuZmVhdHVyZS1yZXZlYWwgLnJldmVhbC1yaWd0aCBpXCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwibGVmdFwiLFxyXG4gIGRpc3RhbmNlOiBcIjI1MHB4XCIsXHJcbiAgZGVsYXk6IDE1MCxcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qISBGZWF0dXJlIGVuZFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIEFib3V0IFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBcclxuc3IucmV2ZWFsKFwiLmFib3V0LXJldmVhbCAucmV2ZWFsXCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwicmlndGhcIixcclxuICBkaXN0YW5jZTogXCIyMDBweFwiLFxyXG59KTtcclxuXHJcbnNyLnJldmVhbChcIi5hYm91dC1yZXZlYWwgLnJldmVhbCAuYnRuXCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwicmlndGhcIixcclxuICBkaXN0YW5jZTogXCIzNTBweFwiLFxyXG4gIGRlbGF5OiAxNTAsXHJcbn0pO1xyXG5cclxuc3IucmV2ZWFsKFwiLmFib3V0LXJldmVhbCAucmV2ZWFsIGltZ1wiLCB7XHJcbiAgZHVyYXRpb246IDIwMDAsXHJcbiAgb3JpZ2luOiBcImxlZnRcIixcclxuICBkaXN0YW5jZTogXCIzMDBweFwiLFxyXG4gIGRlbGF5OiAxNTAsXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIEFib3V0IGVuZFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogISBTZXJ2aWNlIHN0YXJ0XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuc3IucmV2ZWFsKFwiLnNlcnZpY2UtcmV2ZWFsXCIsIHtcclxuICBkdXJhdGlvbjogMzAwMCxcclxuICBvcmlnaW46IFwibGVmdFwiLFxyXG4gIGRpc3RhbmNlOiBcIjIwMHB4XCIsXHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIFNlcnZpY2UgZW5kXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIENvbnRhY3Qgc3RhcnRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnNyLnJldmVhbChcIi5jb250YWN0LXJldmVhbCAucmV2ZWFsLXRvcFwiLCB7XHJcbiAgZHVyYXRpb246IDIwMDAsXHJcbiAgb3JpZ2luOiBcInRvcFwiLFxyXG4gIGRpc3RhbmNlOiBcIjIwMHB4XCIsXHJcbn0pO1xyXG5cclxuc3IucmV2ZWFsKFwiLmNvbnRhY3QtcmV2ZWFsIC5yZXZlYWwtYm90dG9tXCIsIHtcclxuICBkdXJhdGlvbjogMjAwMCxcclxuICBvcmlnaW46IFwiYm90dG9tXCIsXHJcbiAgZGlzdGFuY2U6IFwiMjAwcHhcIixcclxufSk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgQ29udGFjdCBlbmRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuKiAhIFdvcmsgU3RhcnRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbnNyLnJldmVhbChcIi53b3JrLXJldmVhbFwiLHtcclxuICBkdXJhdGlvbiA6IDMwMDAgLFxyXG4gIG9yaWdpbjpcImJvdHRvbVwiLFxyXG4gIGRpc3RhbmNlIDpcIjYwJVwiLFxyXG59KVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgV29yayBFbmRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIEluZGV4Lmh0bWwudHdpZyBlbmRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIF9mb290ZXIuaHRtbC50d2lnIHN0YXJ0XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgSW1nIFN0YXJ0XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5zci5yZXZlYWwoXCIuZm9vdGVyLXJldmVhbC1pbWdcIix7XHJcbiAgZHVyYXRpb24gOiAzMDAwICxcclxuICBvcmlnaW46XCJib3R0b21cIixcclxuICBkaXN0YW5jZSA6XCIyMDBweFwiLFxyXG59KVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qICEgSW1nIEVuZFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIF9mb290ZXIuaHRtbC50d2lnIGVuZFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qISBkZXRhaWxzX3JlYWxpemF0aW9uLmh0bWwudHdpZyBzdGFydFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vL2dldHRpbmcgYWxsIHJlcXVpcmVkIGVsZW1lbnRzXHJcbmNvbnN0IGdhbGxlcnkgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbWFnZVwiKSxcclxucHJldmlld0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJldmlldy1ib3hcIiksXHJcbnByZXZpZXdJbWcgPSBwcmV2aWV3Qm94LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIiksXHJcbmNsb3NlSWNvbiA9IHByZXZpZXdCb3gucXVlcnlTZWxlY3RvcihcIi5pY29uXCIpLFxyXG5jdXJyZW50SW1nID0gcHJldmlld0JveC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtaW1nXCIpLFxyXG50b3RhbEltZyA9IHByZXZpZXdCb3gucXVlcnlTZWxlY3RvcihcIi50b3RhbC1pbWdcIiksXHJcbnNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hhZG93XCIpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpPT57XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbGxlcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0b3RhbEltZy50ZXh0Q29udGVudCA9IGdhbGxlcnkubGVuZ3RoOyAvL3Bhc3NpbmcgdG90YWwgaW1nIGxlbmd0aCB0byB0b3RhbEltZyB2YXJpYWJsZVxyXG4gICAgICAgIGxldCBuZXdJbmRleCA9IGk7IC8vcGFzc2luZyBpIHZhbHVlIHRvIG5ld0luZGV4IHZhcmlhYmxlXHJcbiAgICAgICAgbGV0IGNsaWNrZWRJbWdJbmRleDsgLy9jcmVhdGluZyBuZXcgdmFyaWFibGVcclxuICAgICAgICBcclxuICAgICAgICBnYWxsZXJ5W2ldLm9uY2xpY2sgPSAoKSA9PntcclxuICAgICAgICAgICAgY2xpY2tlZEltZ0luZGV4ID0gaTsgLy9wYXNzaW5nIGNsaWtlZCBpbWFnZSBpbmRleCB0byBjcmVhdGVkIHZhcmlhYmxlIChjbGlja2VkSW1nSW5kZXgpXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHByZXZpZXcoKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbWcudGV4dENvbnRlbnQgPSBuZXdJbmRleCArIDE7IC8vcGFzc2luZyBjdXJyZW50IGltZyBpbmRleCB0byBjdXJyZW50SW1nIHZhcmlibGUgd2l0aCBhZGRpbmcgKzFcclxuICAgICAgICAgICAgICAgIGxldCBpbWFnZVVSTCA9IGdhbGxlcnlbbmV3SW5kZXhdLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIikuc3JjOyAvL2dldHRpbmcgdXNlciBjbGlja2VkIGltZyB1cmxcclxuICAgICAgICAgICAgICAgIHByZXZpZXdJbWcuc3JjID0gaW1hZ2VVUkw7IC8vcGFzc2luZyB1c2VyIGNsaWNrZWQgaW1nIHVybCBpbiBwcmV2aWV3SW1nIHNyY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZpZXcoKTsgLy9jYWxsaW5nIGFib3ZlIGZ1bmN0aW9uXHJcbiAgICBcclxuICAgICAgICAgICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJldlwiKTtcclxuICAgICAgICAgICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV4dFwiKTtcclxuICAgICAgICAgICAgaWYobmV3SW5kZXggPT0gMCl7IC8vaWYgaW5kZXggdmFsdWUgaXMgZXF1YWwgdG8gMCB0aGVuIGhpZGUgcHJldkJ0blxyXG4gICAgICAgICAgICAgICAgcHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG5ld0luZGV4ID49IGdhbGxlcnkubGVuZ3RoIC0gMSl7IC8vaWYgaW5kZXggdmFsdWUgaXMgZ3JlYXRlciBhbmQgZXF1YWwgdG8gZ2FsbGVyeSBsZW5ndGggYnkgLTEgdGhlbiBoaWRlIG5leHRCdG5cclxuICAgICAgICAgICAgICAgIG5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2QnRuLm9uY2xpY2sgPSAoKT0+eyBcclxuICAgICAgICAgICAgICAgIG5ld0luZGV4LS07IC8vZGVjcmVtZW50IGluZGV4XHJcbiAgICAgICAgICAgICAgICBpZihuZXdJbmRleCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3KCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcoKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5leHRCdG4ub25jbGljayA9ICgpPT57IFxyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXgrKzsgLy9pbmNyZW1lbnQgaW5kZXhcclxuICAgICAgICAgICAgICAgIGlmKG5ld0luZGV4ID49IGdhbGxlcnkubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldygpOyBcclxuICAgICAgICAgICAgICAgICAgICBuZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcoKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgcHJldmlld0JveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTsgXHJcbiAgICAgICAgICAgIHNoYWRvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyBcclxuICAgICAgICAgICAgY2xvc2VJY29uLm9uY2xpY2sgPSAoKT0+e1xyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSBjbGlja2VkSW1nSW5kZXg7IC8vYXNzaWduaW5nIHVzZXIgZmlyc3QgY2xpY2tlZCBpbWcgaW5kZXggdG8gbmV3SW5kZXhcclxuICAgICAgICAgICAgICAgIHByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgXHJcbiAgICAgICAgICAgICAgICBuZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICBwcmV2aWV3Qm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgc2hhZG93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiohIGRldGFpbHNfcmVhbGl6YXRpb24uaHRtbC50d2lnIGVuZFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJUb29sdGlwIiwiVG9hc3QiLCJQb3BvdmVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvcE5hdmJhciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRIZWlnaHQiLCJtYWluTmF2YmFyIiwicGFnZVlPZmZzZXQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwic3IiLCJTY3JvbGxSZXZlYWwiLCJyZXNldCIsInJldmVhbCIsImR1cmF0aW9uIiwib3JpZ2luIiwiZGlzdGFuY2UiLCJkZWxheSIsImdhbGxlcnkiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJldmlld0JveCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2aWV3SW1nIiwiY2xvc2VJY29uIiwiY3VycmVudEltZyIsInRvdGFsSW1nIiwic2hhZG93Iiwib25sb2FkIiwiX2xvb3AiLCJpIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJuZXdJbmRleCIsImNsaWNrZWRJbWdJbmRleCIsIm9uY2xpY2siLCJwcmV2aWV3IiwiaW1hZ2VVUkwiLCJzcmMiLCJwcmV2QnRuIiwibmV4dEJ0biIsImRpc3BsYXkiLCJvdmVyZmxvdyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=