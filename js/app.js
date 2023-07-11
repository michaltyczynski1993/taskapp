import { Todo, } from "./todomodel.js";

const todos = [];


const bttn = document.getElementById('bttn');
bttn.addEventListener('click', createTodo);



function createTodo() {
    // select input field values
    let titleInput = document.getElementById('title');
    let descriptionInput = document.getElementById('description');
    let dateInput = document.getElementById('date');

    // create new object based on input values
    const newTodo = new Todo(titleInput.value, descriptionInput.value, dateInput.value, todos);
    todos.push(newTodo);
    // clear input fields
    titleInput.value = '';
    descriptionInput.value = '';
    dateInput.value = '';
    // create parent element for todo elements 
    const taskParent = document.createElement('div');
    taskParent.setAttribute('class', 'task');

    // create new html elements for todo
    createTitle(taskParent, newTodo.taskTitle);
    createDescription(taskParent, newTodo.description);
    createDate(taskParent, newTodo.date);
    createCheckbox(taskParent, newTodo.iscomplete);
    createDelBttn(taskParent);

    // select todo parent
    const tasksBody = document.getElementById('tasks');

    // add elements to DOM
    tasksBody.appendChild(taskParent);

    bttn.onclick = () => {
        clearInput(titleInput);
        clearInput(descriptionInput);
        clearInput(dateInput);
    }
}

const createTitle = (parent, value) => {
    const todoTitle = document.createElement('h4');
    todoTitle.innerHTML = value;
    parent.appendChild(todoTitle);
}

const createDescription = (parent, value) => {
    const todoDescription = document.createElement('p');
    todoDescription.innerHTML = value;
    parent.appendChild(todoDescription);
}

const createDate = (parent, value) => {
    const todoDate = document.createElement('p');
    todoDate.innerHTML = value;
    parent.appendChild(todoDate);

}

const createCheckbox = (parent, value) => {
    const todoCheckbox = document.createElement('input');
    todoCheckbox.setAttribute('type', 'checkbox');
    todoCheckbox.setAttribute('value', value);
    parent.appendChild(todoCheckbox);
}
const createDelBttn = (parent) => {
    const delBttn = document.createElement('button');
    delBttn.innerHTML = "Delete";
    delBttn.onclick = () => {
        delBttn.parentElement.remove();


        const itemIndex = todos.indexOf(delBttn.parentElement.innerText);
        if (itemIndex > -1) {
            itemsList.splice(itemIndex, 1);
        }
    }
    parent.appendChild(delBttn);
}




