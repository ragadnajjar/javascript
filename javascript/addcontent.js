var today = new Date ();
alert ("heelo")
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternon!';
} else if (hourNow> 0) {
greeting = 'Good morning!';
} else {
    greeting = 'Welkome!';
    } 
    document.write('<h3>' + greeting +'</h3>'); 
