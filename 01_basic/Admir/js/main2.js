let data = [1, 7, -3, 9];
let max = data[0];
for (let i = 1; i < data.length; i++) {
	if (data[i] > max) {
		max = data[i];
	}
}
document.write("Highest value in array is: ", max);



