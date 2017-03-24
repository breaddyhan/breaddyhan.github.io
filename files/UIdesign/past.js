$(document).ready(function(){
	$("#pastcourses").hide();
	
	$("#currentarrow").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#currentarrow").click(function(){
		window.location="main.html";
	});
	
	$("#expand").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#expand").click(function(){
		$(this).hide("fast", function(){
			$("#pastcourses").show("fast");
		});
	});
	
	$("#past button").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#past button").click(function(){
		window.location="pastcourse.html";
	});
});