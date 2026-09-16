const circle = document.getElementById("circle");

let size = 200;
let index = 0;

const maxSize = 420;
const minSize = 200;
const colors = ["red", "green", "blue"]

function onClick() {
	const step = 10;

	size += step;
	console.log("O Balao aumentou, tamanho atual: " + size)

	index++;
	if (index >= colors.length) {
		index = 0;
	}

	if (size > maxSize) {
		size = minSize;
		console.log("Balao estourou");
	}

	circle.style.width = size + "px";
	circle.style.height = size + "px";
	circle.style.backgroundColor = colors[index];
}

function onMouseLeave() {
	if (size === minSize) return;

	const step = 5;

	size = Math.max(minSize, size - step);
	console.log("O Balao diminuiu, tamanho atual: " + size);

	index--;
	if (index < 0) {
		index = colors.length - 1;
	}

	circle.style.width = size + "px";
	circle.style.height = size + "px";
	circle.style.backgroundColor = colors[index];
}

circle.addEventListener("click", onClick);
circle.addEventListener("mouseleave", onMouseLeave);
