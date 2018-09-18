var eventJSON = {
	events: [
	{
		name: "Wrestling Isn't Real",
		location: 'Back Backers Training Center',
		date: '011-29-18',
		link: 'https://www.facebook.com/events/267460840757222/',
	},
	{
		name: 'Wrestlemania',
		location: 'Back Backers Training Center',
		date: '10-29-18',
		link: 'https://www.facebook.com/events/267460840757222/',
	},
	{
		name: 'When Worlds Collide',
		location: 'Back Backers Training Center 2',
		date: '09-29-18',
		link: 'https://www.facebook.com/events/267460840757222/',
	},
	{
		name: "Wrestling Isn't Real",
		location: 'Back Backers Training Center',
		date: '011-29-18',
		link: 'https://www.facebook.com/events/267460840757222/',
	},
	{
		name: 'Wrestlemania',
		location: 'Back Backers Training Center',
		date: '10-29-18',
		link: 'https://www.facebook.com/events/267460840757222/',
	},
	{
		name: 'When Worlds Collide',
		location: 'Back Backers Training Center 2',
		date: '09-29-18',
		link: 'https://www.facebook.com/events/267460840757222/',
	},
	]
}

$(document).ready(function(){
	$('html, body').addClass('locked')
	$('.down-arrow').click(function(){
		var next = $(this).closest('.container').next().offset().top;
		console.log($(this).closest('.container'))
		$('html').animate({ scrollTop: next + 'px' }, 300);
	})
	$.each(eventJSON.events, function(i, e){
		var item = "<li><a href='"+e.link+"' target='_blank'><h1>"+e.name+"</h1><h2>"+e.location+"</h2><h3>"+e.date+"</h3></a></li>"
		$('ul#events-list').append(item)
	})
	$('.events-container.parallax-window').parallax({imageSrc: '/images/jungle-sun-background-blur-2.jpg'});
	$('.divider.parallax-window').parallax({
		imageSrc: '/images/banner-02.jpg',
	});

	var owl = $('.gallery-container .owl-carousel').owlCarousel({
		responsive: {
			0: {
				items: 1,
				stagePadding: 30
			},
			801: {
				items: 1.5,
				stagePadding: 0,
				margin: 30
			}
		},
		autoplay: true,
		autoplayHoverPause: true,
		loop:true,
		touchDrag: true,
		lazyLoad: true,
		center: true,
		margin: 30,
		onInitialized: bindHandlers,
	});

	function bindHandlers(){
		$('.owl-item').click(function(){
			var activeEl = $('.gallery-container .owl-carousel .owl-item.active');
			var active = $('.gallery-container .owl-carousel .owl-item').index($(activeEl));
			var i = $('.gallery-container .owl-carousel .owl-item').index($(this));
			if (i == active + 1){
				owl.trigger('next.owl.carousel');
			} else if (i == active - 1){
				owl.trigger('prev.owl.carousel');
			}
		})
	}

	$(window).scroll(displayHeader);

	function displayHeader(){
		if ($(window).scrollTop() > $(window).height()){
			$('.header').addClass('active');
		} else {
			$('.header').removeClass('active');
		}
	}
})

$(window).load(function(){
	$('html, body').removeClass('locked');
	setTimeout(function(){
		$('.loader-overlay').fadeOut(500);
	}, 500)
})