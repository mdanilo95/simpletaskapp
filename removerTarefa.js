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

export default BotaoRemover