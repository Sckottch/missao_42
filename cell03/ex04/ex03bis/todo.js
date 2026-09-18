const oneYear = 60 * 60 *24 * 365;
const key = 'taskList'

let taskList = []

$(function() {
	const $ftList = $("#ft_list");
	const $addButton = $("#add_btn");


	function createTask(text) {
		const $task = $("<div>")
			.addClass("ft-task")
			.text(text)
			.on("click", function() {
				if (confirm("Tem certeza que quer remover essa tarefa?")) {
					removeTask(text);
					$task.remove();
					saveCookie(key, taskList);
				}
			})

		$ftList.prepend($task);
	}

	function addTask() {
		const text = prompt("Digite a nova tarefa: ");
		if (!text) return;

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
		list.forEach(createTask);
	}

	taskList = getCookie(key);
	render(taskList);
	$addButton.on("click", addTask);
})
