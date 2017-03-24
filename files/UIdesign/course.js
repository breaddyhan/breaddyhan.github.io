$(document).ready(function() {
	$("#course-menu").menu().hide();
	$("#announcewrapper img").show();

	//$("#course-menu").hide().css({"width":"100px","margin-left":"232px"});
	
	$( "#cal-dialog" ).dialog({
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
	
	$("#courseimage").mouseenter(function(){
		$("#course-menu").slideDown("slow");
	});
	
	$("#course-menu").mouseleave(function(){
		$("#course-menu").slideUp("slow");
	});
	
	$("#announcements p").hide();
	
	$("#announcewrapper div > img").click(function(){
		//$(this).css("border-bottom","0px").next().show("fast").css("border-top","0px");
		//$("#announcewrapper div > img").hide();
		$(this).hide().parent().css("border-bottom","0px").next().show("fast").css("border-top","0px");
	});
	
	$("#announcewrapper div > img").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#announcements p").click(function(){
		//$("#announcewrapper p > img").show();
		$(this).hide("fast");
		
		$(this).prev().css("border","1px solid grey").children("img").show();
	});
	
	$("#announcewrapper p > img").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#cal-wrapper h3").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#cal-wrapper button").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#cal-wrapper button").click(function(){
		$( "#cal-dialog" ).dialog( "open" );
	});
	
	$("#cal-wrapper h3").click(function(){
		window.location="calendar.html";
	});
	
	$("#backarrow").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#backarrow").click(function(){
		window.location="current.html";
	});
	
	$("#pastarrow").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#pastarrow").click(function(){
		window.location="past.html";
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
	
	$("#cont-assign h3").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#cont-assign h3").click(function(){
		var x = document.getElementsByTagName("title");
		var y = x[0].innerHTML;
		
		switch(y){
			case "SE 4EO3":
				window.location="se4eo3-ass.html";
				break;
			case "SE 4HC3":
				window.location="se4hc3-ass.html";
				break;
			case "SE 4BO3":
				window.location="se4bo3-ass.html";
				break;
			case "SE 4CO3":
				window.location="se4co3-ass.html";
				break;
			case "PAST COURSE":
				window.location="pastcourse-ass.html";
				break;
		}
	});
});