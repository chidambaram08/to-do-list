document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    
    if (todoText === '') return;

    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.textContent = todoText;
    todoItem.appendChild(textSpan);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);

    todoInput.value = '';
}
