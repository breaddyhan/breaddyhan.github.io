$(document).ready(function() {
    // page is now ready, initialize the calendar...
	theme: true
	

    var cal = $('#calendar').fullCalendar({
		navLinks: 'true',
		
        // put your options and callbacks here
		header:{
			left: 'today',
			center: 'title',
			right: 'month,agendaDay,prev,next'
		},
		events:[
			{
				title: 'Milestone #4 Due',
				start: '2016-12-09T14:00:00',
				end: '2016-12-15T14:00:00'
			},	
			{
				title: '4HC3 Exam',
				start: '2016-12-21T09:00:00'
			},
			{
				title: 'Milestone #3 Due',
				start: '2016-11-23T17:30:00'
			},
			{
				title: 'Milestone #2 Due',
				start: '2016-10-19T17:30:00'
			},
			{
				title: 'Milestone #1 Due',
				start: '2016-09-26T17:30:00'
			},
			{
				title: 'Assignment #1 Due',
				start: '2016-10-06T17:30:00'
			},
			{
				title: 'Assignment #2 Due',
				start: '2016-11-10T17:30:00'
			}
		]
    })

	$("#backarrow").mouseenter(function(){
		$(this).css('cursor','pointer');
	});
	
	$("#backarrow").click(function(){
		window.location="main.html";
	});
});