const addNewName = (event) => {
    event.preventDefault()
    const inputName = document.querySelector('[input-nome]')
    const inputNameValue = inputName.value
    console.log(inputNameValue)
    inputName.value = " "
}

const sendButton = document.querySelector('[botao-enviar]')
sendButton.addEventListener('click', addNewName)