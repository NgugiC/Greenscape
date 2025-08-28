// Projects Array
const projectsData = {
    carShades: [
        {
            portrait: './images/portrait/1.jpg',
            landscape: './images/landscape/1.jpg',
            description: 'Sleek double car shade installed in Karen &mdash; built for style and durability',
            id: 1
        },
        {
            portrait: './images/portrait/2.jpg',
            landscape: './images/landscape/2.jpg',
            description: "Modern canopy design with UV protection, perfect for Nairobi's climate",
            id: 2
        },
        {
            portrait: './images/portrait/3.jpg',
            landscape: './images/landscape/3.jpg',
            description: 'Custom carpot with powder-coated steel frame &mdash; elegance meets strength',
            id: 3
        },
        {
            portrait: './images/portrait/4.jpg',
            landscape: './images/landscape/4.jpg',
            description: 'Project Description...',
            id: 4
        },
    ],
    landscaping: [
        {
            portrait: './images/portrait/5.jpg',
            landscape: './images/landscape/5.jpg',
            description: 'Lush lawn installation with stone edging &mdash; a backyard transformed',
            id: 5
        },
        {
            portrait: './images/portrait/6.jpg',
            landscape: './images/landscape/6.jpg',
            description: 'Garden makeover with native plants and drip irrigation system',
            id: 6
        },
        {
            portrait: './images/portrait/7.jpg',
            landscape: './images/landscape/7.jpg',
            description: 'Pathway design with cabro-paving and flower beds &mdash; functional beauty',
            id: 7
        },
        {
            portrait: './images/portrait/8.jpg',
            landscape: './images/landscape/8.jpg',
            description: 'Project Description...',
            id: 8
        },
    ],
    privacyScreens: [
        {
            portrait: './images/portrait/9.jpg',
            landscape: './images/landscape/9.jpg',
            description: 'Elegant privacy screen with wood finish &mdash; perfect for garden boundaries',
            id: 9
        },
        {
            portrait: './images/portrait/10.jpg',
            landscape: './images/landscape/10.jpg',
            description: 'Powder-coated metal panels installed in Lavington for added security',
            id: 10
        },
        {
            portrait: './images/portrait/11.jpg',
            landscape: './images/landscape/11.jpg',
            description: 'Stylish screen design that blends privacy with modern aesthetics',
            id: 11
        },
        {
            portrait: './images/portrait/12.jpg',
            landscape: './images/landscape/12.jpg',
            description: 'Project Description...',
            id: 12
        },
    ]
}

// Detect Category from URL
function getCategoryFromURL() {
    const path = window.location.pathname.toLowerCase()

    if (path.includes('car-shades')) return 'carShades'
    if (path.includes('landscaping')) return 'landscaping'
    if (path.includes('privacy-screens')) return 'privacyScreens'

    return null
}

// Check Screen Orientation
const isPortraitScreen = window.innerHeight > window.innerWidth


// Function to Render Projects
function renderProjects() {
    const category = getCategoryFromURL()
    if (!category) return

    const projects = projectsData[category]
    const projectsDiv = document.querySelector('.projects')
    
    projectsDiv.innerHTML = ''
    
    projects.forEach(project => {
        const projectDiv = document.createElement('div')
        projectDiv.className = 'project'
        projectDiv.id = `project-${project.id}`

        // Load image based ond screen orientation
        const imgSrc =isPortraitScreen ? project.portrait : project.landscape

        projectDiv.innerHTML = `
        <img src='${imgSrc}' alt='project-${project.id}' loading='lazy'>
        <div class='description'><p>${project.description}</p></div>
        `
        projectsDiv.appendChild(projectDiv)
    })
}

// Initialize
window.addEventListener('DOMContentLoaded', renderProjects)

// Improve Performance During Continuous Resizing
let resizeTimeout
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(renderProjects, 300)
})


// Testimonials array
const testimonials = [
    // Car Shades
    {
        solution: 'car-shades',
        review: 'Greenscape Services installed our car shade in just two days. It looks amazing and keeps our car cool even in peak sun. Highly recommend!',
        client: 'James M., Westlands'
    },
    {
        solution: 'car-shades',
        review: "The canopy they built for our parking area is both stylish and sturdy. It's held up perfectly through heavy rains.",
        client: 'Beatrice N., Lavington'
    },

    // Privacy Screens
    {
        solution: 'privacy-screens',
        review: 'We wanted privacy without compromising style. Greenscape delivered exactly that. The screens are stunning and give us the peace we needed.',
        client: 'Amina K., Runda'
    },
    {
        solution: 'privacy-screens',
        review: 'The team installed elegant privacy panels around our patio. It feels like a private retreat now!',
        client: 'David & Sheila, Kileleshwa'
    },

    // Landscaping
    {
        solution: 'landscaping',
        review: "Our garden was a mess before. Now it's the highlight of our home. Greenscape's team was professional, creative, and fast.",
        client: 'Peter & Wanjiru, Kilimani'
    },
    {
        solution: 'landscaping',
        review: 'They transformed our barkyard into a beautiful green space with cabro paths and flower beds.',
        client: 'Kevin O., Syokimau'
    },
]

// Detect current page from URL
const route = window.location.pathname.toLowerCase()
let solution = ''

if (route.includes('car-shades')) solution = 'car-shades'
else if (route.includes('privacy-screens')) solution = 'privacy-screens'
else if (route.includes('landscaping')) solution = 'landscaping'

// Filter testimonials by solution
const filteredTestimonials = testimonials.filter(t => t.solution === solution)

// DOM Elements
const reviewEl = document.querySelector('#reviewText')
const clientEl = document.querySelector('#clientText')
const clientCursorEl = document.querySelector('.client-cursor')
let currentIndex = 0

// Display testimonial
function typeText (element, text, callback) {
    element.textContent = ''
    let i = 0
    const speed = 30 // typing speed in ms

    function type() {
        if ( i < text.length ) {
            element.textContent += text.charAt(i)
            i++
            setTimeout(type, speed)
        }
        else if ( callback ) {
            callback()
        }
    }

    type()
}

function showTestimonial(index) {
    const { review, client } = filteredTestimonials[index]

    // Clear content
    reviewEl.textContent = ''
    clientEl.textContent = ''
    clientCursorEl.style.display = 'none' // Hidden initially

    // Type review then client
    typeText(reviewEl, review, () => {
        clientCursorEl.style.display = 'inline-block' // Show cursor when typing starts
        typeText(clientEl, `— ${client}`, () => {
            // clientCursorEl.style.display = 'none' // Optional: Hide cursor when typing finishes
        })
    })

    // Trigger animation
    setTimeout(() => {
        reviewEl.style.animation = 'slideUp .6s ease forwards'
        clientEl.style.animation = 'slideUp .6s ease forwards'
    }, 50);
}

// Navigation
function prevTestimonial() {
    currentIndex = ( currentIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length
    showTestimonial( currentIndex )
}

function nextTestimonial() {
    currentIndex = ( currentIndex + 1) % filteredTestimonials.length
    showTestimonial( currentIndex )
}

// Swipe support
// let startX = 0
// const testimonialEl = document.querySelector('#testimonial')

// testimonialEl.addEventListener("touchstart", (e) => {
//     startX = e.touches[0].clientX
// })

// testimonialEl.addEventListener("touchend", (e) => {
//     const endX = e.changedTouches[0].clientX
//     if ( startX - endX > 50) nextTestimonial() // Swipe left
//     else if ( endX - startX > 50) prevTestimonial() // Swipe right
// })

// Button listeners
document.querySelector('#prevBtn').addEventListener('click', prevTestimonial)
document.querySelector('#nextBtn').addEventListener('click', nextTestimonial)

// Auto-rotate
setInterval( nextTestimonial, 6000)

// Initial load
if ( filteredTestimonials.length > 0) {
    showTestimonial( currentIndex )
}
else {
    reviewEl.textContent = 'No testimonials available for this service yet.'
    clientEl.textContent = ''
}


