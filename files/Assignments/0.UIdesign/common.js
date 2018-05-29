$(document).ready(function(){
	$("#menu").menu({
		classes: {"ui-menu":"menu-log"}
	});
	
	$("#menu").hide();
	
	$("#arrow").mouseenter(function(){
		$("#menu").slideDown("fast");
	});
	
	$("#menu").mouseleave(function(){
		$("#menu").slideUp("fast");
	});
	
	$("#footer button").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#footer button").click(function(){
		window.open("http://www.mcmaster.ca");
	});
	
	$("#profile").click(function(){
		window.location="profile.html";
	});
	
	$("#settings").click(function(){
		window.location="settings.html";
	});
	
	$("#logout").click(function(){
		window.location="welcome.html";
	});
});