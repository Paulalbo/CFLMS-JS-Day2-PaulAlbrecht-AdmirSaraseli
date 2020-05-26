let min = -5; 
let max = 30;  
let temp = Math.floor(Math.random() * max) + min; 
if (temp > -5 && temp < 10) {
	document.write("The weather is cold ", temp);
} else {
	document.write("The weather is cool ", temp);
}


