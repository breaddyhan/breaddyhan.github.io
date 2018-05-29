$(document).ready(function(){
	
	
	$(".login").click(function(){
		$("#login").fadeOut(1000,function(){
			$(this).empty();
			$(this).load("loginform.html");
			$(this).fadeIn(1000);
		});
	});
	
	$("button.login").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
});