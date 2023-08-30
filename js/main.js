AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();

	// Scraper for Phys.org
	var scraper = async function () {
		const url = 'https://phys.org/physics-news/sort/popular/1w/';
		// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
		const proxyUrl = 'https://proxy-server-gspl.onrender.com/'
		const response = await fetch(proxyUrl + url);
		const htmlString = await response.text();
		const parser = new DOMParser();
		const doc = parser.parseFromString(htmlString, 'text/html');
		const container = doc.querySelector('.sorted-news-list');

		$("#sidebar").html(container);
		console.log("Phys.org Scraped");
		console.log(container);

		// var html = '';
		// $.each(data, function(index, value) {
		// 	html += '<div>' + value + '</div>';
		// });
		// $('#sidebar').html(html);
	};
	// scraper();


	$.getJSON('./data/data.json', function(data) {

		const canvas = document.getElementById('solarSystem');
		const context = canvas.getContext('2d');

		// Given the canvas size, a scale factor, and the position of the center (Sun)
		const scaleFactor = 12; // Adjust this to your desired scale
		const centerCanvasX = canvas.width / 2;
		const centerCanvasY = canvas.height / 2;
		context.translate(centerCanvasX, centerCanvasY);


		jQuery.each(data, function(i, val) {
			if (i=="earth"){
				//Earth
				var scale = 1;
				var color = '#417B38'
				var a = 1.000;
				var e = 0.0167;
			}else if (i=="jupiter"){
				//Jupiter
				var scale = 11;
				var color = '#C1844D'
				var a = 5.2030;
				var e = 0.0484;
			}else if (i=="mars"){
				//Mars
				var scale = 0.5;
				var color = '#F97A05'
				var a = 1.5236;
				var e = 0.0934;
			}else if (i=="mercury"){
				//Mercury
				var scale = 0.33;
				var color = 'red';
				var a = 0.38710;
				var e = 0.2056;
			}else if (i=="neptune"){
				//Neptune
				var scale = 3.7;
				var color = '#537CFE'
				var a =  30.287;
				var e = 0.0086;
			}else if (i=="saturn"){
				//Saturn
				var scale = 9;
				var color = '#7B7869'
				var a = 9.5710;
				var e = 0.0556;
			}else if (i=="uranus"){
				//Uranus
				var scale = 4;
				var color = '#D3F9FA'
				var a = 19.2970;
				var e = 0.0472;
			}else{
				//Venus
				var scale = 0.95;
				var color = '#FDBF01'
				var a = 0.72334;
				var e = 0.0068;
			}
		
			// // Calculate q and Q
			// var q = a*(1-e); // perihelion distance
			// var Q = a*(1+e); // aphelion distance

			// var center = (Q+q)/2; // center of the ellipse

			// // Calculate b
			// var b = Math.sqrt(2*a);


			var t = Number(val['JD']);
			var ec = Number(val['e']);
			var QR = Number(val['QR']);
			var IN = Number(val['IN'])*Math.PI/180;
			var OM = Number(val['OM'])*Math.PI/180;
			var W = Number(val['W'])*Math.PI/180;
			var Tp = Number(val['Tp']);
			var N = Number(val['N'])*Math.PI/180;
			var MA = Number(val['MA'])*Math.PI/180;
			var TA = Number(val['TA'])*Math.PI/180;
			var A = Number(val['A']);
			var AD = Number(val['AD']);
			var PR = Number(val['PR']);

			var M = (N * (t - Tp)) % (2*Math.PI);

			var E0 = M + ec * Math.sin(M) * (1 + ec * Math.cos(M));
			var E = M;
			while (Math.abs(E - E0) > 0.0005) {
				E = E0 - ( E0 - ec * Math.sin(E0) - M ) / ( 1 - ec * Math.cos(E0) )
				E0 = E;
			}

			var v = 2*Math.atan2(Math.sqrt(1+ec)*Math.sin(E/2),Math.sqrt(1-ec)*Math.cos(E/2));
			var r = A*(1-ec*Math.cos(E));

			var x = r * (Math.cos(v+W)*Math.cos(OM) - Math.sin(v+W)*Math.cos(IN)*Math.sin(OM));
			var y = r * (Math.cos(v+W)*Math.sin(OM) + Math.sin(v+W)*Math.cos(IN)*Math.cos(OM));

			// // Extract coordinates
			var X = x*scaleFactor //+ centerCanvasX;
			var Y = y*-1*scaleFactor //+ centerCanvasY;

			// Draw each planet
			context.beginPath();
			context.arc(X, Y, scale*2, 0, 2 * Math.PI);
			context.fillStyle = color;
			context.fill();
			context.closePath();

			// var svgString = `<svg xmlns="http://www.w3.org/2000/svg" height="150" width="500">
			// <ellipse cx="240" cy="100" rx="220" ry="30" style="fill:red" />
			// <ellipse cx="220" cy="70" rx="190" ry="20" style="fill:lime" />
			// <ellipse cx="210" cy="45" rx="170" ry="15" style="fill:yellow" />
			// </svg>`;
			// var img = new Image();
			// img.width = 500;
			// img.height = 150;
			// img.addEventListener("load", e => {
			// ctx.drawImage(e.target, 0, 0);
			// });
			// img.src = `data:image/svg+xml,${svgString}`;

			// Draw orbit
			context.save();

			// Rotate the ellipse
			// const ellipseAngleInRadians = (OM + W)
			// context.rotate(ellipseAngleInRadians);

			// Scale the ellipse to fit the canvas
			const majorAxisInPixels = 2 * A * scaleFactor;
			const minorAxisInPixels = A * Math.sqrt(1 - ec^2)* scaleFactor;
			const scaleX = majorAxisInPixels / 2; // Half the major axis length
			const scaleY = minorAxisInPixels / 2; // Half the minor axis length

			context.beginPath();
			context.moveTo(scaleX, 0);

			// Approximate the ellipse using four Bézier curves
			context.bezierCurveTo(scaleX, -scaleY * 0.55, -scaleX, -scaleY * 0.55, -scaleX, 0);
			context.bezierCurveTo(-scaleX, scaleY * 0.55, scaleX, scaleY * 0.55, scaleX, 0);

			context.closePath();
			context.restore();

			context.strokeStyle = color;
			context.stroke();
			// context.beginPath();
			// if (i == "venus" || i == "uranus"){
			// 	context.ellipse(centerCanvasX, centerCanvasY, a*scaleFactor, b*scaleFactor, 0, ec, 2 * Math.PI, false);
			// }else{
			// 	context.ellipse(centerCanvasX, centerCanvasY, a*scaleFactor, b*scaleFactor, 0, ec, 2 * Math.PI, true);
			// }
			// context.strokeStyle = color;
			// context.stroke();
			// context.closePath();
		  });

		  // Draw Sun
		  context.beginPath();
		  context.arc(0, 0, 5, 0, 2 * Math.PI);
		  context.fillStyle = 'yellow';
		  context.fill();
		  context.closePath();

	});


	// Burger Menu
	var burgerMenu = function () {

		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {

			event.preventDefault();

			if ($('#ftco-nav').is(':visible')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}



		});

	};
	burgerMenu();


	var onePageClick = function () {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
			event.preventDefault();

			var href = $.attr(this, 'href');

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 500, function () {
				// window.location.hash = href;
			});
		});

	};

	onePageClick();


	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// window.addEventListener('load', () => {
	// 	let model = new SolarSystemModel();
	// }, false);

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();



	var counter = function () {

		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					// console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 2000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();


	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});





})(jQuery);