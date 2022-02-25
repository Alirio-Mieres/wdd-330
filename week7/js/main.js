const textButton = document.getElementById('quotes');
const outputDiv = document.getElementById('output');
const span = document.createElement('span');

const textURL = "https://type.fit/api/quotes";
let counter = 0;

textButton.addEventListener('click', () => {
    
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = '';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( text => {
        const json = text;
        counter++;
        const data = json[counter].text;
        span.innerHTML = data;
        outputDiv.appendChild(span);
    })
    /*for(i=0, i<1, i++){
        AbortController;
    }*/
    .catch( error => console.log('There was an error:', error))
},false);
/*const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

function addTask(event) {
    event.preventDefault();
    const number = form.task.value;
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    const data = JSON.stringify(task);
    const url = 'https://jsonplaceholder.typicode.com/todos';

    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
    {
        method: 'POST',
        header: headers,
        body: data
    }
    )

    fetch(request)
    .then( response => response.json() )
    .then( task => console.log(`Task saved with an id of ${task.id}`) )
    .catch( error => console.log('There was an error:', error))

}*/