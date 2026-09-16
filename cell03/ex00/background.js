function changeBackgroundColor() {
	const body = document.getElementById("body");

	const r = Math.random() * 255;
	const g = Math.random() * 255;
	const b = Math.random() * 255;

	body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}
