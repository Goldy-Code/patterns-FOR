const output = document.getElementById("output");

// for (let i = 0; i < 5; i++) {
// 	for (let j = 0; j < i; j++) {
// 		console.log(j);
// 	}
// 	console.log("end");
// }


//* квадрат

let rows = prompt('задайте число', '1');
let space = '*';
for (let i = 0; i < rows; i++) {
	for (let j = 0; j < rows; j++) {
		output.innerHTML += space;
	}
	output.innerHTML += '<br>';
}

// ****
// ****
// ****



//* треугольник вниз
//~ первый способ

// let rows = prompt('задайте число', '1');
// let space = '';
// for (let i = 0; i < rows; i++) {
// 	space += '*'
// 	output.innerHTML += space + "<br>";
// }

//~ второй способ

// let rows = prompt('задайте число', '1');
// let space = '*';
// for (let i = 0; i <= rows; i++) {
// 	for (let j = 0; j < i; j++) {
// 		output.innerHTML += space;
// 	}
// 	output.innerHTML += "<br>";
// }

// *
// **
// ***
// ****
// *****


//* треугольник вверх

// let rows = prompt('задайте число', '1');
// let space = '*';
// for (let i = 0; i <= rows; i++) {
// 	for (let j = 0; j < rows - i; j++) {
// 		output.innerHTML += space;
// 	}
// 	output.innerHTML += "<br>";
// }

// *****
// ****
// ***
// **
// *



