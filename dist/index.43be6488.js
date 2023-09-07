var e,t;AOS.init({duration:800,easing:"slide"}),(e=jQuery)(window).stellar({responsive:!0,parallaxBackgrounds:!0,parallaxElements:!0,horizontalScrolling:!1,hideDistantElements:!1,scrollProperty:"scroll"}),e(".js-fullheight").css("height",e(window).height()),e(window).resize(function(){e(".js-fullheight").css("height",e(window).height())}),setTimeout(function(){e("#ftco-loader").length>0&&e("#ftco-loader").removeClass("show")},1),// Scrollax
e.Scrollax(),async function(){e("#sidebar").load("./data/output.html")}(),// Creating 2D Solar System (Real-Time Snapshot)
e.getJSON("./data/data.json",function(e){// Find the SVG element/container
let t=document.getElementById("solarSystemSVG"),a=t.width.baseVal.value/2,s=t.height.baseVal.value/2;// Load in Planetary Data
jQuery.each(e,function(e,o){// Change color and scale based on planet
if("earth"==e)//Earth
var n=1,i="#417B38";else if("jupiter"==e)//Jupiter
var n=11,i="#C1844D";else if("mars"==e)//Mars
var n=.5,i="#F97A05";else if("mercury"==e)//Mercury
var n=.33,i="red";else if("neptune"==e)//Neptune
var n=3.7,i="#537CFE";else if("saturn"==e)//Saturn
var n=9,i="#7B7869";else if("uranus"==e)//Uranus
var n=4,i="#D3F9FA";else //Venus
var n=.95,i="#FDBF01";// Iterate to find E
for(// Extract data
// var t = Number(val['JD']);
var r=Number(o.e),l=Number(o.IN)*Math.PI/180,d=Number(o.OM)*Math.PI/180,c=Number(o.W)*Math.PI/180,h=Number(o.MA)*Math.PI/180,u=Number(o.A),m=h+r*Math.sin(h)*(1+r*Math.cos(h)),f=h;Math.abs(f-m)>5e-4;)m=f=m-(m-r*Math.sin(m)-h)/(1-r*Math.cos(m));// Calculate true anomaly and distance
var p=2*Math.atan2(Math.sqrt(1+r)*Math.sin(f/2),Math.sqrt(1-r)*Math.cos(f/2)),v=u*(1-r*Math.cos(f)),w=-(16*(v*(Math.cos(p+c)*Math.cos(d)-Math.sin(p+c)*Math.cos(l)*Math.sin(d))))+a,b=-(16*(v*(Math.cos(p+c)*Math.sin(d)+Math.sin(p+c)*Math.cos(l)*Math.cos(d))))+s;// Find axes of ellipse
let C=16*u,g=Math.sqrt(C*C*(1-r*r)),M=u*r*16,y=M*Math.sin(c),A=M*Math.cos(c);// Draw each planet as a SVG circle
var I=document.createElementNS("http://www.w3.org/2000/svg","circle");I.setAttribute("cx",w),I.setAttribute("cy",b),I.setAttribute("r",3*n),I.setAttribute("stroke","none"),I.setAttribute("fill",i),t.appendChild(I);// Create a path element with the SVG namespace
var k=document.createElementNS("http://www.w3.org/2000/svg","ellipse");k.setAttribute("cx",a-y/2),k.setAttribute("cy",s+A/2),k.setAttribute("rx",C),k.setAttribute("ry",g),k.setAttribute("fill","none"),k.setAttribute("stroke",i),k.setAttribute("stroke-width","1"),t.appendChild(k)});// Draw Sun
var o=document.createElementNS("http://www.w3.org/2000/svg","circle");o.setAttribute("cx",a),o.setAttribute("cy",s),o.setAttribute("r",5),o.setAttribute("fill","yellow"),t.appendChild(o)}),e("body").on("click",".js-fh5co-nav-toggle",function(t){t.preventDefault(),e("#ftco-nav").is(":visible")?e(this).removeClass("active"):e(this).addClass("active")}),e(document).on("click",'#ftco-nav a[href^="#"]',function(t){t.preventDefault(),e.attr(this,"href"),e("html, body").animate({scrollTop:e(e.attr(this,"href")).offset().top-70},500,function(){// window.location.hash = href;
})}),e(".home-slider").owlCarousel({loop:!0,autoplay:!0,margin:0,animateOut:"fadeOut",animateIn:"fadeIn",nav:!1,autoplayHoverPause:!1,items:1,navText:["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),e("nav .dropdown").hover(function(){var t=e(this);// 	 timer;
// clearTimeout(timer);
t.addClass("show"),t.find("> a").attr("aria-expanded",!0),// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
t.find(".dropdown-menu").addClass("show")},function(){var t=e(this);// timer;
// timer = setTimeout(function(){
t.removeClass("show"),t.find("> a").attr("aria-expanded",!1),// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
t.find(".dropdown-menu").removeClass("show");// }, 100);
}),e("#dropdown04").on("show.bs.dropdown",function(){console.log("show")}),e(window).scroll(function(){var t=e(this).scrollTop(),a=e(".ftco_navbar"),s=e(".js-scroll-wrap");t>150&&!a.hasClass("scrolled")&&a.addClass("scrolled"),t<150&&a.hasClass("scrolled")&&a.removeClass("scrolled sleep"),t>350&&(a.hasClass("awake")||a.addClass("awake"),s.length>0&&s.addClass("sleep")),t<350&&(a.hasClass("awake")&&(a.removeClass("awake"),a.addClass("sleep")),s.length>0&&s.removeClass("sleep"))}),e("#section-counter, .hero-wrap, .ftco-counter, .ftco-about").waypoint(function(t){if("down"===t&&!e(this.element).hasClass("ftco-animated")){var a=e.animateNumber.numberStepFactories.separator(",");e(".number").each(function(){var t=e(this),s=t.data("number");// console.log(num);
t.animateNumber({number:s,numberStep:a},2e3)})}},{offset:"95%"}),t=0,e(".ftco-animate").waypoint(function(a){"down"!==a||e(this.element).hasClass("ftco-animated")||(t++,e(this.element).addClass("item-animate"),setTimeout(function(){e("body .ftco-animate.item-animate").each(function(t){var a=e(this);setTimeout(function(){var e=a.data("animate-effect");"fadeIn"===e?a.addClass("fadeIn ftco-animated"):"fadeInLeft"===e?a.addClass("fadeInLeft ftco-animated"):"fadeInRight"===e?a.addClass("fadeInRight ftco-animated"):a.addClass("fadeInUp ftco-animated"),a.removeClass("item-animate")},50*t,"easeInOutExpo")})},100))},{offset:"95%"}),// magnific popup
e(".image-popup").magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]// Will preload 0 - before current, and 1 after the current image
},image:{verticalFit:!0},zoom:{enabled:!0,duration:300// don't foget to change the duration also in CSS
}}),e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1});//# sourceMappingURL=index.43be6488.js.map

//# sourceMappingURL=index.43be6488.js.map
