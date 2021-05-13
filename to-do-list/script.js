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
	const newLiTextDiv = document.createElement('div');
	const newLiText = document.createElement('p');
	const newLiDoneDiv = document.createElement('div');
	const newLiDone = document.createElement('i');
	const newLiDeleteDiv = document.createElement('div');
	const newLiDelete = document.createElement('i');
	const inputValue = document.createTextNode(input.value);

	// Add class names to elements
	newLi.classList.add('todo__list-item');
	newLiTextDiv.classList.add('todo__list-text-div');
	newLiText.classList.add('todo__list-text');
	newLiDoneDiv.classList.add('todo__done-icon');
	newLiDone.classList.add('fal', 'fa-circle', 'dot');
	newLiDeleteDiv.classList.add('todo__delete-icon');
	newLiDelete.classList.add('fal', 'fa-times-circle');

	// Append all new elements together
	list.appendChild(newLi);
	newLi.appendChild(newLiTextDiv);
	newLiTextDiv.appendChild(newLiText);
	newLiText.appendChild(inputValue);
	newLi.appendChild(newLiDoneDiv);
	newLiDoneDiv.appendChild(newLiDone);
	newLi.appendChild(newLiDeleteDiv);
	newLiDeleteDiv.appendChild(newLiDelete);

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
	const targetThis = event.target;
	// const targetThisParent = event.target.parentElement;
	// let dataPrefix = targetThis.dataset.prefix;
	// let dataIcon = targetThis.matches('[data-fa-i2svg]');
	// let dataIcon = targetThis.matches('.dot');
	// let getDataIcon = targetThis.parentElement.getAttribute('data-fa-i2svg');
	const doneIcon = targetThis.parentElement;
	console.log('found circle');
	console.log(doneIcon);
	// console.log(targetThis);
	
	if (doneIcon.matches('.todo__done-icon')) {
		console.log('match found');
		console.log(doneIcon.children[0].dataset.prefix);
		if (doneIcon.children[0].dataset.prefix === 'fal') {
			console.log('has fal');
			doneIcon.children[0].setAttribute('data-prefix', 'fas');
		}
		else if (doneIcon.children[0].dataset.prefix === 'fas') {
			console.log('has fas');
			doneIcon.children[0].setAttribute('data-prefix', 'fal');
		}
		// targetThis.setAttribute('data-prefix', 'fas');
		// targetThis.classList.toggle('fas');
		// console.log(dataIcon.children);
		// if (dataIcon.children[0].getAttribute('data-prefix') === 'fal') {
		// 	targetThis.dataset.prefix = 'fas';
		// 	console.log('fas works');
		// 	console.log(targetThis);
		// }  
		// if (dataPrefix === 'fas') {
		// 	targetThis.dataset.prefix = 'fal';
		// 	console.log('fal works');
		// }

		// if (targetThis.getAttribute('data-prefix') === 'fas') {
		// 	targetThis.setAttribute('data-prefix', 'fal');
		// 	console.log('has fas');
		// } 
		// if (targetThis.getAttribute('data-prefix') === 'fal') {
		// 	targetThis.setAttribute('data-prefix', 'fas');
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
