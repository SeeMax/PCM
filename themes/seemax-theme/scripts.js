(function ($, root, undefined) {$(function () {
'use strict';
$( ".featured-hero-section" ).next().addClass( "post-sub-hero-section" );

$(".menuToggle").on('click', function() {

	if ($(this).hasClass("navOpen")) {
		menuClose();
	} else {
		menuOpen();
	}
});


const menuClose = () => {
	let tl = new gsap.timeline();
	let toggle = $(".menuToggle");
	let fullMenu = $(".main-nav");
	let links = $("nav li");
	let	ham1 = $(".hamTop");
	let ham2 = $(".hamMid");
	let	ham3 = $(".hamBot");
	let uniTime = 0.3;
	let uniEase = Back.easeIn.config(1);
	let uniEase2 = Back.easeOut.config(1);

	$(toggle).removeClass("navOpen");
	tl.set($(".wrapper"), {height:"auto",overflow:"visible"});
	tl.to(links, {duration:uniTime, opacity:0, x:"50%", ease:uniEase2,stagger: {amount: uniTime,}},"menuClose");
	tl.to(fullMenu, {duration:uniTime, left:"101%"}, "menuClose+=0.2");
	tl.to([ham1, ham2, ham3], {duration:uniTime/2, x:0, width:"100%", rotation:0, y:0}, "menuClose");

	return tl;
}


const menuOpen = () => {
	let tl = new gsap.timeline();
	let toggle = $(".menuToggle");
	let fullMenu = $(".main-nav");
	let links = $("nav li");
	let ham1 = $(".hamTop");
	let ham2 = $(".hamMid");
	let ham3 = $(".hamBot");
	let uniTime = 0.15;
	let uniEase = Back.easeIn.config(1);
	let uniEase2 = Back.easeOut.config(1);

	$(toggle).addClass("navOpen");
	tl.set($(".wrapper"), {height:"100%", overflow:"hidden"});
	tl.set(links, {opacity:0, x:"50%"});
	tl.to(fullMenu, {duration:uniTime*2, left:"0%"}, "menuOpen");
	tl.to(links, {duration:uniTime, opacity:1, x:"0%", ease: uniEase2, stagger: {amount:uniTime/3}}, "menuOpen+=0.175");
	tl.to(ham1, {duration:uniTime, rotation:-315,x:7 ,y:3, width:10, transformOrigin:"50% 50%", ease: uniEase}, "menuOpen");
	tl.to(ham2, {duration:uniTime, x:-4, width:18}, "menuOpen");
	tl.to(ham3, {duration:uniTime, rotation:315, x:7, y:-3, width:10, transformOrigin:"50% 50%", ease: uniEase}, "menuOpen");

	return tl;
}

$(function preLoaderOn() {
	$(window).load(function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
});

});})(jQuery, this);
