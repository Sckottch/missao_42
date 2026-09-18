$(function() {
	$(".button-change").on("click", function() {
		const r = Math.random() * 255;
		const g = Math.random() * 255;
		const b = Math.random() * 255;

		$("#body").css("background-color", `rgb(${r}, ${g}, ${b})`);
	});
});
