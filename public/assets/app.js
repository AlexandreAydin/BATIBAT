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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFDRHZCLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDbUIsS0FBSyxDQUFDRSxRQUFRLEdBQUcsUUFBUTtNQUN4RHRCLFVBQVUsQ0FBQ3VCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUNoQ2xCLE1BQU0sQ0FBQ2MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztNQUM5QmxCLFNBQVMsQ0FBQ1csT0FBTyxHQUFHLFlBQUk7UUFDcEJGLFFBQVEsR0FBR0MsZUFBZSxDQUFDLENBQUM7UUFDNUJLLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztRQUMvQkYsT0FBTyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO1FBQy9CckIsVUFBVSxDQUFDdUIsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ25DbkIsTUFBTSxDQUFDYyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO1FBQzdCdkIsUUFBUSxDQUFDRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUNtQixLQUFLLENBQUNFLFFBQVEsR0FBRyxRQUFRO01BQzVELENBQUM7SUFDTCxDQUFDO0VBRUwsQ0FBQztFQXZERCxLQUFLLElBQUliLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1osT0FBTyxDQUFDYyxNQUFNLEVBQUVGLENBQUMsRUFBRTtJQUFBRCxLQUFBLENBQUFDLENBQUE7RUFBQTtBQXlEM0MsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XG5cblxuaW1wb3J0IHsgVG9vbHRpcCwgVG9hc3QsIFBvcG92ZXIgfSBmcm9tICdib290c3RyYXAnO1xuXG5cbndpbmRvdy5zciA9IFNjcm9sbFJldmVhbCh7XG4gICAgcmVzZXQ6IHRydWUsXG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiohIEluZGV4Lmh0bWwudHdpZyBzdGFydFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qISBGZWF0dXJlIHN0YXJ0XG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5zci5yZXZlYWwoXCIuZmVhdHVyZS1yZXZlYWwgLnJldmVhbC1sZWZ0XCIsIHtcbiAgZHVyYXRpb246IDIwMDAsXG4gIG9yaWdpbjogXCJsZWZ0XCIsXG4gIGRpc3RhbmNlOiBcIjIwMHB4XCIsXG59KTtcblxuc3IucmV2ZWFsKFwiLmZlYXR1cmUtcmV2ZWFsIC5yZXZlYWwtbGVmdCBpXCIsIHtcbiAgZHVyYXRpb246IDIwMDAsXG4gIG9yaWdpbjogXCJsZWZ0XCIsXG4gIGRpc3RhbmNlOiBcIjI1MHB4XCIsXG4gIGRlbGF5OiAxNTAsXG59KTtcblxuc3IucmV2ZWFsKFwiLmZlYXR1cmUtcmV2ZWFsIC5yZXZlYWwtcmlndGhcIiwge1xuICBkdXJhdGlvbjogMjAwMCxcbiAgb3JpZ2luOiBcInJpZ3RoXCIsXG4gIGRpc3RhbmNlOiBcIjIwMHB4XCIsXG59KTtcblxuc3IucmV2ZWFsKFwiLmZlYXR1cmUtcmV2ZWFsIC5yZXZlYWwtcmlndGggaVwiLCB7XG4gIGR1cmF0aW9uOiAyMDAwLFxuICBvcmlnaW46IFwibGVmdFwiLFxuICBkaXN0YW5jZTogXCIyNTBweFwiLFxuICBkZWxheTogMTUwLFxufSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qISBGZWF0dXJlIGVuZFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogISBBYm91dCBcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBcbnNyLnJldmVhbChcIi5hYm91dC1yZXZlYWwgLnJldmVhbFwiLCB7XG4gIGR1cmF0aW9uOiAyMDAwLFxuICBvcmlnaW46IFwicmlndGhcIixcbiAgZGlzdGFuY2U6IFwiMjAwcHhcIixcbn0pO1xuXG5zci5yZXZlYWwoXCIuYWJvdXQtcmV2ZWFsIC5yZXZlYWwgLmJ0blwiLCB7XG4gIGR1cmF0aW9uOiAyMDAwLFxuICBvcmlnaW46IFwicmlndGhcIixcbiAgZGlzdGFuY2U6IFwiMzUwcHhcIixcbiAgZGVsYXk6IDE1MCxcbn0pO1xuXG5zci5yZXZlYWwoXCIuYWJvdXQtcmV2ZWFsIC5yZXZlYWwgaW1nXCIsIHtcbiAgZHVyYXRpb246IDIwMDAsXG4gIG9yaWdpbjogXCJsZWZ0XCIsXG4gIGRpc3RhbmNlOiBcIjMwMHB4XCIsXG4gIGRlbGF5OiAxNTAsXG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogISBBYm91dCBlbmRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiAhIFNlcnZpY2Ugc3RhcnRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5zci5yZXZlYWwoXCIuc2VydmljZS1yZXZlYWxcIiwge1xuICBkdXJhdGlvbjogMzAwMCxcbiAgb3JpZ2luOiBcImxlZnRcIixcbiAgZGlzdGFuY2U6IFwiMjAwcHhcIixcbn0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiAhIFNlcnZpY2UgZW5kXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogISBDb250YWN0IHN0YXJ0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbnNyLnJldmVhbChcIi5jb250YWN0LXJldmVhbCAucmV2ZWFsLXRvcFwiLCB7XG4gIGR1cmF0aW9uOiAyMDAwLFxuICBvcmlnaW46IFwidG9wXCIsXG4gIGRpc3RhbmNlOiBcIjIwMHB4XCIsXG59KTtcblxuc3IucmV2ZWFsKFwiLmNvbnRhY3QtcmV2ZWFsIC5yZXZlYWwtYm90dG9tXCIsIHtcbiAgZHVyYXRpb246IDIwMDAsXG4gIG9yaWdpbjogXCJib3R0b21cIixcbiAgZGlzdGFuY2U6IFwiMjAwcHhcIixcbn0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiAhIENvbnRhY3QgZW5kXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiAhIFdvcmsgU3RhcnRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuc3IucmV2ZWFsKFwiLndvcmstcmV2ZWFsXCIse1xuICBkdXJhdGlvbiA6IDMwMDAgLFxuICBvcmlnaW46XCJib3R0b21cIixcbiAgZGlzdGFuY2UgOlwiNjAlXCIsXG59KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogISBXb3JrIEVuZFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiEgSW5kZXguaHRtbC50d2lnIGVuZFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiohIF9mb290ZXIuaHRtbC50d2lnIHN0YXJ0XG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiAhIEltZyBTdGFydFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5zci5yZXZlYWwoXCIuZm9vdGVyLXJldmVhbC1pbWdcIix7XG4gIGR1cmF0aW9uIDogMzAwMCAsXG4gIG9yaWdpbjpcImJvdHRvbVwiLFxuICBkaXN0YW5jZSA6XCIyMDBweFwiLFxufSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qICEgSW1nIEVuZFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qISBfZm9vdGVyLmh0bWwudHdpZyBlbmRcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiEgZGV0YWlsc19yZWFsaXphdGlvbi5odG1sLnR3aWcgc3RhcnRcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vL2dldHRpbmcgYWxsIHJlcXVpcmVkIGVsZW1lbnRzXG5jb25zdCBnYWxsZXJ5ICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW1hZ2VcIiksXG5wcmV2aWV3Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmV2aWV3LWJveFwiKSxcbnByZXZpZXdJbWcgPSBwcmV2aWV3Qm94LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIiksXG5jbG9zZUljb24gPSBwcmV2aWV3Qm94LnF1ZXJ5U2VsZWN0b3IoXCIuaWNvblwiKSxcbmN1cnJlbnRJbWcgPSBwcmV2aWV3Qm94LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1pbWdcIiksXG50b3RhbEltZyA9IHByZXZpZXdCb3gucXVlcnlTZWxlY3RvcihcIi50b3RhbC1pbWdcIiksXG5zaGFkb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoYWRvd1wiKTtcblxud2luZG93Lm9ubG9hZCA9ICgpPT57XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYWxsZXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRvdGFsSW1nLnRleHRDb250ZW50ID0gZ2FsbGVyeS5sZW5ndGg7IC8vcGFzc2luZyB0b3RhbCBpbWcgbGVuZ3RoIHRvIHRvdGFsSW1nIHZhcmlhYmxlXG4gICAgICAgIGxldCBuZXdJbmRleCA9IGk7IC8vcGFzc2luZyBpIHZhbHVlIHRvIG5ld0luZGV4IHZhcmlhYmxlXG4gICAgICAgIGxldCBjbGlja2VkSW1nSW5kZXg7IC8vY3JlYXRpbmcgbmV3IHZhcmlhYmxlXG4gICAgICAgIFxuICAgICAgICBnYWxsZXJ5W2ldLm9uY2xpY2sgPSAoKSA9PntcbiAgICAgICAgICAgIGNsaWNrZWRJbWdJbmRleCA9IGk7IC8vcGFzc2luZyBjbGlrZWQgaW1hZ2UgaW5kZXggdG8gY3JlYXRlZCB2YXJpYWJsZSAoY2xpY2tlZEltZ0luZGV4KVxuICAgICAgICAgICAgZnVuY3Rpb24gcHJldmlldygpe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbWcudGV4dENvbnRlbnQgPSBuZXdJbmRleCArIDE7IC8vcGFzc2luZyBjdXJyZW50IGltZyBpbmRleCB0byBjdXJyZW50SW1nIHZhcmlibGUgd2l0aCBhZGRpbmcgKzFcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2VVUkwgPSBnYWxsZXJ5W25ld0luZGV4XS5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLnNyYzsgLy9nZXR0aW5nIHVzZXIgY2xpY2tlZCBpbWcgdXJsXG4gICAgICAgICAgICAgICAgcHJldmlld0ltZy5zcmMgPSBpbWFnZVVSTDsgLy9wYXNzaW5nIHVzZXIgY2xpY2tlZCBpbWcgdXJsIGluIHByZXZpZXdJbWcgc3JjXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmV2aWV3KCk7IC8vY2FsbGluZyBhYm92ZSBmdW5jdGlvblxuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJldlwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5leHRcIik7XG4gICAgICAgICAgICBpZihuZXdJbmRleCA9PSAwKXsgLy9pZiBpbmRleCB2YWx1ZSBpcyBlcXVhbCB0byAwIHRoZW4gaGlkZSBwcmV2QnRuXG4gICAgICAgICAgICAgICAgcHJldkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobmV3SW5kZXggPj0gZ2FsbGVyeS5sZW5ndGggLSAxKXsgLy9pZiBpbmRleCB2YWx1ZSBpcyBncmVhdGVyIGFuZCBlcXVhbCB0byBnYWxsZXJ5IGxlbmd0aCBieSAtMSB0aGVuIGhpZGUgbmV4dEJ0blxuICAgICAgICAgICAgICAgIG5leHRCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZCdG4ub25jbGljayA9ICgpPT57IFxuICAgICAgICAgICAgICAgIG5ld0luZGV4LS07IC8vZGVjcmVtZW50IGluZGV4XG4gICAgICAgICAgICAgICAgaWYobmV3SW5kZXggPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcoKTsgXG4gICAgICAgICAgICAgICAgICAgIHByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldygpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5leHRCdG4ub25jbGljayA9ICgpPT57IFxuICAgICAgICAgICAgICAgIG5ld0luZGV4Kys7IC8vaW5jcmVtZW50IGluZGV4XG4gICAgICAgICAgICAgICAgaWYobmV3SW5kZXggPj0gZ2FsbGVyeS5sZW5ndGggLSAxKXtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldygpOyBcbiAgICAgICAgICAgICAgICAgICAgbmV4dEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXcoKTsgXG4gICAgICAgICAgICAgICAgICAgIHByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBwcmV2aWV3Qm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpOyBcbiAgICAgICAgICAgIHNoYWRvdy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyBcbiAgICAgICAgICAgIGNsb3NlSWNvbi5vbmNsaWNrID0gKCk9PntcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IGNsaWNrZWRJbWdJbmRleDsgLy9hc3NpZ25pbmcgdXNlciBmaXJzdCBjbGlja2VkIGltZyBpbmRleCB0byBuZXdJbmRleFxuICAgICAgICAgICAgICAgIHByZXZCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgXG4gICAgICAgICAgICAgICAgbmV4dEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIHByZXZpZXdCb3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgICAgICAgICAgc2hhZG93LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiohIGRldGFpbHNfcmVhbGl6YXRpb24uaHRtbC50d2lnIGVuZFxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiVG9vbHRpcCIsIlRvYXN0IiwiUG9wb3ZlciIsIndpbmRvdyIsInNyIiwiU2Nyb2xsUmV2ZWFsIiwicmVzZXQiLCJyZXZlYWwiLCJkdXJhdGlvbiIsIm9yaWdpbiIsImRpc3RhbmNlIiwiZGVsYXkiLCJnYWxsZXJ5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJldmlld0JveCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2aWV3SW1nIiwiY2xvc2VJY29uIiwiY3VycmVudEltZyIsInRvdGFsSW1nIiwic2hhZG93Iiwib25sb2FkIiwiX2xvb3AiLCJpIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJuZXdJbmRleCIsImNsaWNrZWRJbWdJbmRleCIsIm9uY2xpY2siLCJwcmV2aWV3IiwiaW1hZ2VVUkwiLCJzcmMiLCJwcmV2QnRuIiwibmV4dEJ0biIsInN0eWxlIiwiZGlzcGxheSIsIm92ZXJmbG93IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==