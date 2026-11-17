const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearBtn");
const emptyMessage = document.getElementById("emptyMessage");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {

    taskList.innerHTML = "";

    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

    tasks.forEach((task) => {

        const li = document.createElement("li");
        li.classList.add("task");

        if (task.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <input 
                type="checkbox" 
                class="check-btn"
                ${task.completed ? "checked" : ""}
            >

            <span>${task.text}</span>

            <button class="delete-btn">Delete</button>
        `;

        const checkbox = li.querySelector(".check-btn");
        const deleteBtn = li.querySelector(".delete-btn");

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            saveTasks();
            displayTasks();
        });

        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter((item) => item.id !== task.id);
            saveTasks();
            displayTasks();
        });

        taskList.appendChild(li);
    });

    updateCount();
}

function updateCount() {

    const remainingTasks = tasks.filter(
        (task) => !task.completed
    ).length;

    taskCount.textContent =
        `${remainingTasks} ${remainingTasks === 1 ? "Task" : "Tasks"}`;
}

function addTask() {

    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);

    saveTasks();

    taskInput.value = "";

    displayTasks();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        addTask();
    }

});

clearBtn.addEventListener("click", () => {

    tasks = tasks.filter(
        (task) => !task.completed
    );

    saveTasks();

    displayTasks();
});

displayTasks();