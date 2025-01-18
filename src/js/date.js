const date = document.getElementById('date')

const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const today = new Date()

date.textContent = `${bulan[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`
