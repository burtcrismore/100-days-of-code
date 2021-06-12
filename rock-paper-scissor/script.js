/* 
=================================================
Game Options
================================================= 
*/
const gameOptions = {
	min: 0,
	max: 2,
	ranNum() {
		return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
	},
	choices: ['Rock', 'Paper', 'Scissors'],
	score: {
		human: 0,
		computer: 0
	},
	meterBar: {
		human: 100,
		computer: 100
	},
	scoring() {
		if (this.meterBar.human === 0) {
			console.log('Computer wins!');
		} else if (this.meterBar.computer === 0) {
			console.log('Human wins!');
		}
		return this;
	}
};

/* 
=================================================
Start Round
================================================= 
*/
const roundSteps = {
	playerChoice: document.querySelector('.player-choice__container'),
	allChoiceBtns: document.querySelectorAll('.player-choice__btn'),
	faStacks: document.querySelectorAll('.fa-stack'),
	meterBarHuman: document.querySelector('.scoreboard__meter-bar--human'),
	meterBarComputer: document.querySelector('.scoreboard__meter-bar--computer'),
	humanRock: document.querySelector('.results__panel--human-rock'),
	humanPaper: document.querySelector('.results__panel--human-paper'),
	humanScissors: document.querySelector('.results__panel--human-scissors'),
	computerRock: document.querySelector('.results__panel--computer-rock'),
	computerPaper: document.querySelector('.results__panel--computer-paper'),
	computerScissors: document.querySelector('.results__panel--computer-scissors'),
	messageWinner: document.querySelector('.results__divider-winner'),
	messageLoser: document.querySelector('.results__divider-loser'),
	messageDraw: document.querySelector('.results__divider-draw'),
	disableBtn() {
		for (allChoiceBtn of this.allChoiceBtns) {
			if (allChoiceBtn.disabled === false) {
				// console.log('disable button');
				allChoiceBtn.disabled = true;
				allChoiceBtn.style.pointerEvents = 'none';
			} else if (allChoiceBtn.disabled === true) {
				// console.log('revert disable');
				allChoiceBtn.removeAttribute('style');
				allChoiceBtn.removeAttribute('disabled');
			}
		}
		return this;
	},
	handAnimation() {
		// console.log('animate hand');
		const containsHumanRock = this.humanRock.classList.contains('results__panel--move-hand');
		const containsComputerRock = this.computerRock.classList.contains('results__panel--move-hand');
		if (containsHumanRock || containsComputerRock) {
			this.humanRock.classList.remove('results__panel--move-hand');
			this.computerRock.classList.remove('results__panel--move-hand');
		} else if (!containsHumanRock || containsComputerRock) {
			this.humanRock.classList.add('results__panel--move-hand');
			this.computerRock.classList.add('results__panel--move-hand');
		}
		return this;
	},
	handAnimationEnd(humanChoice, computerChoice) {
		// Added globalThis (or window.) to create global variables since these variables can't be called at runtime since they don't exist yet
		globalThis.handMove = document.querySelector('.results__panel--move-hand');

		globalThis.listenForHandMove = () => {
			// console.log('animation ended');
			this.changeHand(humanChoice, computerChoice);
			this.whoWon(humanChoice, computerChoice);

			// Declare winner check
			// Did you win or lose match

			// Yes, end game and display replay button

			// No, continue playing

			globalThis.messageShow = document.querySelector('.results__divider-message--show');
			messageShow.addEventListener('animationend', listenForMessageShow);
		};

		globalThis.listenForMessageShow = () => {
			// console.log('message animation end');
			setTimeout(() => {
				// console.log('message removed');
				messageShow.classList.remove('results__divider-message--show');

				this.resetRound(humanChoice, computerChoice);
			}, 1000);
		};

		handMove.addEventListener('animationend', listenForHandMove);

		return this;
	},
	changeHand(humanChoice, computerChoice) {
		console.log('player hand shown:', humanChoice);
		console.log('computer hand shown:', computerChoice);
		// console.log('check human choice');
		// console.log(this.humanRock);

		// Add classes to add and remove instead of style.display
		if (humanChoice === 'Paper') {
			this.humanRock.classList.add('results__panel--hide');
			this.humanPaper.classList.add('results__panel--show');
			// this.humanRock.style.display = 'none';
			// this.humanPaper.style.display = 'block';
		} else if (humanChoice === 'Scissors') {
			this.humanRock.classList.add('results__panel--hide');
			this.humanScissors.classList.add('results__panel--show');
			// this.humanRock.style.display = 'none';
			// this.humanScissors.style.display = 'block';
		}

		if (computerChoice === 'Paper') {
			this.computerRock.classList.add('results__panel--hide');
			this.computerPaper.classList.add('results__panel--show');
		} else if (computerChoice === 'Scissors') {
			this.computerRock.classList.add('results__panel--hide');
			this.computerScissors.classList.add('results__panel--show');
		}
		// if (humanChoice != 'Rock') {
		// 	this.humanRock.style.display = 'none';

		// 	if (humanChoice === 'Paper') {
		// 		console.log('human paper icon');
		// 		this.humanPaper.style.display = 'block';
		// 	} else {
		// 		console.log('human scissors icon');
		// 		this.humanScissors.style.display = 'block';
		// 	}
		// }

		// if (computerChoice != 'Rock') {
		// 	this.computerRock.style.display = 'none';

		// 	if (computerChoice === 'Paper') {
		// 		console.log('computer paper icon');
		// 		this.computerPaper.style.display = 'block';
		// 	} else {
		// 		console.log('computer scissors icon');
		// 		this.computerScissors.style.display = 'block';
		// 	}
		// }

		return this;
	},
	whoWon(humanChoice, computerChoice) {
		if (humanChoice === computerChoice) {
			this.messageDraw.classList.add('results__divider-message--show');
			console.log('message: draw');
		}

		// Did human pick rock?
		else if (humanChoice === 'Rock') {
			if (computerChoice === 'Scissors') {
				console.log('message: winner');
				this.messageWinner.classList.add('results__divider-message--show');
				++gameOptions.score.human;
				this.meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
			} else {
				console.log('message: loser');
				this.messageLoser.classList.add('results__divider-message--show');
				++gameOptions.score.computer;
				this.meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
			}
		}
		// Did human pick paper?
		else if (humanChoice === 'Paper') {
			if (computerChoice === 'Rock') {
				console.log('message: winner');
				this.messageWinner.classList.add('results__divider-message--show');
				++gameOptions.score.human;
				this.meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
			} else {
				console.log('message: loser');
				this.messageLoser.classList.add('results__divider-message--show');
				++gameOptions.score.computer;
				this.meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
			}
		}
		// Did human pick scissor?
		else if (humanChoice === 'Scissors') {
			if (computerChoice === 'Paper') {
				console.log('message: winner');
				this.messageWinner.classList.add('results__divider-message--show');
				++gameOptions.score.human;
				this.meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
			} else {
				console.log('message: loser');
				this.messageLoser.classList.add('results__divider-message--show');
				++gameOptions.score.computer;
				this.meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
			}
		}

		console.log(gameOptions.meterBar.computer);
		console.log(gameOptions.meterBar.human);
	},
	resetRound(humanChoice, computerChoice) {
		// Hands

		// refactor with loop maybe?
		if (humanChoice === 'Paper') {
			this.humanRock.classList.remove('results__panel--hide');
			this.humanPaper.classList.remove('results__panel--show');
		} else if (humanChoice === 'Scissors') {
			this.humanRock.classList.remove('results__panel--hide');
			this.humanScissors.classList.remove('results__panel--show');
		}

		if (computerChoice === 'Paper') {
			this.computerRock.classList.remove('results__panel--hide');
			this.computerPaper.classList.remove('results__panel--show');
		} else if (computerChoice === 'Scissors') {
			this.computerRock.classList.remove('results__panel--hide');
			this.computerScissors.classList.remove('results__panel--show');
		}
		// Animations
		this.humanRock.classList.remove('results__panel--move-hand');
		this.computerRock.classList.remove('results__panel--move-hand');

		// Buttons
		this.disableBtn();

		// clear timeouts?
		// clearTimeout();
		// remove even listeners?
		handMove.removeEventListener('animationend', listenForHandMove);
		messageShow.removeEventListener('animationend', listenForMessageShow);
		// return this;
	}
};

const startRound = (event) => {
	const choiceBtn = event.target.closest('.player-choice__btn');
	const computerChoice = gameOptions.choices[gameOptions.ranNum()];
	const humanChoice = choiceBtn.dataset.choice;

	console.log('human logged:', humanChoice);
	console.log('computer logged:', computerChoice);

	if (choiceBtn) {
		roundSteps.disableBtn().handAnimation().handAnimationEnd(humanChoice, computerChoice);
		// Disable button choices
		// roundSteps.disableBtn().then(roundSteps.handAnimation);
		// roundSteps.disableBtn().then(roundSteps.changeHand(humanChoice));
		// roundSteps.changeHand(humanChoice);
		// Animate hands
		// roundSteps.handAnimation().then(roundSteps.handAnimationEnd()).then(roundSteps.changeHand(humanChoice));
		// Check for choices
		// roundSteps.whoWon(humanChoice, computerChoice);
		// Change hand icon
		// Announce win/lose/tie
		// Fade out announcement
		// Rest button choices
		//
		gameOptions.scoring();
	}
};
roundSteps.playerChoice.addEventListener('click', startRound);
/* 
 
=================================================
Check who won the round
================================================= 
*/
// const whoWon = (humanChoice, computerChoice) => {
// 	// Check who won
// 	// Is it a tie?
// 	const meterBarHuman = document.querySelector('.scoreboard__meter-bar--human');
// 	const meterBarComputer = document.querySelector('.scoreboard__meter-bar--computer');

// 	if (humanChoice === computerChoice) {
// 		console.log('you tied');
// 	}

// 	// Did human pick rock?
// 	else if (humanChoice === 'Rock') {
// 		if (computerChoice === 'Scissors') {
// 			++gameOptions.score.human;
// 			meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
// 		} else {
// 			++gameOptions.score.computer;
// 			meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
// 		}
// 	}
// 	// Did human pick paper?
// 	else if (humanChoice === 'Paper') {
// 		if (computerChoice === 'Rock') {
// 			++gameOptions.score.human;
// 			meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
// 		} else {
// 			++gameOptions.score.computer;
// 			meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
// 		}
// 	}
// 	// Did human pick scissor?
// 	else if (humanChoice === 'Scissors') {
// 		if (computerChoice === 'Paper') {
// 			++gameOptions.score.human;
// 			meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
// 		} else {
// 			++gameOptions.score.computer;
// 			meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
// 		}
// 	}
// };
/* 
=================================================
Keep score
================================================= 
*/
// const scoring = () => {
// 	let humanScore = gameOptions.score.human;
// 	let computerScore = gameOptions.score.computer;
// 	// console.log(`Human ${humanScore} vs Computer ${computerScore}`);
// 	if (humanScore >= 5) {
// 		console.log('Human wins!');
// 	} else if (computerScore >= 5) {
// 		console.log('Computer wins!');
// 	}
// };
