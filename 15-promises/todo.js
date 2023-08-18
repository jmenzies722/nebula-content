const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

addTaskButton.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    newTaskInput.value = "";
  }
});

function addTask(text) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task");
  taskItem.innerHTML = `
    <input type="checkbox">
    <span>${text}</span>
    <button class="deleteTask">Delete</button>
  `;
  taskList.appendChild(taskItem);
  updateTaskCount();
}

taskList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "INPUT") {
    const task = target.parentNode;
    task.classList.toggle("completed");
    updateTaskCount();
  } else if (target.classList.contains("deleteTask")) {
    const task = target.parentNode;
    taskList.removeChild(task);
    updateTaskCount();
  }
});

function updateTaskCount() {
  const tasks = document.querySelectorAll(".task");
  const completed = document.querySelectorAll(".task.completed");
  totalTasks.textContent = tasks.length;
  completedTasks.textContent = completed.length;
}