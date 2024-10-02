const fs = require("fs");
const { log } = require("util");
const path = "todo.json";

function readTasks() {
  const data = fs.readFileSync(path, "utf-8");
  return JSON.parse(data);
}

function writeTasks(tasks) {
  fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
}

// List all tasks
function listTasks() {
  const tasks = readTasks();
  console.log(`daftar pekerjaan`);

  tasks.forEach((task) =>
    console.log(`${task.id}. [${task.completed ? "x" : " "}] ${task.content}`)
  );
}

// View specific task by ID
function viewTask(id) {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === id);
  if (task) {
    console.log(
      `[${task.id}] ${task.content} - ${
        task.completed ? "Completed" : "Outstanding"
      }`
    );
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

// Add new task
function addTask(content) {
  const tasks = readTasks();
  const newTask = { id: tasks.length + 1, content, completed: false, tags: [] };
  tasks.push(newTask);
  writeTasks(tasks);
  console.log(`"${content}" telah ditambahkan`);
}

// Delete task
function deleteTask(id) {
  let tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);

    tasks.forEach((task, index) => {
      task.id = index + 1;
    });
    writeTasks(tasks);
    console.log(`${id} telah di hapus dari daftar`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

// Complete task
function completeTask(id) {
  let tasks = readTasks();
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = true;
    writeTasks(tasks);
    console.log(`"${task.content}" telah selesai.`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

// Uncomplete task
function uncompleteTask(id) {
  let tasks = readTasks();
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = false;
    writeTasks(tasks);
    console.log(`"${task.content}" status selesai dibatalkan.`);
  } else {
    console.log(`"${id}" tidak ditemukan.`);
  }
}

// List tasks by completion status
function listOutstanding(order = "asc") {
  const tasks = readTasks().filter((t) => !t.completed);
  sortTasks(tasks, order);
  console.log("daftar pekerjaan");
  tasks.forEach((task) => console.log(`${task.id}. [ ] ${task.content}`));
}

function listCompleted(order = "asc") {
  const tasks = readTasks().filter((t) => t.completed);
  sortTasks(tasks, order);
  console.log("Daftar pekerjaan");
  tasks.forEach((task) => console.log(`${task.id}. [x] ${task.content}`));
}

// Sort helper function
function sortTasks(tasks, order) {
  tasks.sort((a, b) => (order === "asc" ? a.id - b.id : b.id - a.id));
}

// Tag task
function tagTask(id, tags) {
  let tasks = readTasks();
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.tags.push(...tags);
    writeTasks(tasks);
    console.log(
      `Tag '${task.content}' telah di tambahkan ke daftar '${tags.join(",")}'`
    );
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

// Filter tasks by tag
function filterTasksByKeyword(keyword) {
  const tasks = readTasks().filter((task) => task.content.includes(keyword));
  console.log("Daftar pekerjaan");
  tasks.forEach((task) =>
    console.log(`${task.id}. [${task.completed ? "x" : " "}] ${task.content}`)
  );
}

const args = process.argv.slice(2);

if (args[0].startsWith("filter:")) {
  const keyword = args[0].slice(7); // Ekstraksi tag setelah "filter:"
  filterTasksByKeyword(keyword);
} else {
  switch (args[0]) {
    case "list":
      listTasks();
      break;
    case "task":
      viewTask(parseInt(args[1]));
      break;
    case "add":
      addTask(args.slice(1).join(" "));
      break;
    case "delete":
      deleteTask(parseInt(args[1]));
      break;
    case "complete":
      completeTask(parseInt(args[1]));
      break;
    case "uncomplete":
      uncompleteTask(parseInt(args[1]));
      break;
    case "list:outstanding":
      listOutstanding(args[1]);
      break;
    case "list:completed":
      listCompleted(args[1]);
      break;
    case "tag":
      tagTask(parseInt(args[1]), args.slice(2));
      break;
    default:
      console.log(` 
      >>> JS TODO <<<
$ node todo.js <command>
$ node todo.js list
$ node todo.js task <task_id>
$ node todo.js add <task_content>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncomplete <task_id>
$ node todo.js list:outstanding ascldesc
$ node todo.js list:completed ascldesc
$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> <tag_name_N>
$ node todo.js filter: <tag_name>
      `);
      break;
  }
}
