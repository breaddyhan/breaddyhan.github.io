$(document).ready(function(){
	
	$("#accordion").accordion({
      collapsible: true,
	  heightStyle: "content"
    });
	
	$("#profile").click(function(){
		window.location.href = 'profile.html';
	});
	
	$("#settings").click(function(){
		window.location.href = 'settings.html';
	});
	
	$("#logout").click(function(){
		window.location.href = 'welcome.html';
	});
	
	$("#currentarrow").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#currentarrow").click(function(){
		window.location="main.html";
	});
	
	$("#content button").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
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
	
	$( "#content button" ).on( "click", function() {
		$( "#dialog" ).dialog( "open" );
    });
	
	$("#unread").click(function(){
		$(this).parent().prev().css("color","black").text("read");
	});
});