function addTask(){
    const taskInput = document.getElementById("taskInput");
    const dateInput = document.getElementById("dateInput");
    const taskList = document.getElementById("taskList");

    if(taskInput.value === ""){
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = taskInput.value + " (" + dateInput.value + ")";

    span.onclick = function(){
        span.classList.toggle("completed");
    };

    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.style.background = "red";

    delBtn.onclick = function(){
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
    dateInput.value = "";
}
