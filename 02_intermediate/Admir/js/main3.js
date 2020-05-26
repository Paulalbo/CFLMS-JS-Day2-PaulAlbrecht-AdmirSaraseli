let min = -5; 
let max = 40;  
let temp = Math.floor(Math.random() * max) + min; 
if (temp > -5 && temp < 10) {
	document.write("The weather is cold ", temp);
	document.getElementById("weather").src = "img/cold-weather.jpg";
} else if (temp > 10 && temp < 25) {
	document.write("The weather is cool ", temp);
	document.getElementById("weather").src = "img/cool-weather.jpg";
} else {
	document.write("The weather is hot ", temp);
	document.getElementById("weather").src = "img/hot-weather.jpg";
}




