const hangmanText = document.querySelector(".hangman-text");

export function hangmanTextTransform(clear, winStatus = undefined) {
	hangmanText.classList.remove("fade-in");
	hangmanText.classList.add("fade-out");

	setTimeout(() => {
		hangmanText.innerText = clear ? "hang man" : winStatus ? "Saved!" : "HANGED!";

		if (clear) hangmanText.classList.remove("hanged", "saved");
		else hangmanText.classList.add(winStatus ? "saved" : "hanged");

		hangmanText.classList.remove("fade-out");
		hangmanText.classList.add("fade-in");
	}, 500);
}