const $ = document.querySelector.bind(document)

const loadTasks = () => {
  const tasksStr = localStorage.getItem('tasks')
  if (tasksStr) {
    const tasks = JSON.parse(tasksStr)
    tasks.forEach((t) => {
      const newTaskItem = `
        <li>${t}</li>
      `
      $('#task-list').insertAdjacentHTML('beforeend', newTaskItem)
    })
  }
}

loadTasks()

const addTask = (event) => {
  event.preventDefault()
  const taskDescription = $('#task-description').value

  const newTaskItem = `
    <li>${taskDescription}</li>
  `

  $('#task-list').insertAdjacentHTML('beforeend', newTaskItem)
  $('#task-form').reset()
  saveTask(taskDescription)
}

const saveTask = (task) => {
  let tasksStr = localStorage.getItem('tasks')

  let tasks = []
  /**
   * Se já salvou ao menos uma tarefa
   * no localStorage:
   */
  if (tasksStr) {
    tasks = JSON.parse(tasksStr)
  }

  tasks.push(task)
  tasksStr = JSON.stringify(tasks)
  localStorage.setItem('tasks', tasksStr)
}
