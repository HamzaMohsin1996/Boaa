/* Document Ready Starts */
$(document).ready(function () {

	new WOW().init();

	$('a').smoothScroll({
		offset: -74
	});

	

	/*$('a.arrow-down').smoothScroll({
	    offset: -74
	});*/

	$(".menu-btn").click(function () {
		$(".main-menu > ul").slideToggle();
	});

	$(".btn-phone a").click(function () {
		$(this).parent().hide();
		$('.phone-no').fadeIn().css("display", "inline-block");
	});

	$('#nav-icon').click(function () {
		$(this).toggleClass('open');
		$('.main-menu').slideToggle();
	});

	$('.main-menu ul > li > a').click(function () {
		navClass = $('#nav-icon').hasClass('open');
		//alert(navClass);
		if (navClass) {
			$('#nav-icon').toggleClass('open');
			$('.main-menu').slideToggle();
		}

	});

	$('.scrollup').on("click", function () {
		$("html, body").animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	/*new Vivus('canvas', {
		start: 'autostart', 
		type: 'delayed', 
		duration: 300, 
		animTimingFunction: Vivus.EASE
	});*/

	/* Window Resize Starts */
	$(window).resize(function () {

	});

	var a = 0;
	$(window).scroll(function () {

		var oTop = $('.counter-sec').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
						countNum: countTo
					},

					{

						duration: 7000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);

							/*if($this.text().length == 5){
							  $this.text(this.countNum);
							} else if($this.text().length == 4){
							  $this.text(this.countNum);
							} else{
							  $this.text(this.countNum);
							}*/
						}

					});
			});
			a = 1;
		}

	});

	$(window).load(function () {
		$('.pj-gallery').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			fade: true,
			asNavFor: '.pj-gallery-nav'
		});

		$('.pj-gallery-nav').slick({
			dots: false,
			arrows: false,
			vertical: true,
			//centerMode: true,
			focusOnSelect: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.pj-gallery',
			verticalSwiping: true,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						arrows: true,
					}
    			},
    			{
					breakpoint: 575,
					settings: {
						slidesToShow: 1,
						arrows: true,
					}
    			}
  			]
		});

		$('.text-slider').slick({
			dots: false,
			arrows: false,
			vertical: true,
			focusOnSelect: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			verticalSwiping: true,
			autoplay: true,
		});

		$('.project-image-slider').flexslider({
			loop:true,
			animation: "slide",
			animationLoop: true,
			itemWidth: 256,
			slidesToShow: 3,
			slidesToScroll: 1,
			itemMargin: 26,
			infinite:true
		});
		
	});

});
	