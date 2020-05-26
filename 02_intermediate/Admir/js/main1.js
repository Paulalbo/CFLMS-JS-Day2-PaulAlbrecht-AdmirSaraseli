let data = [["Martin", "Thomas", "Klaus", "Maria", "David"], [76, 85, 65, 93, 81]];
let grade = "";
let sum = 0;
for (let i = 0; i < 5; i++) {

	if (data[1][i] < 60) {
		grade = "F"
	} else if (data[1][i] < 70) {
		grade = "D"
	} else if (data[1][i] < 80) {
		grade = "C"
	} else if (data[1][i] < 90) {
		grade = "B"
	} else {
		grade = "A"
	}	

	document.write(data[0][i], " = ", data[1][i], " and the grade is ", grade, "<br><br>");

	sum = sum + data[1][i];
}

let avg = sum/5;

	if (avg < 60) {
		grade = "F"
	} else if (avg < 70) {
		grade = "D"
	} else if (avg < 80) {
		grade = "C"
	} else if (avg < 90) {
		grade = "B"
	} else {
		grade = "A"
	}	

document.write("Avarage of the class is: ", sum/5, " and the grade is ", grade);

