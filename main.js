import BotaoConclui from './componentes/concluiTarefa.js'
import BotaoRemover from './componentes/removerTarefa.js'


    const criarTarefa = (evento) => {
    evento.preventDefault()

    const list = document.querySelector('[data-list]')
    const taskInput = document.querySelector('[data-form-input]')
    const taskValue = taskInput.value

    const task = document.createElement('li')
    task.classList.add('task')

    const content = `<p class="content">${taskValue}</p>`

    task.innerHTML = content
    task.appendChild(BotaoConclui())
    task.appendChild(BotaoRemover())
    list.appendChild(task)
    taskInput.value = ""
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

