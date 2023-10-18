const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-task');

input.addEventListener('input', onTypeTodo);

function onTypeTodo() {
	addButton.disabled = input.value.trim().length === 0;
	// addButton.disabled = input.value.length === 0 ? true : false;
}
