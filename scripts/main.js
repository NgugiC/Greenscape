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

// FAQ Accordion
const accordion = document.querySelectorAll('.faq-item')

accordion.forEach(item => {
    const question = item.querySelector('.question')

    question.addEventListener('click', () => {
        // Close all other items
        accordion.forEach(i => {
            if (i !== item) {
                i.classList.remove('active')
            }
        })

        // Toggle current item
        const isActive = item.classList.contains('active')
        item.classList.toggle('active')

    })
})

// Generate footer copyright year
const year = document.querySelector('#year').innerText = new Date().getFullYear()
