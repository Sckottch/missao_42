const ftList = document.getElementById("ft_list");
const addButton = document.getElementById("add_btn");

const oneYear = 60 * 60 *24 * 365;
const key = 'taskList'

let taskList = []

function createTask(text) {
	const task = document.createElement("div");

	task.className = "ft-task";
	task.innerText = text;
	task.addEventListener("click", () => {
		if (confirm("Tem certeza que quer remover essa tarefa?")) {
			removeTask(text);
			task.remove();
			console.log(taskList);
			saveCookie(key, taskList);
		}
	});

	console.log(taskList);
	ftList.prepend(task)
}

function addTask() {
	const text = prompt("Digite a nova tarefa: ");
	if (!text || text === "") return;

	taskList.unshift(text);
	createTask(text);
	saveCookie(key, taskList);
}

function removeTask(text) {
	const idx = taskList.indexOf(text);
	if (idx === -1) return;
	taskList.splice(idx, 1);
}

function saveCookie(name, value) {
	console.log("cookie salvo")
	document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; max-age=${oneYear}; path=/;`;
}

function getCookie(name) {
	const item = document.cookie
		.split('; ')
		.find(c => c.startsWith(name + '='));

	if (!item) return [];
	return JSON.parse(decodeURIComponent(item.slice(name.length + 1)));
}

function render(list) {
	list.forEach(text => {
		createTask(text);
	});
}

taskList = getCookie(key);
render(taskList);
addButton.addEventListener("click", addTask);
