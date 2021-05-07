// Create a to-do list

let subBtn = document.querySelector('.todo__submit-btn');
let getField = document.querySelector('.todo__input');
let li = document.querySelectorAll('.todo__list-item');

// Add message if no tasks for the day
// if (true) {
// 	let message = document.querySelector('.todo__message');
// 	let p = document.createElement('p');
// 	let textMessage = document.createTextNode(
// 		'Take a break. You have no tasks today.'
// 	);

// 	p.appendChild(textMessage);
// 	message.appendChild(p);
// }

// If you have no tasks add a daily quote

// Check if return key is pressed
getField.addEventListener('keydown', function (e) {
	if (e.code === 'Enter') {
		subBtn.click();
	}
});

// Display total count of tasks and tasks completed

// Mark task as complete when icon clicked
function completeTask() {
	let completeBtns = document.querySelectorAll('.fa-circle');
	// let completeBtns = document.querySelectorAll('.todo__complete-btn');
	console.log(`${completeBtns.length} complete`);
	for (const completeBtn of completeBtns) {
		completeBtn.addEventListener('click', function (e) {
			console.log('complete');
			console.log(e.currentTarget);
		});
	}
}

// Remove task when icon clicked
function removeTask() {
	let deleteBtns = document.querySelectorAll('.fa-times-circle');
	// let deleteBtns = document.querySelectorAll('.svg');
	// let deleteBtns = document.querySelectorAll('.todo__delete-btn');

	console.log('it works');
	console.log(deleteBtns.length);
	// Search for all remove task buttons
	for (const deleteBtn of deleteBtns) {
		deleteBtn.addEventListener('click', function (e) {
			e.currentTarget.parentElement.remove();
			console.log('remove');
			console.log(e.target);
			console.log(e.currentTarget);
		});
	}
}

function addTask() {
	// Check if add button has been clicked
	subBtn.addEventListener('click', function (e) {
		e.preventDefault();
		let errMsg = document.querySelector('.todo__error-message');
		// Check if task field is empty
		if (getField.value === '') {
			return (errMsg.style.display = 'block');
		}
		if (errMsg.style.display === 'block') {
			errMsg.style.display = 'none';
		}
		let ul = document.querySelector('.todo__list');

		let newLi = document.createElement('li');
		// let newDelBtn = document.createElement('button');
		// let newComBtn = document.createElement('button');
		let text = document.createElement('span');
		let circle = document.createElement('span');
		let times = document.createElement('span');

		function addClassName(varName, className) {
			varName.classList.add(className);
		}
		addClassName(newLi, 'todo__list-item');
		// addClassName(newDelBtn, 'todo__delete-btn');
		// addClassName(newComBtn, 'todo__complete-btn');
		addClassName(text, 'todo__list-text');
		addClassName(circle, 'fal');
		addClassName(circle, 'fa-circle');
		addClassName(times, 'fal');
		addClassName(times, 'fa-times-circle');

		let textVal = document.createTextNode(getField.value);

		ul.appendChild(newLi);
		newLi.appendChild(text);
		// newLi.appendChild(newDelBtn);
		// newLi.appendChild(newComBtn);
		text.appendChild(textVal);
		newLi.appendChild(times);
		newLi.appendChild(circle);
		// newDelBtn.appendChild(times);
		// newComBtn.appendChild(circle);
		getField.value = '';
		removeTask();
		completeTask();
	});
}
addTask();
