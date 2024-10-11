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

const getTaskById = (id) => {
  const task = readTasks().find((task) => task.id === id);
  if (task) {
    console.log(`Detail Task ${id}:`);
    console.log(`Id: ${task.id}`);
    console.log(`Completed: [${task.completed ? "x" : " "}]`);
    console.log(`Content: ${task.content}`);
    console.log(`Tags: ${task.tags.length > 0 ? task.tags.join(", ") : "-"}`);
  } else {
    console.log(`Task ${id} tidak ditemukan`);
  }
};

// Add new task
function addTask(content) {
  const tasks = readTasks();
  const newTask = { id: tasks.length + 1, content, completed: false, tags: [] };
  tasks.push(newTask);
  writeTasks(tasks);
  console.log(`"${content}" telah ditambahkan`);
}

function deleteTask(id) {
  let tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);

    tasks.forEach((task, index) => {
      task.id = index + 1;
    });
    writeTasks(tasks);
    console.log(`Task ${id} telah di hapus dari daftar`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

function completeTask(id) {
  let task = readTasks().find((t) => t.id === id);
  if (task) {
    if (task.completed) {
      console.log(`"${task.content}" sudah diselesaikan.`);
    } else {
      task.completed = true;
      writeTasks(task);
      console.log(`"${task.content}" telah selesai.`);
    }
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}

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

function sortTasks(tasks, order) {
  tasks.sort((a, b) => (order === "asc" ? a.id - b.id : b.id - a.id));
}

function tagTask(id, tags) {
  try {
    let tasks = readTasks();
    const task = tasks.find((t) => t.id === id);
    const existingTags = task.tags;
    const newTags = tags.filter((tag) => {
      return !existingTags.includes(tag);
    });
    if (newTags.length > 0) {
      task.tags.push(...newTags);
      writeTasks(tasks);
      console.log(
        `Tag '${newTags.join(", ")}' telah di tambahkan ke daftar '${
          task.content
        }'`
      );
    } else {
      console.log(`Tidak ada tag baru yang ditambahkan pada task ${task.id}.`);
    }
  } catch {
    console.log(`Task ${id} tidak ditemukan.`);
  }
}

function filterTasksByKeyword(tag) {
  const tasks = readTasks();
  const filterTasksByKeyword = tasks.filter((task) => task.tags.includes(tag));

  if (filterTasksByKeyword.length > 0) {
    console.log("Daftar pekerjaan");
    filterTasksByKeyword.forEach((task) => {
      console.log(
        `${task.id}. [${task.completed ? "x" : " "}] ${task.content}`
      );
    });
  } else {
    console.log(`Tidak ada tugas dengan tag "${tag}".`);
  }
}

const showHelp = () => {
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
$ node todo.js filter:<tag_name>
`);
};

const args = process.argv.slice(2);

if (args.length > 0 && args[0].startsWith("filter:")) {
  const filter = args[0].slice(7);
  filterTasksByKeyword(filter);
} else {
  switch (args[0]) {
    case "list":
      listTasks();
      break;
    case "task":
      getTaskById(parseInt(args[1]));
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
    case "help":
      showHelp();
      break;
    default:
      showHelp();
      break;
  }
}
