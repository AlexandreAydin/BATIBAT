"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["app"],{"./assets/app.js":(a,b,c)=>{c.r(b);var d=c("./assets/styles/app.scss"),e=c("./node_modules/bootstrap/dist/js/bootstrap.esm.js"),f=c("./node_modules/jquery/dist/jquery.js");f(document).ready(function(){f(".navbar-toggler").click(function(){f(".navbar .container").toggleClass("navbar-custom-bg")})}),window.sr=ScrollReveal({reset:!1}),sr.reveal(".feature-reveal .reveal-left",{duration:2e3,origin:"left",distance:"200px"}),sr.reveal(".feature-reveal .reveal-left i",{duration:2e3,origin:"left",distance:"250px",delay:150}),sr.reveal(".feature-reveal .reveal-bottom",{duration:2e3,origin:"bottom",distance:"200px"}),sr.reveal(".feature-reveal .reveal-bottom i",{duration:2e3,origin:"left",distance:"250px",delay:150}),sr.reveal(".service-reveal",{duration:3e3,origin:"bottom",distance:"100px"}),sr.reveal(".contact-reveal .reveal-top",{duration:2e3,origin:"top",distance:"200px"}),sr.reveal(".contact-reveal .reveal-bottom",{duration:2e3,origin:"bottom",distance:"200px"}),sr.reveal(".work-reveal",{duration:3e3,origin:"bottom",distance:"60%"}),sr.reveal(".footer-reveal-img",{duration:3e3,origin:"bottom",distance:"200px"});var g=document.querySelectorAll(".image"),h=document.querySelector(".preview-box"),i=h.querySelector("img"),j=h.querySelector(".icon"),k=h.querySelector(".current-img"),l=h.querySelector(".total-img"),m=document.querySelector(".shadow");window.onload=function(){for(var a=function(a){l.textContent=g.length;var b,c=a;g[a].onclick=function(){function d(){k.textContent=c+1;var a=g[c].querySelector("img").src;i.src=a}b=a,d();var e=document.querySelector(".prev"),f=document.querySelector(".next");0==c&&(e.style.display="none"),c>=g.length-1&&(f.style.display="none"),e.onclick=function(){c--,0==c?(d(),e.style.display="none"):(d(),f.style.display="block")},f.onclick=function(){c++,c>=g.length-1?(d(),f.style.display="none"):(d(),e.style.display="block")},document.querySelector("body").style.overflow="hidden",h.classList.add("show"),m.style.display="block",j.onclick=function(){c=b,e.style.display="block",f.style.display="block",h.classList.remove("show"),m.style.display="none",document.querySelector("body").style.overflow="scroll"}}},b=0;b<g.length;b++)a(b)}},"./assets/styles/app.scss":(a,b,c)=>{c.r(b)}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_jquery_dist_jquery_js"],()=>b("./assets/app.js"));a.O()}]);