const menuToggler = document.querySelector('.toggle-menu')
const menu = document.querySelector('.menu')

// Toggle menu
menuToggler.addEventListener('click', (e) => {
    if (!menu.contains(e.target)){
        menu.classList.toggle('active')
    }
})

// Close menu by clicking outside
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggler.contains(e.target)){
        menu.classList.remove('active')
    }
})

// Generate footer copyright year
const year = document.querySelector('#year').innerText = new Date().getFullYear()
