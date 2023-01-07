/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



var i = 0;
var j = 0;
var hi = "Hi, I'm Lamb!";
var speed = 80;

function typeWriter() {
  if (i < hi.length) {
    document.getElementById("hello").innerHTML += hi.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

