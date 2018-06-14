$(document).ready(function() {
	$("#currentarrow").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#currentarrow").click(function(){
		window.location="main.html";
	});
});