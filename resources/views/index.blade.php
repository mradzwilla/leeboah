@extends('layout')

@section('content')
<div class="header">
	<ul>
		<li><a href="https://www.facebook.com/Boahbook/?ref=br_rs" target="_blank">@include('svgs/facebook')</a></li>
		<li><a href="https://www.instagram.com/lee_thebiggsteve_boah_/" target="_blank">@include('svgs/instagram')</a></li>
		<li><a href="mailto:leeboahofficial@gmail.com">@include('svgs/message')</a></li>
	</ul>
</div>
<div class="intro-container container">
	<div class="text-wrapper">
		<h1>Lee Boah</h1>
		<h2>Enter the Jungle</h2>
	</div>
	<div class="colored"></div>
	<div class="gray"></div>
	@include('nav-arrow')
</div>
<div class="bio-container container">
	<h1>Biography</h1>
	<div class="content-wrapper">
		<div class="hero-image">
			<img src="./images/headshot.jpg">
		</div>
		<div class="content">
			<div class="bio-item">
				<div class="title">Name</div>
				<div class="description">Lee Boah</div>
			</div>
			<div class="bio-item">
				<div class="title">From</div>
				<div class="description">The Mean Halls of Mr. Malloy</div>
			</div>
			<div class="bio-item">
				<div class="title">Finishing Move</div>
				<div class="description">Being dumb</div>
			</div>
			<div class="bio-item">
				<div class="title">Bio</div>
				<div class="description">Used to have a really cool pop vinyl collection until he sold out. He also owes his brother $30 from Diehl's</div>
			</div>
		</div>
	</div>
	@include('nav-arrow')
</div>

<div class="events-container container parallax-window">
	<h1>Upcoming Events</h1>
	<div class="content-wrapper">
		<ul id="events-list"></ul>
	</div>
	@include('nav-arrow')
</div>
<div class="gallery-container container">
	<h1>Gallery</h1>
	<div class="content-wrapper">
		<ul class="owl-carousel owl-theme">
			<li><img src="images/carousel-images/gallery-image-01b.jpg"></li>
			<!-- <li><img src="images/carousel-images/gallery-image-02.jpg"></li> -->
			<!-- <li><img src="images/carousel-images/gallery-image-03.jpg"></li> -->
			<li><img src="images/carousel-images/gallery-image-04.jpg"></li>
			<!-- <li><img src="images/carousel-images/gallery-image-05.jpg"></li> -->
			<li><img src="images/carousel-images/gallery-image-06.jpg"></li>
			<li><img src="images/carousel-images/gallery-image-07.jpg"></li>
			<!-- <li><img src="images/carousel-images/gallery-image-08.jpg"></li> -->
			<li><img src="images/carousel-images/gallery-image-09.jpg"></li>
			<li><img src="images/carousel-images/gallery-image-10.jpg"></li>
			<li><img src="images/carousel-images/gallery-image-11.jpg"></li>
			<li><img src="images/carousel-images/gallery-image-12.jpg"></li>
			<li><img src="images/carousel-images/gallery-image-13.jpg"></li>
			<li><img src="images/carousel-images/gallery-image-14.jpg"></li>
		</ul>
	</div>
	@include('nav-arrow')
</div>
<div class="divider parallax-window"></div>
<div class="social-container container">
	<h1>Connect</h1>
	<div class="content-wrapper">
		<ul>
			<li><a href="https://www.facebook.com/Boahbook/?ref=br_rs" target="_blank">@include('svgs/facebook')</a></li>
			<li><a href="https://www.instagram.com/lee_thebiggsteve_boah_/" target="_blank">@include('svgs/instagram')</a></li>
			<li><a href="mailto:leeboahofficial@gmail.com">@include('svgs/message')</a></li>
		</ul>
	</div>
</div>
<footer>
	<div class="footer-copy">Website created by <a href="http://www.mikeradzwilla.com/" target="_blank">Mike Radzwilla</a></div>
</footer>
@endsection