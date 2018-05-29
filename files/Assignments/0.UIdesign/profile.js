$(document).ready(function() {
	$("#profilearrow").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#profilearrow").click(function(){
		window.location="main.html";
	});
	
	$("#c-middle button").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$( "#c-middle button" ).on( "click", function() {
		$( "#discard-dialog" ).dialog( "open" );
    });
	
	$("#savebut").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#dischange").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#dischange").click(function(){
		$( "#settings-dis-dialog" ).dialog( "open" );
	});
	
	$( "#saveset" ).on( "click", function() {
		$( "#save-set-dialog" ).dialog( "open" );
    });
	
	$( "#savebut" ).on( "click", function() {
		$( "#save-dialog" ).dialog( "open" );
    });
	
	$( "#passbut" ).on( "click", function() {
		$( "#password-dialog" ).dialog( "open" );
    });
	
	$( "#discard-dialog" ).dialog({
		autoOpen: false,
		height: "auto",
		width: 400,
		classes: {
			"ui-dialog-title":"discard-title",
			"ui-dialog-titlebar":"discard-titlebar"
		},
		buttons: {
			"Okay": function(){
				window.location="profile.html";
			},
			"Cancel": function(){
				$( this ).dialog( "close" );
			}
		}
	});
	$( "#save-dialog" ).dialog({
		autoOpen: false,
		height: "auto",
		width: 400,
		
		classes: {
			"ui-dialog-title":"save-title",
			"ui-dialog-titlebar":"save-titlebar"
		},
		buttons: {
			"Okay": function(){
				window.location="main.html";
			},
			"Cancel": function(){
				$( this ).dialog( "close" );
			}
		}
	});
	var dialog = $( "#password-dialog" ).dialog({
		autoOpen: false,
		height: "auto",
		width: 400,
		classes: {
			"ui-dialog-title":"password-title",
			"ui-dialog-titlebar":"password-titlebar"
		}
	});
	
	$( "#save-set-dialog" ).dialog({
		autoOpen: false,
		height: "auto",
		width: 400,
		classes: {
			"ui-dialog-title":"saveset-title",
			"ui-dialog-titlebar":"saveset-titlebar"
		},
		buttons: {
			"Okay": function(){
				window.location="main.html";
			},
			"Cancel": function(){
				$( this ).dialog( "close" );
			}
		}
	});
	
	
	$( "#settings-dis-dialog" ).dialog({
		autoOpen: false,
		height: "auto",
		width: 400,
		classes: {
			"ui-dialog-title":"discard-set-title",
			"ui-dialog-titlebar":"discard-set-titlebar"
		},
		buttons: {
			"Okay": function(){
				$("body").css('font-size', 'medium');
				$("#font-size").selectmenu('destroy');
				$("#font-size").prop('selectedIndex',1);
				$("#font-size").selectmenu();
				$( this ).dialog( "close" );
			},
			"Cancel": function(){
				$( this ).dialog( "close" );
			}
		}
	});
	
	form = dialog.find( "form" ).on( "submit", function( event ) {
		event.preventDefault();
		validateForm();
    });
	
	var body = $("body");
	
	$( "#font-size" ).selectmenu({
		width: 150,
		change: function( event, data ){
			body.css("font-size", data.item.value);
		}
	});
	
	function validateForm(){
		var x = $("#pswrd").val();
		var y = $("#cfrm").val();
		//$("#passError").text("Passwords must match");
		if(x == y){
			$("#passError").text("");
			dialog.dialog( "close" );
		}else{
			$("#passError").text("Passwords must match");
			return false;
		}
		
	}
});