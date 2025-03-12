const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

let tasks = [];

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click",clearAllTasks)

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        
        const li = document.createElement("li");
        // for every list element put an input checkbox with id
        li.innerHTML = 
        `<input type="checkbox" id="task-${index}" 
        ${task.completed ? "checked" : ""}> 
        <label for="task-${index}">${task.text}</label>`;
        
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks(){
    // for (let i = 0; i < tasks.length; i++) {
    //     const removetasks = tasks.pop();
    // }
    tasks = tasks.filter(task => !task.completed && task.completed );
    displayTasks();
}

