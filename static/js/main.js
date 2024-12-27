"user strict";

/* ======== js Documentation =======

	# Template Name: Disum
	# Version: 1.0
	# Date: 20/05/2024
	# Author: Disum
	# Author URI: 
	# Description: Disum - HTML Templates

    ==================================================

     01. Added Smooth Scroll 
     -------------------------------------------------
     02. Preloader
     -------------------------------------------------
     03. Scroll To Top With Progress
     -------------------------------------------------
     04. Nice Select
     -------------------------------------------------
     05. Custom Menu
     -------------------------------------------------
     06. Video Popup
     -------------------------------------------------
     07. Odemoter
     -------------------------------------------------
     08. Wow Animation
     -------------------------------------------------
     09. Swipper Slider
     -------------------------------------------------
     10. Custom Slider
     -------------------------------------------------
     11. footer copyright year
     -------------------------------------------------
     12. odometer counter
     -------------------------------------------------
     13. video popup
     -------------------------------------------------
     14. Date Time End
     -------------------------------------------------
     15. Title Animation
     -------------------------------------------------
     16. Aos animation
     -------------------------------------------------
     17. 
     -------------------------------------------------
     18. 
     -------------------------------------------------
     19. 
     -------------------------------------------------
     20. 
     -------------------------------------------------
     21. 
     -------------------------------------------------
     22. 
     -------------------------------------------------
     23. 
     -------------------------------------------------
     24.
     -------------------------------------------------
     25. Title Animation
     -------------------------------------------------
     26. Footer Styele Three

    ==================================================
============== */

//>> Javascrip Js <<//
$(document).ready(function () {
	//custom tab
	$(".tablinks .nav-links").each(function () {
		var targetTab = $(this).closest(".singletab");
		targetTab.find(".tablinks .nav-links").each(function () {
			var navBtn = targetTab.find(".tablinks .nav-links");
			navBtn.click(function () {
				navBtn.removeClass("active");
				$(this).addClass("active");
				var indexNum = $(this).closest("li").index();
				var tabcontent = targetTab.find(".tabcontents .tabitem");
				$(tabcontent).removeClass("active");
				$(tabcontent).eq(indexNum).addClass("active");
			});
		});
	});
	//custom tab

	// Odometer Init


	//side contact added
	$(".remove__click").on("click", function (e) {
		$(".subside__barmenu").toggleClass("active");
	});
	//side contact added

	//>> Swiper Slider <<//

	//>>>> Team slide
	var swiper = new Swiper(".testimonial-wrapperv1", {
		spaceBetween: 24,
		loop: true,
		direction: "horizontal",
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: ".mcustom__next2",
			prevEl: ".mcustom__prev2",
		},
		pagination: {
			el: ".swiper-pagination-cus",
			type: "fraction",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			575: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			991: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			1200: {
				slidesPerView: 1,
			},
			1400: {
				slidesPerView: 1,
			},
			1600: {
				slidesPerView: 3,
			},
		},
	});
	//>>>> Working slide
	var swiper = new Swiper(".working-wrap", {
		spaceBetween: 0,
		speed: 2000,
		loop: true,
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: ".mcustom__next1",
			prevEl: ".mcustom__prev1",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			575: {
				slidesPerView: 1,
			},
			991: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 1,
			},
			1400: {
				slidesPerView: 1,
			},
			1600: {
				slidesPerView: 1,
			},
		},
	});
	//>>>> Working Qualiys
	var swiper = new Swiper(".quality-working-wrap", {
		spaceBetween: 24,
		speed: 1000,
		loop: true,
		navigation: {
			nextEl: ".mcustom__next1",
			prevEl: ".mcustom__prev1",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 14,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 14,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 3,
			},
			1600: {
				slidesPerView: 3,
			},
		},
	});
	//>>>> sponsor slider
	var swiper = new Swiper(".sponsor__wrap", {
		spaceBetween: 24,
		speed: 3000,
		loop: true,
		autoplay: {
			delay: 2000,
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			575: {
				slidesPerView: 3,
				spaceBetween: 14,
			},
			991: {
				slidesPerView: 4,
				spaceBetween: 14,
			},
			1200: {
				slidesPerView: 5,
			},
			1400: {
				slidesPerView: 5,
			},
			1600: {
				slidesPerView: 5,
			},
		},
	});

	//>> Swiper Slider <<//

	//>> Nice Select <<//
	$("select").niceSelect();
	//>> Nice Select <<//

	//>> Menu Fixed Components <<//
	var fixed_top = $(".header-section, .mobile-menu");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 20) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	//>> Menu Fixed Components <<//

	//>> Main Menu <<//
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(600);
		} else {
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.addClass("open");
			element.find("ul").slideDown(600);
			element.siblings("li").find("ul").slideUp(600);
			element.siblings("li").find("ul").slideUp(600);
		}
	});
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
	//>> Main Menu <<//

	//>> Magnific Popup <<//
	$(".video-btn").magnificPopup({
		type: "iframe",
		callbacks: {},
	});
	$(".imgc").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});
	//>> Magnific Popup <<//

	//>> Odometer Counter <<//
	$(".odometer-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (
					var i = 0;
					i < document.querySelectorAll(".odometer").length;
					i++
				) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
	//>> Odometer Counter <<//

	//>> Wow Animation <<//
	new WOW().init();
	//>> Wow Animation <<//

	//>> Aos Animation <<//
	AOS.init({
		once: true,
		easing: "ease-in-out",
	});
	//>> Aos Animation <<//

	//>> Preloader <<//
	setTimeout(function () {
		$(".preloader__Dixon").fadeToggle();
	}, 1500);
	//>> Preloader <<//
});
//>> Javascrip Js <<//

//>> Search Popup <<//
$(function () {
	$('a[href="#search"]').on("click", function (event) {
		event.preventDefault();
		$("#search").addClass("open");
		$('#search > form > input[type="search"]').focus();
	});

	$("#search, #search button.close").on("click keyup", function (event) {
		if (
			event.target == this ||
			event.target.className == "close" ||
			event.keyCode == 27
		) {
			$(this).removeClass("open");
		}
	});

	$("form").submit(function (event) {
		event.preventDefault();
		return false;
	});
});

//>> Search Popup <<//
