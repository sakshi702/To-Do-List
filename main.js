const M = document.getElementById('task-area');
const N = document.getElementById('single-task');
const P = document.getElementById('tasks');

function addTask(event) {
  event.preventDefault();
  if (N.value === '') return;
  const task = createTask(N.value);
  P.appendChild(task);
  N.value = '';
}

function createTask(taskName) {
  const task = document.createElement('li');
  task.classList.add('task');
  task.innerHTML = `
  <input type="checkbox">
  <label>${taskName}</label>
  <span class="delete">Delete</span> `;

  const deleteButton = task.querySelector('.delete');
  deleteButton.addEventListener('click', deleteTask);

  return task;
}

function deleteTask(event) {
  event.target.parentElement.remove();
}

M.addEventListener('submit', addTask);
