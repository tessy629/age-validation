// 1. Select DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 2. Add an event listener to the "Add" button
addBtn.addEventListener('click', addTask);

// 3. Define the function to add a task
function addTask() {
    const taskText = todoInput.value.trim();

    // Prevent adding empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item (li) element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button for the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';

    // Add event listener to delete the item when clicked
    deleteBtn.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    // Append the delete button to the list item
    li.appendChild(deleteBtn);

    // Append the list item to the main list container
    todoList.appendChild(li);

    // Clear the input field for the next task
    todoInput.value = "";
}