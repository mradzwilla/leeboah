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
	$('.divider.parallax-window').parallax({imageSrc: '/images/banner-02.jpg'});

	$('.gallery-container .owl-carousel').owlCarousel({
		autoplay: true,
		autoplayHoverPause: true,
		loop:true,
		// nav: true,
		lazyLoad: true,
		center: true,
		items: 1.5,
		margin: 30,
	});
})