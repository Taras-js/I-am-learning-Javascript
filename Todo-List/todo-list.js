const tasksList = document.querySelector('.tasks-list');
const addTasksList = document.querySelector('.add-tasks-form');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const removeTasks = document.querySelector('.remove-tasks');
removeTasks.addEventListener('click', deleteTasksAll);
// const deleteBtn = document.querySelector('.delete-btn');
//
// function deleteTasks (e) {
//     const newTask = e.currentTarget;
//     if(newTask === null) {return newTask.closest('.tasks-list').remove()};
//
// }
// deleteBtn.addEventListener('click', deleteTasks);
// console.log({deleteBtn})
function deleteTasksAll(tasks) {
    localStorage.clear();
    tasks = [];
    return displayTasks(tasks, tasksList);
}

function addTasks(e) {
    e.preventDefault()
    const text = e.target.item.value;
    const item = {
        text,
        checked: false
    }
    tasks.push(item);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks(tasks, tasksList)
    this.reset()
}

function displayTasks(tasks, tasksList) {
    tasksList.innerHTML = tasks.map((task, index) => {
        return `<li class="new-task"><input type='checkbox' id='item${index}' data-index='${index}' ${task.checked ? 'checked' : ''}/>
          <label for='item${index}'>${task.text}</label><button class="delete-btn">Х</button>
          </li>`
    }).join('');
}

function toggleClick(e) {
    if (!e.target.matches('input')) return;

    const element = e.target.dataset.index;
    tasks[element].checked = !tasks[element].checked;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks(tasks, tasksList);
}

tasksList.addEventListener('click', toggleClick);
addTasksList.addEventListener('submit', addTasks);
displayTasks(tasks, tasksList);