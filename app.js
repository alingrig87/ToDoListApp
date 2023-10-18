const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-task');
const list = document.getElementById('todo-list');

input.addEventListener('input', onTypeTodo);
addButton.addEventListener('click', onAddTodo);

function onTypeTodo() {
	addButton.disabled = input.value.trim().length === 0;
}

function onAddTodo() {
	const li = createListItem(input.value);
	list.appendChild(li);
	clearInput();
}

function createListItem(name) {
	const li = document.createElement('li');
	li.textContent = name;

	return li;
}

function clearInput() {
	input.value = '';
	addButton.disabled = true;
}
