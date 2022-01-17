/* a constante criar tarefa irá executar as funções ocultas declaradas*/
(() => {
    const criarTarefa = (evento) => {
/* o evento é um parâmetro para que o navegador guarde a informação e não atualize, ele previne a ação do navegador.*/
    evento.preventDefault()

/* a constante list fará a procura do data atribute da tag com o data-list que é a ul onde serão criadas as li e os p*/
    const list = document.querySelector('[data-list]')
/* faz a leitura do texto colocado no input do formulário*/
    const taskInput = document.querySelector('[data-form-input]')

/* armazena o resultado do taskInput para depois ser inserido dentro do paragráfo da ul>li+p.*/
    const taskValue = taskInput.value

/*a tarefa irá criar uma nova li que receberá o parágrafo com o valor armazenado pela taskValue */
    const task = document.createElement('li')
    task.classList.add('task')
/*o li criado na constante task receberá a classe .task, para isso utiliza-se o leitor de classes classList */

/*o que será mostrado para o usuário será o paragrafo, onde será recebido o valor do input, para isso utiizamos um 
template string que são representados por duas aspas ` `
então criamos uma constante chamada content que irá receber um parágrafo com estlização css class="content"
dentro do parágrafo será inserido o valor colhido no input*/
    const content = `<p class="content"> ${taskValue} </p>`

/* o task.innterHTML = content faz com que o conteúdo seja imprimido no html*/
    task.innerHTML = content
    task.appendChild(BotaoConclui()) // cria e recebe o botão concluir da tarefa tam
    task.appendChild(BotaoRemover()) //cria o botão remover.
    /*porém como o task é um parágrafo filho da li que é a constante list, devemos colocar dentro, utilizando por
    exemplo o appendChild e a tarefa criada */
    list.appendChild(task)
    /*declaro que o valor da taskInput a ser colhido é uma string. */
    taskInput.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')
novaTarefa.addEventListener('click', criarTarefa) 


const BotaoConclui = () => { 
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'FEITO'
    
 
    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui
}


const concluirTarefa = (event) => {
    const botaoConclui = event.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')

}

const BotaoRemover = () => {
    const botaoRemover = document.createElement('button')
    botaoRemover.classList.add('delete-button')
    botaoRemover.innerText = 'remover'

    botaoRemover.addEventListener('click', removerTarefa)

    return botaoRemover
}

const removerTarefa = (event) => {
    const botaoRemover = event.target
    const excluirTarefa = botaoRemover.parentElement
    excluirTarefa.remove()

    return botaoRemover
}

})()