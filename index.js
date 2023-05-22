const addBtn = document.getElementById('add-btn')
const inputField = document.getElementById('input-field')
const alertMsg = document.getElementById('alert-text')
const notesGroup = document.querySelector('.notes-group')

addBtn.addEventListener('click', () => {
    renderNotes()
})

inputField.addEventListener('keypress', (e) => {
    alertMsg.style.display = 'none'

    if (e.key === 'Enter') {
        renderNotes()
    }
})

function renderNotes() {
    if (inputField.value) {

        const note = document.createElement('div')
        note.classList.add('note')

        const checkBtn = document.createElement('button')
        checkBtn.classList.add('check')

        const noteText = document.createElement('span')
        noteText.classList.add('note-text')
        noteText.textContent = inputField.value

        inputField.value = ''

        const deleteBtn = document.createElement('img')
        deleteBtn.setAttribute('src', '/svg/delete.svg')
        deleteBtn.classList.add('delete')

        note.append(checkBtn, noteText, deleteBtn)
        notesGroup.append(note)

        checkBtn.addEventListener('click', completedNote)
        deleteBtn.addEventListener('click', deleteNote)

    } else {
        alertMsg.style.display = 'inline'
    }

}

function completedNote(e) {
    const note = e.target.parentElement
    note.classList.add('completed')
}

function deleteNote(e) {
    const note = e.target.parentElement
    notesGroup.removeChild(note);
}
