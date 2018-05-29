$(document).ready(function() {
	$("#course-menu").menu().hide();
	$("#announcewrapper img").show();
	$("#gradeswrapper table").hide();
	
	$( "#dialog" ).dialog({
		autoOpen: false,
		height: "auto",
		width: 400,
		buttons: {
			"Okay": function(){
				$( this ).dialog( "close" );
			}
		},
		classes: {
			"ui-dialog-title":"feedback-title",
			"ui-dialog-titlebar":"feedback-titlebar"
		}
	});
	
	$( "#gradeswrapper button" ).on( "click", function() {
		$( "#dialog" ).dialog( "open" );
    });
	
	$("#gradeswrapper > h3").click(function(){
		$("#gradeswrapper table").toggle("fast");
		$("#gradeswrapper > h3").toggleClass("shadow");
	});
	
	$("#courseimage").mouseenter(function(){
		$("#course-menu").slideDown("slow");
	});
	
	$("#course-menu").mouseleave(function(){
		$("#course-menu").slideUp("slow");
	});
	
	$("#backarrow").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("button").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#ass-content-wrapper button").click(function(){
		window.open('documents/design-norman-handouts.pdf');
	});
	
	$("#assignswrapper button").click(function(){
		window.open('documents/4HC3-Assignment 2-2016.pdf');
	});
	
	$("#backarrow").click(function(){
		var x = document.getElementsByTagName("title");
		var y = x[0].innerHTML;
		
		switch(y){
			case "SE 4EO3":
				window.location="se4eo3.html";
				break;
			case "SE 4HC3":
				window.location="se4hc3.html";
				break;
			case "SE 4BO3":
				window.location="se4bo3.html";
				break;
			case "SE 4CO3":
				window.location="se4co3.html";
				break;
			case "PAST COURSE":
				window.location="pastcourse.html";
				break;
		}
	});
	
	$("#4eo3").click(function(){
		window.location="se4eo3.html";
	});
	
	$("#4hc3").click(function(){
		window.location="se4hc3.html";
	});
	
	$("#4bo3").click(function(){
		window.location="se4bo3.html";
	});
	
	$("#4co3").click(function(){
		window.location="se4co3.html";
	});
	
	$("#gradeswrapper > h3").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
});