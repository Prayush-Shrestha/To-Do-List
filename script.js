const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", function(){

    if(input.value === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${input.value}
        <button class="delete">Delete</button>
    `;

    list.appendChild(li);

    input.value = "";

    li.querySelector(".delete").addEventListener("click", function(){
        li.remove();
    });

});