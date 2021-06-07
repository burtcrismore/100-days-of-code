/* 
=================================================
Global variables
================================================= 
*/
const playerChoice = document.querySelector('.player-choice__container');
/* 
=================================================
Event listeners
================================================= 
*/

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
		if (this.score.human >= 5) {
			console.log('Human wins!');
		} else if (this.score.computer >= 5) {
			console.log('Computer wins!');
		}
	}
};

/* 
=================================================
Start Round
================================================= 
*/
const roundSteps = {
	allChoiceBtns: document.querySelectorAll('.player-choice__btn'),
	faStacks: document.querySelectorAll('.fa-stack'),
	meterBarHuman: document.querySelector('.scoreboard__meter-bar--human'),
	meterBarComputer: document.querySelector('.scoreboard__meter-bar--computer'),
	// handMove: document.querySelector('.results__panel--move-hand'),
	disableBtn() {
		console.log('disable button');
		for (allChoiceBtn of this.allChoiceBtns) {
			if (allChoiceBtn.disabled === false) {
				allChoiceBtn.disabled = true;
				allChoiceBtn.style.pointerEvents = 'none';
			} else if (allChoiceBtn.disabled === true) {
				allChoiceBtn.disabled = false;
				allChoiceBtn.style.pointerEvents = 'auto';
			}
		}
		return this;
	},
	handAnimation() {
		console.log('animate hand');

		for (faStack of this.faStacks) {
			if (faStack.classList.contains('results__panel--move-hand')) {
				faStack.classList.remove('results__panel--move-hand');
			} else if (!faStack.classList.contains('results__panel--move-hand')) {
				faStack.classList.add('results__panel--move-hand');
			}
		}
		return this;
	},
	handAnimationEnd(humanChoice, computerChoice) {
		const handMove = document.querySelector('.results__panel--move-hand');
		handMove.addEventListener('animationend', () => {
			console.log('animation ended');
			this.changeHand(humanChoice);
			this.whoWon(humanChoice, computerChoice);
		});
		return this;
	},
	changeHand(humanChoice) {
		// console.log(humanChoice);
		console.log('check human choice');
		switch (humanChoice) {
			case 'Rock':
				console.log('Rock');
				break;
			case 'Paper':
				console.log('Paper');
				break;
			case 'Scissors':
				console.log('Scissors');
				break;
			default:
				console.log('Sorry, no hand.');
		}
		return this;
	},
	whoWon(humanChoice, computerChoice) {
		if (humanChoice === computerChoice) {
			console.log('you tied');
		}

		// Did human pick rock?
		else if (humanChoice === 'Rock') {
			if (computerChoice === 'Scissors') {
				++gameOptions.score.human;
				this.meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
			} else {
				++gameOptions.score.computer;
				this.meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
			}
		}
		// Did human pick paper?
		else if (humanChoice === 'Paper') {
			if (computerChoice === 'Rock') {
				++gameOptions.score.human;
				this.meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
			} else {
				++gameOptions.score.computer;
				this.meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
			}
		}
		// Did human pick scissor?
		else if (humanChoice === 'Scissors') {
			if (computerChoice === 'Paper') {
				++gameOptions.score.human;
				this.meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
			} else {
				++gameOptions.score.computer;
				this.meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
			}
		}
	},
	resetHand() {}
};

const startRound = (event) => {
	const choiceBtn = event.target.closest('.player-choice__btn');
	const computerChoice = gameOptions.choices[gameOptions.ranNum()];
	const humanChoice = choiceBtn.dataset.choice;

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
		// gameOptions.scoring();
	}
};
playerChoice.addEventListener('click', startRound);
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
