// console.log("app functional");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const form_EL = document.querySelector("#to-do-form");
const ul_EL = document.querySelector("#task-container");
const input_EL = document.querySelector("#task");

const init = () => {
    tasks.forEach(task => {
        const li_EL = document.createElement("li");
        li_EL.textContent = task;
        ul_EL.appendChild(li_EL);
    })
}

init();

const handleForm = event => {
    event.preventDefault();
    console.log("form working!");
    tasks.push(input_EL.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    window.location.reload();
}

form_EL.addEventListener("submit", handleForm);

