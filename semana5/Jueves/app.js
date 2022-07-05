class Task {

    constructor(_text) {
        this.id = '_' + Math.random().toString(36).slice(2);
        this.text = _text;
        this.status = 'todo';// done | delete
        this.created_at = new Date();
        // this.priority = 'high';
        this.done_at = null;
        this.deleted_at = null;

    }

    done() {
        this.status = 'done';
        this.done_at = new Date();
        document.querySelector("#"+this.id).classList.add('done');
    }
    
    delete() {
        this.status = 'delete';
        this.deleted_at = new Date();
        document.querySelector("#"+this.id).classList.add('delete');

    }


    createElement() {
        const element = document.createElement('p');
        element.setAttribute('id', this.id);
        element.setAttribute('class', 'task');
        element.innerHTML = `
        <input type="checkbox" onchange="checkTask(this);">
        <span>${this.text}</span>
        <a onclick="deleteTask(this)";>❌</a>
        `;
        return element;
    }

}
// DOM:
const listTasks = document.querySelector("#list");
const inputTask = document.querySelector('#input_newtask');
inputTask.focus();

const arrayTasks = [];



function addTask(){
    if(inputTask.value == ""){
        alert("Ingresa un texto para la tarea.");
        return;
    }
    //Creamos la nueva tarea:
    const task = new Task(inputTask.value);
    //Agregamos al arreglo de
    arrayTasks.push(task);
    //Agregamos la tarea el DOM:
    document.querySelector('.form').before(task.createElement());
    inputTask.value = "";
    inputTask.focus();
}

function checkTask(checkbox){
    if(checkbox.checked){
        const task_id = checkbox.parentElement.id;
        const task = arrayTasks.find(task => task.id == task_id);
        task.done();
        console.log(task_id);
        checkbox.setAttribute('disabled',true);
    }
}

function deleteTask(anchor){
    const task_id = anchor.parentElement.id;
    const task = arrayTasks.find(task => task.id == task_id);
    task.delete();
    console.log(task_id);
}
/* 
<div id="list">
            <p id="_asdf" class="task done">
                <input type="checkbox">
                <span>Tarea 1</span>
                <a>❌</a>
            </p>
            <p id="_asdf1" class="task delete">
                <input type="checkbox">
                <span>Tarea 1</span>
                <a>❌</a>
            </p>
            <p class="form">
                <input type="text" id="input_newtask" placeholder="new task ...">
                <input type="button" value="Add Task">
            </p>
 </div> 
*/



// const tarea1 = new Task("tomar desayuno");
// const tarea2 = new Task("alimentar al perro");
// const elemento_ejemplo = tarea1.createElement();
// const elemento_ejemplo2 = tarea2.createElement();
// console.log(elemento_ejemplo);
// console.log(elemento_ejemplo2);