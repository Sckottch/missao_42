const output = document.getElementById("calc_output");
const input1 = document.getElementById("calc_input_1");
const input2 = document.getElementById("calc_input_2");
const operator = document.getElementById("operator_dropdown");
const button = document.getElementById("calc_btn");

function onClick() {
	let num1 = input1.value.trim();
	let num2 = input2.value.trim();
	let result;

	if (num1 === "" || !/^-?\d+$/.test(num1)) {
		console.log("Error: Invalid input");
		return;
	}

	if (num2 === "" || !/^-?\d+$/.test(num2)) {
		console.log("Error: Invalid input");
		return;
	}

	num1 = Number(num1);
	num2 = Number(num2);

	if (num1 < 0 || num2 < 0) {
		console.log("Error: Numbers can't be negative");
		return;
	}

	switch(operator.value) {
		case "+":
			result = num1 + num2;

			console.log(result);
			output.innerText = result;
			break;

		case "-":
			result = num1 - num2;

			console.log(result);
			output.innerText = result;
			break;

		case "*":
			result = num1 * num2;

			console.log(result);
			output.innerText = result;
			break;

		case "/":
			if (num2 === 0) {
				console.log("It's over 9000!")
				return;
			}
			result = num1 / num2;

			console.log(result);
			output.innerText = result;
			break;

		case "%":
			if (num2 === 0) {
				console.log("It's over 9000!")
				return;
			}
			result = num1 % num2;

			console.log(result);
			output.innerText = result;
			break;
	}
}

button.addEventListener("click", onClick);
