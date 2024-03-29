// LISTS
const inputField = document.querySelector('.input-field textarea'),
    todoLists = document.querySelector('.todoLists'),
    pendingNum = document.querySelector('.pending-num'),
    clearButton = document.querySelector('.clear-button');

function allTasks() {
  let tasks = document.querySelectorAll(".pending");
  pendingNum.textContent = tasks.length;
  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    todoLists.style.marginTop = "20px";
    clearButton.style.display = "inline";
    return;
  }
  todoLists.style.marginTop = "0px";
  clearButton.style.display = "none";
}

inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = `<li class="list pending" onclick="handleStatus(this)">
            <input type="checkbox" />
            <span class="task">${inputVal}</span>
            <i class="bi bi-trash3" onclick="deleteTask(this)"></i>
        </li>`;
    todoLists.insertAdjacentHTML("beforeend", liTag);
    inputField.value = "";
    allTasks();
  }
});

function handleStatus(e)
{
    const checkbox = e.querySelector('input');
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle('pending');
    allTasks();
}

function deleteTask(e)
{
    e.parentElement.remove();
    allTasks();
}

clearButton.addEventListener('click', () => {
    todoLists.innerHTML = '';
    allTasks();
});