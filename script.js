document.addEventListener("DOMContentLoaded", function () {
	const goHomeButton = document.getElementById("goHomeButton");

	goHomeButton.addEventListener("click", function () {
		window.open("https://home.pl/", "_blank");
	});
});
