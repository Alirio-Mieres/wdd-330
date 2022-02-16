// Add

addTask = function() {
const container = document.querySelector('.list');

const data = document.querySelector('#data').value;

const newTask = document.createElement('li');
const deleteTask = document.createElement('button');

const text = document.createElement('label');
const checkTask = document.createElement('input');



checkTask.setAttribute('type', 'checkbox');


text.innerHTML = data;
deleteTask.innerHTML = '❌';

newTask.classList.add('list-container');
checkTask.classList.add('check');
deleteTask.classList.add('delete');


newTask.appendChild(checkTask);
newTask.appendChild(text);
newTask.appendChild(deleteTask);

container.appendChild(newTask);

document.querySelector('#data').value = "";
}
