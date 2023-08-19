const input = document.getElementById('operation');
const result = document.getElementById('result');

const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operator = ['addition', 'subtraction', 'multiplication', 'division'];
const btns = document.querySelectorAll('button');

let string = '';

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const btnId = btn.id;
		const btnVal = btn.innerHTML
		if (number.includes(btnId)) {
			string += btnId
			input.value = string;
		}
		if (operator.includes(btn.id)) {
			if (!(string.charAt(string.length - 1) === "/") && !(string.charAt(string.length - 1) === "+") && !(string.charAt(string.length - 1) === "-") && !(string.charAt(string.length - 1) === "*")) {
				string += btnVal
				input.value = string;
			}
		}
		if (btn.id === 'delete') {
			string = string.substring(0, string.length - 1);
			input.value = string;
		}
		if (btn.id === 'ac') {
			string = "";
			input.value = string;
			result.value = string;
		}
		if (btn.id === 'equals') {
			result.value = Math.round(eval(input.value) * 100000) / 100000;
		}
	});
});