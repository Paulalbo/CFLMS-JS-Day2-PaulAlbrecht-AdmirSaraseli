for (i = 1; i <= 100; i++) {
	if (i % 3 && i % 5) {
		document.write(i)
	}
	else {
		if (i % 3 == 0) {
			document.write("Fizz")
		}
		if (i % 5 == 0) {
			document.write("Buzz")
		}
		if (i % 15 == 0) {
			document.write("FizzBuzz")
		}
	}
	document.write("<br>")
}


