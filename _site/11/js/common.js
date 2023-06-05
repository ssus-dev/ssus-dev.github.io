$(document).ready(function () {
	// header_animation
	// var worksUrl = window.location.href;
	// var worksStart = worksUrl.slice(-5);
	// var header = $('header'); //헤더를 변수에 넣기
	// var page = $('.works_content'); //색상이 변할 부분
	// var pageOffsetTop = page.offset().top; //색상 변할 부분의 top값 구하기
	// var scroll = getCurrentScroll();
	// console.log(worksUrl);
	// console.log(worksStart);

	// window.addEventListener("scroll", runOnScroll);

	// function runOnScroll(){
	// 	console.log("1");
	// 	if (scroll >= pageOffsetTop && worksStart == '#img3') {
	// 		console.log("!");
	// 		header.addClass("white");
	// 	} else {
	// 		console.log("!!!");
	// 		header.removeClass("white");
	// 	}
	// }

	// function getCurrentScroll() {
	// 	return window.pageYOffset || document.documentElement.scrollTop;
	// }


	//filter
	$(window).load(function () {
		var $container = $('.filter_contents');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});

		$('.filter_wrap li').click(function () {
			$('.filter_wrap .active').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			return false;
		});



	});

});
