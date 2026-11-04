// ===== STYLE (diinjeksi lewat JS) =====
const style = document.createElement("style");
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  #output5 {
    --bg: #0f1115;
    --card: #171a21;
    --line: #232733;
    --text: #e8eaf0;
    --muted: #6b7280;
    --accent: #7c8cff;
    --danger: #ff6b81;

    font-family: 'Inter', system-ui, sans-serif;
    max-width: 440px;
    margin: 40px auto;
    padding: 28px;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 20px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
    color: var(--text);
  }

  #output5 .input-row {
    display: flex;
    gap: 10px;
    margin-bottom: 22px;
  }

  #task-input {
    flex: 1;
    padding: 12px 14px;
    background: var(--bg);
    border: 1px solid var(--line);
    border-radius: 12px;
    color: var(--text);
    font: inherit;
    font-size: 14px;
    outline: none;
    transition: border-color .2s, box-shadow .2s;
  }
  #task-input::placeholder { color: var(--muted); }
  #task-input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(124, 140, 255, 0.15);
  }

  #add-task {
    padding: 0 18px;
    background: var(--accent);
    color: #0f1115;
    border: none;
    border-radius: 12px;
    font: inherit;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: transform .15s, filter .2s;
  }
  #add-task:hover { filter: brightness(1.1); }
  #add-task:active { transform: scale(0.96); }

  #task-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #task-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 8px;
    border-bottom: 1px solid var(--line);
    animation: slideIn .25s ease;
    transition: background .2s;
  }
  #task-list li:last-child { border-bottom: none; }
  #task-list li:hover { background: rgba(255, 255, 255, 0.02); }

  #task-list span {
    flex: 1;
    font-size: 14px;
    word-break: break-word;
    transition: color .2s;
  }
  #task-list li.done span {
    color: var(--muted);
    text-decoration: line-through;
  }

  /* Checkbox custom */
  #task-list input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border: 2px solid var(--muted);
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: all .2s;
  }
  #task-list input[type="checkbox"]:hover { border-color: var(--accent); }
  #task-list input[type="checkbox"]:checked {
    background: var(--accent);
    border-color: var(--accent);
  }
  #task-list input[type="checkbox"]:checked::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid #0f1115;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  /* Tombol hapus: muncul saat hover */
  #task-list button {
    background: transparent;
    border: none;
    color: var(--danger);
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 8px;
    opacity: 0;
    transition: opacity .2s, background .2s;
  }
  #task-list li:hover button { opacity: 1; }
  #task-list button:hover { background: rgba(255, 107, 129, 0.12); }

  #task-list:empty::after {
    content: "Belum ada tugas ✨";
    display: block;
    text-align: center;
    color: var(--muted);
    font-size: 13px;
    padding: 20px 0 6px;
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 480px) {
    #output5 { margin: 16px; padding: 20px; }
    #task-list button { opacity: 1; }
  }
`;
document.head.appendChild(style);

// ===== ELEMEN =====
let inputRow = document.createElement("div");
inputRow.className = "input-row";

let inputTask = document.createElement("input");
inputTask.type = "text";
inputTask.placeholder = "Masukkan tugas baru...";
inputTask.id = "task-input";

let btnAdd = document.createElement("button");
btnAdd.textContent = "Tambah";
btnAdd.id = "add-task";

let taskList = document.createElement("ul");
taskList.id = "task-list";

inputRow.appendChild(inputTask);
inputRow.appendChild(btnAdd);

// ===== EVENT =====
function handleAdd() {
  let taskText = inputTask.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    inputTask.value = "";
    saveTasks();
  }
}

btnAdd.onclick = handleAdd;
inputTask.addEventListener("keydown", function (e) {
  if (e.key === "Enter") handleAdd();
});

// ===== TAMBAH TUGAS =====
function addTask(taskText, completed = false) {
  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  let taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";

  if (completed) li.classList.add("done");

  checkbox.addEventListener("change", function () {
    li.classList.toggle("done", this.checked);
    saveTasks();
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
    saveTasks();
  });

  li.appendChild(checkbox);
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

// ===== LOCALSTORAGE =====
function saveTasks() {
  let tasks = [];
  document.querySelectorAll("#task-list li").forEach(function (li) {
    tasks.push({
      text: li.querySelector("span").textContent,
      completed: li.querySelector("input[type='checkbox']").checked,
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    JSON.parse(savedTasks).forEach(function (task) {
      addTask(task.text, task.completed);
    });
  }
}

// ===== OUTPUT =====
let outputDiv = document.getElementById("output5");
outputDiv.appendChild(inputRow);
outputDiv.appendChild(taskList);

loadTasks();