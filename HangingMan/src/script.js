import { words } from "./data/words.js";
import { sounds } from "./data/sounds.js";
import { scenes } from "./data/scenes.js";
import { hangmanTextTransform } from "./ui/hangmanText.js";

const mainContainer = document.querySelector("#container");
const stage = document.querySelector(".stage");
const bubble = document.querySelector(".bubble-bottom");
const wordBubble = document.querySelector(".bubble-bottom>p");
const keyboardButtons = document.querySelectorAll(".key-letter");
const keyboard = document.querySelector(".keyboard");
const livesCount = document.querySelector(".lives-count");
const stageImg = document.querySelector(".stage>object");
const cloudsContainer = document.querySelector(".clouds");
const spotlight = document.querySelector(".spotlight");
const rainFrontRow = document.querySelector(".rain.front-row");
const rainBackRow = document.querySelector(".rain.back-row");
const startGameBtn = document.querySelector(".start-game");

let guessedLetters = [];

let word = "";
let remainingLives = 6;

let currentAudio = undefined;

let gameStatus = false;

let interval = undefined;

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
	setupGame();
});

function setupGame() {
	word = words[Math.floor(Math.random() * words.length)];
	console.log(word);
	mainContainer.style.transform = "scale(1.3)";
	startGameBtn.classList.add("hide");
	keyboard.classList.remove("hide");

	// changeScene(scenes.jump);
	// setTimeout(() => {
	// 	changeScene(scenes.playing)
	// }, jumpTime);
	changeScene(scenes.playing);

	gameStatus = true;

	guessedLetters = [];
	remainingLives = 6;

	updateLivesCount();

	keyboardButtons.forEach(button => {
		button.classList.remove("success", "disabled");
	});
	wordBubble.style.color = "";

	wordBubble.innerText = word.split("").fill("_").join(" ");

	bubble.style.width = "max-content";
	const width = bubble.offsetWidth;
	bubble.style.width = `calc(${width}px + 170px)`;

	rainFrontRow.style.display = "none";
	rainBackRow.style.display = "none";
	spotlight.style.display = "none";

	document.body.classList.remove("rain-active");
	document.body.classList.remove("darkness");

	if (currentAudio) audioReset();

	hangmanTextTransform(true);

	interval = setInterval(() => {
		createTomatoAnim();
	}, 1500);
}

function pressKey(key, target = null) {
	if (!gameStatus || !/^[a-zA-Z]$/.test(key) || guessedLetters.includes(key) || !remainingLives) return;

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
		remainingLives--;
		updateLivesCount();
		if (!remainingLives) return clearGame(false);
	}
}

function clearGame(winStatus) {
	clearInterval(interval);
	clearSounds();

	gameStatus = false;

	wordBubble.style.color = winStatus ? "lightgreen" : "lightcoral";

	setTimeout(() => {
		if (!winStatus) {
			rainFrontRow.style.display = "block";
			rainBackRow.style.display = "block";
			createRainAnim();

			document.body.classList.add("rain-active");

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
		startGameBtn.classList.remove("hide");
	}, 5000);

	mainContainer.style.transform = "scale(1)";

	audioPlay(winStatus ? sounds.win : sounds.lose);
	changeScene(winStatus ? scenes.win : scenes.lose);
}

function clearSounds() {
	Object.keys(sounds).forEach(key => clearTimeout(sounds[key].task));
}

function updateLivesCount() {
	livesCount.innerText = `Lives: ${remainingLives}`;
}

function createCloudAnim() {
	if (cloudsContainer.children.length >= 6) return;

	const cloud = document.createElement("div");
	cloud.classList.add("cloud");

	cloud.style.top = `${Math.floor(Math.random() * 200) + 50}px`;
	cloud.style.marginLeft = "100%";

	const animTime = Math.floor(Math.random() * 10) + 15;

	cloud.style.animation = `moveclouds ${animTime}s linear infinite`;

	const randNum = Math.floor(Math.random() * 3) + 7;

	cloud.style.opacity = `0.${randNum}`;
	cloud.style.transform = `scale(0.${randNum})`;

	setTimeout(() => {
		cloud.remove();
	}, animTime * 1000);

	cloudsContainer.append(cloud);
}

function createTomatoAnim() {
	const tomato = document.createElement("div");
	tomato.classList.add("tomato");

	const randTime = Math.random();
	const animTime = (0.85 + (randTime < 0.5 ? 0.5 : randTime));
	tomato.style.animation = `${animTime}s tomatoAnim linear`;

	tomato.style.bottom = "0";
	tomato.style.left = `${Math.floor(Math.random() * 10) + 1}%`;

	tomato.style.setProperty("--tomato-bottom", `${Math.floor(Math.random() * 60) + 35}%`);
	tomato.style.setProperty("--tomato-left", `${Math.floor(Math.random() * 45) + 30}%`);

	stage.append(tomato);

	audioPlay(sounds.tomato);

	setTimeout(() => {
		tomato.remove();
	}, animTime * 1000);
}

function createRainAnim() {
	rainFrontRow.innerHTML = "";
	rainBackRow.innerHTML = "";

	let increment = 0;
	let drops = "";
	let backDrops = "";

	while (increment < 100) {
		const randoHundo = (Math.floor(Math.random() * 98 + 1));
		const randoFiver = (Math.floor(Math.random() * 4 + 2));
		increment += randoFiver;

		drops += `<div class="drop" style="left: ${increment}%; bottom: ${(randoFiver + randoFiver - 1 + 100)}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
		backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${(randoFiver + randoFiver - 1 + 100)}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
	}
	rainFrontRow.innerHTML = drops;
	rainBackRow.innerHTML = backDrops;
}

function changeScene(src) {
	stageImg.setAttribute("data", src);
}

function audioPlay(sound) {
	const { src, vol, delay } = sound;

	if (!src) return;

	sound.task = setTimeout(() => {
		if (currentAudio) audioReset();

		currentAudio = new Audio(src);
		currentAudio.volume = vol;
		currentAudio.play().catch(err => console.log(err));
	}, delay);
}

function audioReset() {
	currentAudio.pause();
	currentAudio.currentTime = 0;
	currentAudio = undefined;
}
