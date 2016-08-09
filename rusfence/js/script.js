$(document).ready(function() {

	$("#owl").owlCarousel({
		items: 3,
		loop: true,
		center: true,
		margin: 1,
		autoplay: true,
		autoplayTimeout: 1000,
		autoplayHoverPause: true,
		autoplaySpeed: 2500,


		responsive: true,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 3
			},
			979: {
				items: 3
			}
		}
	});

	$("#parallax").parallax("50%", -0.4);

	$(".read_more").click(function() {
		$(".wrap_prod").toggleClass("wrap_prod_all");
		$(this).find("i").toggleClass("fa-angle-up");
		$(this).find("i").toggleClass("fa-angle-down");
	});




	var wWf = $(window).width();
	var wW = $(window).width() / 2;
	$(".price .black_bg div").css('border-right', wW + "px solid #25292c");
	$(".price .black_bg div").css('border-left', wW + "px solid transparent");
	$("img.photo_content").css('max-width', wWf * 0.8 + 'px');
	$("#video_block").css('max-width', wWf * 0.8 + 'px');


	var fW = {
		maxWidth: $("#video_block").width() + 2
	}
	$(".fancy").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		},
		nextEffect: 'none',
		prevEffect: 'none',
		afterLoad: function() {
			if ($(this.element).hasClass("link_play")) {
				$.extend(this, fW);
				$(".fancybox-skin").addClass("video-skin");

			}
		}
	});

	/*****************Menu of mobile version***************/

	$(".menu_but_wrap").click(function() { //click on menu button

		$(this).toggleClass('active'); //change button color when it is active
		$(".mobile_block .list_menu").slideToggle(200); // show and hide menu

	});

	//Hide mobile menu by click on page
	$(document).mouseup(function(e) {
		var divH = $(".mobile_block");
		if (!divH.is(e.target) && divH.has(e.target).length === 0) {
			divH.find(".list_menu").slideUp(200);
			divH.find(".menu_but_wrap").removeClass('active');
		}

	});





	$().UItoTop({
		easingType: 'easeOutQuart',
		scrollSpeed: 1000

	});




	$("body").on('click', '.header ul a', function() {

		$('html, body').animate({
			scrollTop: $('div[id="' + this.hash.slice(1) + '"]').offset().top
		}, 1000);

		return false;

	});

	$(".header ul a").click(function() {
		$(".header ul a").parent().removeClass("active");
		$(this).parent().addClass("active");
	});


	var lastId,
		topMenu = $(".header ul"),
		topMenuHeight = 101,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function() {
			var item = $($(this).attr("href"));
			if (item.length) {
				return item;
			}
		});


	// Bind to scroll
	$(window).scroll(function() {
		// Get container scroll position
		var fromTop = $(this).scrollTop() + topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function() {
			if ($(this).offset().top < fromTop)
				return this;
		});
		// Get the id of the current element
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
				.parent().removeClass("active")
				.end().filter("[href=#" + id + "]").parent().addClass("active");
		}
	});






});