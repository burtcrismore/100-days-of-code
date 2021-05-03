// Create a to-do list

function addTask() {
	let getToDo = document.querySelector('.todo');
	let subBtn = getToDo.querySelector('.todo__submit-btn');
	let getField = getToDo.querySelector('.todo__submit-field');
	let getDeletes = getToDo.querySelectorAll('.fa-times-circle');
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

	// NOTE this for loop doesn't find the remove icon because the function runs before the li is created
	// Remove task when icon clicked
	function removeTask() {
		console.log('it works');
		// Search for all remove task buttons
		for (const getDelete of getDeletes) {
			getDelete.addEventListener('click', function (e) {
				e.target.remove();
				console.log('remove');
			});
		}
	}
	removeTask();

	// Check if add button has been clicked
	subBtn.addEventListener('click', function (e) {
		// Check if task field is empty

		let ul = getToDo.querySelector('.todo__list');

		let newLi = document.createElement('li');
		let text = document.createElement('span');
		let circle = document.createElement('span');
		let times = document.createElement('span');

		function addClassName(varName, className1, className2) {
			varName.classList.add(className1, className2);
		}
		addClassName(newLi, 'todo__list-item');
		addClassName(text, 'todo__list-text');
		addClassName(circle, 'fal', 'fa-circle');
		addClassName(times, 'fal', 'fa-times-circle');
		newLi.classList.remove('undefined');

		let textVal = document.createTextNode(getField.value);

		// newLi.appendChild(textVal);
		ul.appendChild(newLi);
		newLi.appendChild(text);
		text.appendChild(textVal);
		newLi.appendChild(circle);
		newLi.appendChild(times);
		getField.value = '';
	});

	// Mark task as complete when icon clicked
}

addTask();
