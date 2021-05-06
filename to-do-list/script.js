// Create a to-do list

function task() {
	let getToDo = document.querySelector('.todo');
	let subBtn = getToDo.querySelector('.todo__submit-btn');
	let getField = getToDo.querySelector('.todo__submit-field');
	let li = getToDo.querySelectorAll('.todo__list-item');

	// Add message if no tasks for the day
	// if (true) {
	// 	let message = getToDo.querySelector('.todo__message');
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

	// Remove task when icon clicked

	function removeTask() {
		// let deleteBtns = getToDo.querySelectorAll('.fa-times-circle');
		let deleteBtns = getToDo.querySelectorAll('.todo__delete-btn');

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
		subBtn.addEventListener('click', function () {
			let errMsg = getToDo.querySelector('.todo__error-message');
			// Check if task field is empty
			if (getField.value === '') {
				return (errMsg.style.display = 'block');
			}
			if (errMsg.style.display === 'block') {
				errMsg.style.display = 'none';
			}
			let ul = getToDo.querySelector('.todo__list');

			let newLi = document.createElement('li');
			let newDelBtn = document.createElement('button');
			let text = document.createElement('span');
			let circle = document.createElement('span');
			let times = document.createElement('span');

			function addClassName(varName, className) {
				varName.classList.add(className);
			}
			addClassName(newLi, 'todo__list-item');
			addClassName(newDelBtn, 'todo__delete-btn');
			addClassName(text, 'todo__list-text');
			addClassName(circle, 'fal');
			addClassName(circle, 'fa-circle');
			addClassName(times, 'fal');
			addClassName(times, 'fa-times-circle');

			let textVal = document.createTextNode(getField.value);

			ul.appendChild(newLi);
			newLi.appendChild(text);
			newLi.appendChild(newDelBtn);
			text.appendChild(textVal);
			newLi.appendChild(circle);
			newDelBtn.appendChild(times);
			getField.value = '';
			removeTask();
		});
	}
	addTask();

	// Mark task as complete when icon clicked
}

task();
