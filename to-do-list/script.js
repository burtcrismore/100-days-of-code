// Create a to-do list

// Select submit button and add task to list
function addTask() {
	const getToDo = document.querySelector('.todo');
	const subBtn = getToDo.querySelector('.todo__submit-btn');

	// function addElement() {
	// 	console.log('function works');

	// }

	subBtn.addEventListener('click', function (e) {
		// console.log(e.currentTarget);
		const getTaskVal = getToDo.querySelector('.todo__submit-field').value;
		const newLi = document.createElement('li');
		const newTask = document.createTextNode(getTaskVal);
		newLi.appendChild(newTask);
		const ul = document.querySelector('.todo__display-list');
		ul.appendChild(newLi);
	});
}

addTask();
