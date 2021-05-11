/* 
=================================================
Global variables
================================================= 
*/
const submit = document.querySelector('.todo__submit-btn');
const input = document.querySelector('.todo__input');
const list = document.querySelector('.todo__list');
const errMsg = document.querySelector('.todo__error-message');
const dateMsg = document.querySelector('.todo__date');
const dayMsg = document.querySelector('.todo__daily-message');
const compMsg = document.querySelector('.todo__task-total');
// let count;

/* 
=================================================
Event listeners
================================================= 
*/
submit.addEventListener('click', addTask);
input.addEventListener('keydown', enterKey);
list.addEventListener('click', completeTask);
list.addEventListener('click', deleteTask);

/* 
=================================================
Add date to header
================================================= 
*/
(function () {
	const options = {
		weekday: 'long',
		// year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	const date = new Date();
	const dateToday = new Intl.DateTimeFormat('en-US', options).format(date);
	dateMsg.innerText = dateToday;
	console.log();
})();

/* 
=================================================
Display total count of tasks
================================================= 
*/
function listCount() {
	const count = list.childElementCount;
	if (count > 0) {
		compMsg.innerText = `${count} Tasks`;
	} else {
		compMsg.innerText = ``;
	}
	// console.log(count);
	return count;
}
console.log(listCount());

/* 
=================================================
Add message if no tasks for the day
================================================= 
*/
function dailyMessage() {
	const count = listCount();
	if (count < 1) {
		dayMsg.style.display = 'block';
		const messageList = [
			`<h3 class="todo__daily-message--quote">"The Best Way To Get Started Is To Quit Talking And Begin Doing." <br>— Walt Disney</h3>`,
			`<h3 class="todo__daily-message--quote">"If you spend too much time thinking about a thing, you’ll never get it done." <br>— Bruce Lee</h3>`,
			`<h3 class="todo__daily-message--quote">"You can’t build a reputation on what you are going to do." <br>— Henry Ford</h3>`,
			`<h3 class="todo__daily-message--quote">"You may delay, but time will not." <br>— Benjamin Franklin</h3>`,
			`<h3 class="todo__daily-message--quote">"The only way around is through." <br>— Robert Frost</h3>`,
			`<h3 class="todo__daily-message--quote">"Only put off until tomorrow what you are willing to die having left undone." <br>— Pablo Picasso</h3>`
		];
		function randomNum() {
			return Math.floor(Math.random() * messageList.length);
		}
		dayMsg.innerHTML = messageList[randomNum()];
	} else {
		dayMsg.style.display = 'none';
		dayMsg.innerText = '';
	}
	// console.log(`message ${count}`);
	// console.log(listCount);
}
dailyMessage();

/* 
=================================================
Create new task
================================================= 
*/
function addTask(event) {
	event.preventDefault();
	// Check input status
	if (input.value === '') {
		return (errMsg.style.display = 'block');
	}
	if (errMsg.style.display === 'block') {
		errMsg.style.display = 'none';
	}

	// Create new elements
	const newLi = document.createElement('li');
	const newLiText = document.createElement('span');
	const newLiDone = document.createElement('span');
	const newLiDelete = document.createElement('span');
	const inputValue = document.createTextNode(input.value);

	// Add class names to elements
	newLi.classList.add('todo__list-item');
	newLiText.classList.add('todo__list-text');
	newLiDone.classList.add('fal', 'fa-circle');
	newLiDelete.classList.add('fal', 'fa-times-circle');

	// Append all new elements together
	list.appendChild(newLi);
	newLi.appendChild(newLiText);
	newLiText.appendChild(inputValue);
	newLi.appendChild(newLiDone);
	newLi.appendChild(newLiDelete);

	// Clear input field value
	input.value = '';

	// Update list count
	listCount();
	dailyMessage();
}

/* 
=================================================
Check if return key is pressed
================================================= 
*/
function enterKey(event) {
	if (event.code === 'Enter') {
		event.preventDefault();
		submit.click();
	}
}

/* 
=================================================
Complete task
================================================= 
*/
function completeTask(event) {
	const target = event.target;
	let dataPrefix = target.dataset.prefix;

	if (target.matches('.fa-circle')) {
		console.log(dataPrefix);
		if (dataPrefix === 'fal') {
			dataPrefix = 'fas';
			console.log('it works');
		}
		// if (target.getAttribute('data-prefix') === 'fas') {
		// 	target.setAttribute('data-prefix', 'fal');
		// 	console.log('has fas');
		// } else if (target.getAttribute('data-prefix') === 'fal') {
		// 	target.setAttribute('data-prefix', 'fas');
		// 	console.log('add fas');
		// }

		listCount();
		dailyMessage();
	}
}

/* 
=================================================
Delete task
================================================= 
*/
function deleteTask(event) {
	const target = event.target;
	if (target.matches('.fa-times-circle')) {
		target.parentElement.remove();
		console.log('delete complete');
		listCount();
		dailyMessage();
	}
}
