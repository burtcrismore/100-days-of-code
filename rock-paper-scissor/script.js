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
	ranNum: function () {
		return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
	},
	choices: ['Rock', 'Paper', 'Scissor'],
	score: {
		human: 0,
		computer: 0
	},
	meterBar: {
		human: 100,
		computer: 100
	}
};

const getChoice = (event) => {
	const choiceBtn = event.target.closest('.player-choice__btn');
	const computerChoice = gameOptions.choices[gameOptions.ranNum()];
	const humanChoice = choiceBtn.dataset.choice;

	// console.log(event.target.closest('.player-choice__btn'));
	// console.log(event.target.closest('.player-choice__btn').dataset.choice);

	if (choiceBtn) {
		console.log(`${humanChoice} (Human) vs ${computerChoice} (Computer)`);
		whoWon(humanChoice, computerChoice);
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
		if (computerChoice === 'Scissor') {
			console.log('you win');
			++gameOptions.score.human;
			meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
			console.log(gameOptions.meterBar.human, 'human');
			console.log(gameOptions.meterBar.computer, 'computer');
		} else {
			console.log('you lose');
			++gameOptions.score.computer;
			meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
			console.log(gameOptions.meterBar.human, 'human');
			console.log(gameOptions.meterBar.computer, 'computer');
		}
	}
	// Did human pick paper?
	else if (humanChoice === 'Paper') {
		if (computerChoice === 'Rock') {
			console.log('you win');
			++gameOptions.score.human;
			meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
			console.log(gameOptions.meterBar.human, 'human');
			console.log(gameOptions.meterBar.computer, 'computer');
		} else {
			console.log('you lose');
			++gameOptions.score.computer;
			meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
			console.log(gameOptions.meterBar.human, 'human');
			console.log(gameOptions.meterBar.computer, 'computer');
		}
	}
	// Did human pick scissor?
	else if (humanChoice === 'Scissor') {
		if (computerChoice === 'Paper') {
			console.log('you win');
			++gameOptions.score.human;
			meterBarComputer.style.width = `${(gameOptions.meterBar.computer -= 20)}%`;
			console.log(gameOptions.meterBar.human, 'human');
			console.log(gameOptions.meterBar.computer, 'computer');
		} else {
			console.log('you lose');
			++gameOptions.score.computer;
			meterBarHuman.style.width = `${(gameOptions.meterBar.human -= 20)}%`;
			console.log(gameOptions.meterBar.human, 'human');
			console.log(gameOptions.meterBar.computer, 'computer');
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
