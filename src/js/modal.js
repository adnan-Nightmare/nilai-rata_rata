const modal = document.getElementById('modal')
const openModal = document.getElementById('openModal')
const closeModal = document.getElementById('closeModal')

openModal.addEventListener('click', () => {
    modal.style.display = 'flex'
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});