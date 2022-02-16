// Add
export default class Task {
  constructor(content = "", id = Date.now(), completed = false){ 
  this.content = content;
  this.id = id;
  this.completed = completed;
}

//Toggle Task
  toggleTask() {
    this.completed = !this.completed;
  }

  createElement(updateCallback, removeItemCallback){
    const newTask = document.createElement('li');
    
    const checkTask = document.createElement('input');
    checkTask.setAttribute('type', 'checkbox');
    checkTask.addEventListener('click', (event) => {
      this.toggleTask();
      updateCallback();
    });

    this.completed ? checkTask.setAttribute('checked', true) : "";

    const text = document.createElement('label');
    text.innerHTML = this.content;

    const deleteTask = document.createElement('button');
    deleteTask.innerHTML = '❌';
    deleteTask.addEventListener('click', (event) => {removeItemCallback(this)});

    checkTask.classList.add('check');
    deleteTask.classList.add('delete');

    newTask.appendChild(checkTask);
    newTask.appendChild(text);
    newTask.appendChild(deleteTask);
    return newTask;

      }
   }

