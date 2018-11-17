//A Function to printout an instance of date, then figures out how many seconds have passed since the page has been loaded
var start = new Date();
function stopTime(){
	var end = new Date();
	var seconds = end.getTime()/1000-start.getTime()/1000;
	var timer = alert("you have been on the page for "+seconds+" seconds");
}
