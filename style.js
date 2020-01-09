/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Uhrzeit

//Definiert die Startzeit,welche beim Aufrufen der Seite geladen wird.

function startTime() {
// Uhrzeit
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('time').innerHTML =
	"Current Time: "+ h + ":" + m + ":" + s;


//Datum
	var todayDate = new Date();
	var day = todayDate.getDate();
	var month = todayDate.getMonth();
	month = month+1;
	var year = todayDate.getFullYear();
	day = addZero(day)
	month = addZero(month)
  document.getElementById('date').innerHTML =
	"Current Date: "+ day + "." + month + ":" + year;
		
		
	
	setTimeout(startTime, 500);
 }

//Ergänzt eine 0 bei Zahlen unter 10
function checkTime(i) {
  if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
  return i;
}
function addZero(i){
	if(i < 10){i = "0" + i}
	return i;
}