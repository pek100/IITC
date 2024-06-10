const soundsPath = "assets/sounds";

export const sounds = {
	win: {
		src: `${soundsPath}/win-sound.wav`,
		delay: 1000,
		vol: 0.4,
		task: undefined
	},
	lose: {
		src: `${soundsPath}/lose-sound.wav`,
		delay: 0,
		vol: 0.4,
		task: undefined
	},
	wrongLetter: {
		src: `${soundsPath}/wrong-answer.wav`,
		delay: 0,
		vol: 0.3,
		task: undefined
	},
	correctLetter: {
		src: `${soundsPath}/correct-answer.wav`,
		delay: 0,
		vol: 0.3,
		task: undefined
	},
	tomato: {
		src: `${soundsPath}/tomato-squash.wav`,
		delay: 700,
		vol: 0.1,
		task: undefined
	}
}
