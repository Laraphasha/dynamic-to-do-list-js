document.addEventListener("DOMContentLoaded", (event) => {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  const addTask = () => {
    let taskText = document.getElementById("task-input").value().trim();
    if (taskText === "") {
      alert("Your task field is empty, please enter a task");
    } else {
      let li = document.createElement("li")
      li.innerHTML = taskText
    }
  };
});