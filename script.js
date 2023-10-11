document.addEventListener("DOMContentLoaded", function () {
	const goHomeButton = document.getElementById("goHomeButton");

	goHomeButton.addEventListener("click", function () {
		window.open("https://home.pl/", "_blank");
	});
});

function toggleMode() {
	const linkElement = document.getElementById("style-link");
	const themeToggle = document.getElementById("theme-toggle");

	// Check if the current stylesheet is light mode
	const isLightMode = linkElement.href.endsWith("styles-light.css");

	themeToggle.addEventListener("click", () => {
		if (isLightMode) {
			linkElement.href = "dark.css"; // Switch to dark mode
		} else {
			linkElement.href = "style.css"; // Switch to light mode
		}

		// Update the mode flag
		isLightMode = !isLightMode;
	});
}

// Call toggleMode on page load
window.addEventListener("DOMContentLoaded", toggleMode);
