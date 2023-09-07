var t,e;AOS.init({duration:800,easing:"slide"}),(t=jQuery)(window).stellar({responsive:!0,parallaxBackgrounds:!0,parallaxElements:!0,horizontalScrolling:!1,hideDistantElements:!1,scrollProperty:"scroll"}),t(".js-fullheight").css("height",t(window).height()),t(window).resize(function(){t(".js-fullheight").css("height",t(window).height())}),setTimeout(function(){t("#ftco-loader").length>0&&t("#ftco-loader").removeClass("show")},1),// Scrollax
t.Scrollax(),async function(){t("#sidebar").load("./data/output.html")}(),// Creating 2D Solar System (Real-Time Snapshot)
t.getJSON("./data/data.json",function(t){// Find the SVG element/container
let e=document.getElementById("solarSystemSVG"),a=e.width.baseVal.value/2,s=e.height.baseVal.value/2;// Load in Planetary Data
jQuery.each(t,function(t,n){// Change color and scale based on planet
if("earth"==t)//Earth
var o=1,i="#417B38";else if("jupiter"==t)//Jupiter
var o=11,i="#C1844D";else if("mars"==t)//Mars
var o=.5,i="#F97A05";else if("mercury"==t)//Mercury
var o=.33,i="red";else if("neptune"==t)//Neptune
var o=3.7,i="#537CFE";else if("saturn"==t)//Saturn
var o=9,i="#7B7869";else if("uranus"==t)//Uranus
var o=4,i="#D3F9FA";else //Venus
var o=.95,i="#FDBF01";// Iterate to find E
for(// Extract data
// var t = Number(val['JD']);
var r=Number(n.e),l=Number(n.IN)*Math.PI/180,d=Number(n.OM)*Math.PI/180,c=Number(n.W)*Math.PI/180,h=Number(n.MA)*Math.PI/180,u=Number(n.A),f=h+r*Math.sin(h)*(1+r*Math.cos(h)),m=h;Math.abs(m-f)>5e-4;)f=m=f-(f-r*Math.sin(f)-h)/(1-r*Math.cos(f));// Calculate true anomaly and distance
var v=2*Math.atan2(Math.sqrt(1+r)*Math.sin(m/2),Math.sqrt(1-r)*Math.cos(m/2)),p=u*(1-r*Math.cos(m)),w=-(16*(p*(Math.cos(v+c)*Math.cos(d)-Math.sin(v+c)*Math.cos(l)*Math.sin(d))))+a,b=-(16*(p*(Math.cos(v+c)*Math.sin(d)+Math.sin(v+c)*Math.cos(l)*Math.cos(d))))+s;// Find axes of ellipse
let C=16*u,M=Math.sqrt(C*C*(1-r*r)),g=u*r*16,A=g*Math.sin(c),y=g*Math.cos(c);// Draw each planet as a SVG circle
var I=document.createElementNS("http://www.w3.org/2000/svg","circle");I.setAttribute("cx",w),I.setAttribute("cy",b),I.setAttribute("r",3*o),I.setAttribute("stroke","none"),I.setAttribute("fill",i),e.appendChild(I);// Create a path element with the SVG namespace
var N=document.createElementNS("http://www.w3.org/2000/svg","ellipse");N.setAttribute("cx",a-A/2),N.setAttribute("cy",s+y/2),N.setAttribute("rx",C),N.setAttribute("ry",M),N.setAttribute("fill","none"),N.setAttribute("stroke",i),N.setAttribute("stroke-width","1"),e.appendChild(N)});// Draw Sun
var n=document.createElementNS("http://www.w3.org/2000/svg","circle");n.setAttribute("cx",a),n.setAttribute("cy",s),n.setAttribute("r",5),n.setAttribute("fill","yellow"),e.appendChild(n)}),t("body").on("click",".js-fh5co-nav-toggle",function(e){e.preventDefault(),t("#ftco-nav").is(":visible")?t(this).removeClass("active"):t(this).addClass("active")}),t(document).on("click",'#ftco-nav a[href^="#"]',function(e){e.preventDefault(),t.attr(this,"href"),t("html, body").animate({scrollTop:t(t.attr(this,"href")).offset().top-70},500,function(){// window.location.hash = href;
})}),t(".home-slider").owlCarousel({loop:!0,autoplay:!0,margin:0,animateOut:"fadeOut",animateIn:"fadeIn",nav:!1,autoplayHoverPause:!1,items:1,navText:["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),t("nav .dropdown").hover(function(){var e=t(this);// 	 timer;
// clearTimeout(timer);
e.addClass("show"),e.find("> a").attr("aria-expanded",!0),// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
e.find(".dropdown-menu").addClass("show")},function(){var e=t(this);// timer;
// timer = setTimeout(function(){
e.removeClass("show"),e.find("> a").attr("aria-expanded",!1),// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
e.find(".dropdown-menu").removeClass("show");// }, 100);
}),t("#dropdown04").on("show.bs.dropdown",function(){console.log("show")}),t(window).scroll(function(){var e=t(this).scrollTop(),a=t(".ftco_navbar"),s=t(".js-scroll-wrap");e>150&&!a.hasClass("scrolled")&&a.addClass("scrolled"),e<150&&a.hasClass("scrolled")&&a.removeClass("scrolled sleep"),e>350&&(a.hasClass("awake")||a.addClass("awake"),s.length>0&&s.addClass("sleep")),e<350&&(a.hasClass("awake")&&(a.removeClass("awake"),a.addClass("sleep")),s.length>0&&s.removeClass("sleep"))}),t("#section-counter, .hero-wrap, .ftco-counter, .ftco-about").waypoint(function(e){if("down"===e&&!t(this.element).hasClass("ftco-animated")){var a=t.animateNumber.numberStepFactories.separator(",");t(".number").each(function(){var e=t(this),s=e.data("number");// console.log(num);
e.animateNumber({number:s,numberStep:a},2e3)})}},{offset:"95%"}),e=0,t(".ftco-animate").waypoint(function(a){"down"!==a||t(this.element).hasClass("ftco-animated")||(e++,t(this.element).addClass("item-animate"),setTimeout(function(){t("body .ftco-animate.item-animate").each(function(e){var a=t(this);setTimeout(function(){var t=a.data("animate-effect");"fadeIn"===t?a.addClass("fadeIn ftco-animated"):"fadeInLeft"===t?a.addClass("fadeInLeft ftco-animated"):"fadeInRight"===t?a.addClass("fadeInRight ftco-animated"):a.addClass("fadeInUp ftco-animated"),a.removeClass("item-animate")},50*e,"easeInOutExpo")})},100))},{offset:"95%"});//# sourceMappingURL=index.9b0c8c22.js.map

//# sourceMappingURL=index.9b0c8c22.js.map
