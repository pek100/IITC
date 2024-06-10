import { words } from "./data/words.js";
import { sounds } from "./data/sounds.js";
import { scenes } from "./data/scenes.js";
import { hangmanTextTransform } from "./ui/hangmanText.js";
import { audioReset, audioPlay, clearSounds } from "./audio/audio.js";
import { createTomatoAnim } from "./animations/tomato.js";
import { createCloudAnim } from "./animations/cloud.js";
import { createRainAnim, clearRainAnim } from "./animations/rain.js";

const mainContainer = document.querySelector("#container");
const bubble = document.querySelector(".bubble-bottom");
const wordBubble = document.querySelector(".bubble-bottom>p");
const keyboard = document.querySelector(".keyboard");
const keyboardButtons = document.querySelectorAll(".key-letter");
const livesCount = document.querySelector(".lives-count");
const stageImg = document.querySelector(".stage>object");
const spotlight = document.querySelector(".spotlight");
const startGameBtn = document.querySelector(".start-game");
const playerInteraction = document.querySelector(".player-interaction");

const maxLives = 6;

let guessedLetters = [];

let word = "";

let gameStatus = false;

let interval = undefined;

for (let i = 0; i < maxLives; i++) {
	const heart = document.createElement("div");
	heart.classList.add("heart");

	heart.innerHTML = `<svg viewBox="0 0 256 256"><rect fill="none" height="256" width="256"></rect>
	<path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" stroke-width="5px" stroke="#000" fill="red"></path></svg>`;

	livesCount.append(heart);
}

const hearts = document.querySelectorAll(".heart");

window.addEventListener("keydown", (e) => pressKey(e.key.toLowerCase()));

keyboardButtons.forEach(button => {
	button.addEventListener("click", () => {
		pressKey(button.innerText.toLowerCase(), button);
	});
});

setInterval(() => {
	createCloudAnim();
}, 5000);

startGameBtn.addEventListener("click", () => {
	if (gameStatus) return;

	changeScene(scenes.jump);
	audioPlay(sounds.chairKick);
	setupGame();

	Array.from(keyboardButtons).forEach(key => key.style.cursor = "");

	setTimeout(() => {
		changeScene(scenes.playing);
		playerInteraction.style.opacity = "1";

		Array.from(keyboardButtons).forEach(key => key.style.cursor = "pointer");

		gameStatus = true;
		audioPlay(sounds.shouting);
	}, 2000);
});

function setupGame() {
	
	word = words[Math.floor(Math.random() * words.length)];

	startGameBtn.classList.add("hide");
	mainContainer.style.transform = "scale(1.3)";

	guessedLetters = [];

	hearts.forEach(heart => heart.classList.remove("shut"));

	keyboardButtons.forEach(button => {
		button.classList.remove("success", "disabled");
	});
	wordBubble.style.color = "";

	wordBubble.innerText = word.split("").fill("_").join(" ");

	bubble.style.width = "max-content";
	const width = bubble.offsetWidth;
	bubble.style.width = `calc(${width}px + 250px)`;
	keyboard.style.right = `calc((${width}px - 360px)/2)`;

	clearRainAnim();
	spotlight.style.display = "none";

	document.body.classList.remove("darkness");

	Object.keys(sounds).forEach(key => audioReset(sounds[key]));

	hangmanTextTransform(true);

	interval = setInterval(() => {
		createTomatoAnim();
	}, 1500);
	
}

function pressKey(key, target = null) {
	if (!gameStatus || !/^[a-zA-Z]$/.test(key) || guessedLetters.includes(key) || isHeartsEmpty()) return;

	const prevTxt = wordBubble.innerText;

	const letters = wordBubble.innerText.split(" ").map((letter, i) => key === word[i] ? key : letter);
	wordBubble.innerText = letters.join(" ");

	guessedLetters.push(key);

	if (!target) target = [...keyboardButtons].find(btn => btn.innerText.toLowerCase() === key);

	if (letters.includes(key)) {
		target.classList.add("success");
		audioPlay(sounds.correctLetter);
	} else {
		target.classList.add("disabled");
		audioPlay(sounds.wrongLetter);
	}
	if (!letters.includes("_")) return clearGame(true);

	if (wordBubble.innerText === prevTxt) {
		removeHeart();
		if (isHeartsEmpty()) return clearGame(false);
	}
}

function clearGame(winStatus) {
	clearInterval(interval);
	clearSounds();
	Object.keys(sounds).forEach(key => audioReset(sounds[key]));

	gameStatus = false;

	wordBubble.style.color = winStatus ? "lightgreen" : "lightcoral";

	setTimeout(() => {
		if (!winStatus) {
			createRainAnim();

			wordBubble.style.opacity = "0";
			setTimeout(() => {
				wordBubble.innerText = word.split("").join(" ");
				wordBubble.style.opacity = "1";
			}, 1000);
		} else {
			spotlight.style.display = "block";
			document.body.classList.add("darkness");
		}
		hangmanTextTransform(false, winStatus);
	}, 1000);

	setTimeout(() => {
		playerInteraction.style.opacity = "0";
	}, 4000);

	setTimeout(() => {
		startGameBtn.classList.remove("hide");
		Array.from(keyboardButtons).forEach(key => key.style.cursor = "");
	}, 4500);

	mainContainer.style.transform = "scale(1)";

	if (!winStatus) audioPlay(sounds.chairThrow);
	audioPlay(winStatus ? sounds.win : sounds.lose);
	changeScene(winStatus ? scenes.win : scenes.lose);
}

function isHeartsEmpty() {
	for (let i = 0; i < hearts.length; i++) {
		if (!hearts[i].classList.contains("shut")) return false;
	}
	return true;
}

function removeHeart() {
	for (let i = hearts.length - 1; i >= 0; i--) {
		if (!hearts[i].classList.contains("shut")) {
			hearts[i].classList.add("shut");
			break;
		}
	}
}

function changeScene(src) {
	stageImg.setAttribute("data", src);
}