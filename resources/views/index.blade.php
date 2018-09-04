@extends('layout')

@section('content')
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
			<div class="parallax-window" data-parallax="scroll" data-image-src="/images/banner-01.jpg"></div>

		</div>
	</div>
	@include('nav-arrow')
</div>

@endsection