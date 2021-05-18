/* 
=================================================
Global variables
================================================= 
*/
const playerChoice = document.querySelector('.player-choice');
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
	}
};

const getChoice = (event) => {
	const computerChoice = gameOptions.choices[gameOptions.ranNum()];
	const humanChoice = event.target.innerText;
	if (event.target.matches('.player-choice__btn')) {
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
	if (humanChoice === computerChoice) {
		console.log('you tied');
	}
	// Did human pick rock?
	else if (humanChoice === 'Rock') {
		if (computerChoice === 'Scissor') {
			console.log('you win');
			++gameOptions.score.human;
		} else {
			console.log('you lose');
			++gameOptions.score.computer;
		}
	}
	// Did human pick paper?
	else if (humanChoice === 'Paper') {
		if (computerChoice === 'Rock') {
			console.log('you win');
			++gameOptions.score.human;
		} else {
			console.log('you lose');
			++gameOptions.score.computer;
		}
	}
	// Did human pick scissor?
	else if (humanChoice === 'Scissor') {
		if (computerChoice === 'Paper') {
			console.log('you win');
			++gameOptions.score.human;
		} else {
			console.log('you lose');
			++gameOptions.score.computer;
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
	if (humanScore >= 3) {
		console.log('Human wins!');
	} else if (computerScore >= 3) {
		console.log('Computer wins!');
	}
};
