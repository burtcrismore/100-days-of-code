/* 
=================================================
Global variables
================================================= 
*/
const playerChoice = document.querySelector('.player-choice__container');
const allChoiceBtns = document.querySelectorAll('.player-choice__btn');
const faStacks = document.querySelectorAll('.fa-stack');
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
	disableBtns() {
		for (allChoiceBtn of allChoiceBtns) {
			if (allChoiceBtn.disabled === false) {
				allChoiceBtn.disabled = true;
				allChoiceBtn.style.pointerEvents = 'none';
			} else if (allChoiceBtn.disabled === false) {
				allChoiceBtn.disabled = false;
				allChoiceBtn.style.pointerEvents = 'auto';
			}
		}
	},
	startRound() {
		for (faStack of faStacks) {
			if (faStack.classList.contains('results__panel--move-hand')) {
				faStack.classList.remove('results__panel--move-hand');
			} else {
				faStack.classList.add('results__panel--move-hand');
			}
		}
	}
};

const getChoice = (event) => {
	const choiceBtn = event.target.closest('.player-choice__btn');
	const computerChoice = gameOptions.choices[gameOptions.ranNum()];
	const humanChoice = choiceBtn.dataset.choice;

	if (choiceBtn) {
		// console.log(`${humanChoice} (Human) vs ${computerChoice} (Computer)`);

		// Highlight human btn choice and disable buttons
		gameOptions.disableBtns();

		// switch (humanChoice) {
		// 	case 'Rock':
		// 		console.log('Rock');
		// 		break;
		// 	case 'Paper':
		// 		console.log('Paper');
		// 		break;
		// 	case 'Scissors':
		// 		console.log('Scissors');
		// 		break;
		// 	default:
		// 		console.log('Sorry, no hand.');
		// }

		// Animate hands
		gameOptions.startRound();
		// resultsPanel.closest('.fa-stack').classList.add('results__panel--move-hand');
		// Check for choices
		whoWon(humanChoice, computerChoice);

		// Listen for end of animation and
		// Change hand icon
		// Announce win/lose/tie
		// Fade out announcement
		// Rest button choices

		//

		scoring();
	}
};
playerChoice.addEventListener('click', getChoice);
/* 
 
=================================================
Check who won the round
================================================= 
*/
const whoWon = (humanChoice, computerChoice) => {
	// Check who won
	// Is it a tie?
	const meterBarHuman = document.querySelector('.scoreboard__meter-bar--human');
	const meterBarComputer = document.querySelector('.scoreboard__meter-bar--computer');

	if (humanChoice === computerChoice) {
		console.log('you tied');
	}

	// Did human pick rock?
	else if (humanChoice === 'Rock') {
		if (computerChoice === 'Scissors') {
			// console.log('you win');
			++gameOptions.score.human;
			meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
			// console.log(gameOptions.meterBar.human, 'human');
			// console.log(gameOptions.meterBar.computer, 'computer');
		} else {
			// console.log('you lose');
			++gameOptions.score.computer;
			meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
			// console.log(gameOptions.meterBar.human, 'human');
			// console.log(gameOptions.meterBar.computer, 'computer');
		}
	}
	// Did human pick paper?
	else if (humanChoice === 'Paper') {
		if (computerChoice === 'Rock') {
			// console.log('you win');
			++gameOptions.score.human;
			meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
			// console.log(gameOptions.meterBar.human, 'human');
			// console.log(gameOptions.meterBar.computer, 'computer');
		} else {
			// console.log('you lose');
			++gameOptions.score.computer;
			meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
			// console.log(gameOptions.meterBar.human, 'human');
			// console.log(gameOptions.meterBar.computer, 'computer');
		}
	}
	// Did human pick scissor?
	else if (humanChoice === 'Scissors') {
		if (computerChoice === 'Paper') {
			// console.log('you win');
			++gameOptions.score.human;
			meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
			// console.log(gameOptions.meterBar.human, 'human');
			// console.log(gameOptions.meterBar.computer, 'computer');
		} else {
			// console.log('you lose');
			++gameOptions.score.computer;
			meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
			// console.log(gameOptions.meterBar.human, 'human');
			// console.log(gameOptions.meterBar.computer, 'computer');
		}
	}
};
/* 
=================================================
Keep score
================================================= 
*/
const scoring = () => {
	let humanScore = gameOptions.score.human;
	let computerScore = gameOptions.score.computer;
	console.log(`Human ${humanScore} vs Computer ${computerScore}`);
	if (humanScore >= 5) {
		console.log('Human wins!');
	} else if (computerScore >= 5) {
		console.log('Computer wins!');
	}
};
