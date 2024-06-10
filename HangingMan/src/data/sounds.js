const soundsPath = "assets/sounds";

export const sounds = {
	win: {
		src: `${soundsPath}/win-sound.mp3`,
		delay: 1000,
		vol: 0.4,
		currSound: undefined,
		task: undefined,
		loop: false
	},
	lose: {
		src: `${soundsPath}/lose-sound.mp3`,
		delay: 0,
		vol: 0.4,
		currSound: undefined,
		task: undefined,
		loop: true
	},
	chairKick: {
		src: `${soundsPath}/chair-kick.mp3`,
		delay: 30,
		vol: 0.7,
		currSound: undefined,
		task: undefined,
		loop: false
	},
	chairThrow: {
		src: `${soundsPath}/chair-throw.mp3`,
		delay: 375,
		vol: 0.7,
		currSound: undefined,
		task: undefined,
		loop: false
	},
	wrongLetter: {
		src: `${soundsPath}/wrong-answer.mp3`,
		delay: 0,
		vol: 0.3,
		currSound: undefined,
		task: undefined,
		loop: false
	},
	correctLetter: {
		src: `${soundsPath}/correct-answer.mp3`,
		delay: 0,
		vol: 0.3,
		currSound: undefined,
		task: undefined,
		loop: false
	},
	tomato: {
		src: `${soundsPath}/tomato-squash.mp3`,
		delay: 700,
		vol: 0.1,
		currSound: undefined,
		task: undefined,
		loop: false
	},
	shouting: {
		src: `${soundsPath}/in-game.mp3`,
		delay: 0,
		vol: 0.4,
		currSound: undefined,
		task: undefined,
		loop: true
	}
}
