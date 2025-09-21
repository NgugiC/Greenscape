// Projects Array
const projectsData = {
    carShades: [
        {
            portrait: './images/portrait/CS-1.jpg',
            landscape: './images/landscape/CS-1.jpg',
            description: 'Sleek double car shade installed in Karen &mdash; built for style and durability',
            id: 1
        },
        {
            portrait: './images/portrait/CS-2.jpg',
            landscape: './images/landscape/CS-2.jpg',
            description: "Modern canopy design with UV protection, perfect for Nairobi's climate",
            id: 2
        },
        {
            portrait: './images/portrait/CS-3.jpg',
            landscape: './images/landscape/CS-3.jpg',
            description: 'Custom carpot with powder-coated steel frame &mdash; elegance meets strength',
            id: 3
        },
        {
            portrait: './images/portrait/CS-4.jpg',
            landscape: './images/landscape/CS-4.jpg',
            description: 'We supply and install for hassle-free service',
            id: 4
        },
        {
            portrait: './images/portrait/CS-5.jpg',
            landscape: './images/landscape/CS-5.jpg',
            description: 'Maximum coverage, minimal space',
            id: 5
        },
        {
            portrait: './images/portrait/CS-6.jpg',
            landscape: './images/landscape/CS-6.jpg',
            description: 'Premium protection at the right price',
            id: 6
        },
        {
            portrait: './images/portrait/CS-7.jpg',
            landscape: './images/landscape/CS-7.jpg',
            description: 'No more hot seats or boiling dashboards',
            id: 7
        },
        {
            portrait: './images/portrait/CS-8.jpg',
            landscape: './images/landscape/CS-8.jpg',
            description: 'Strong steel frame + UV-treated fabric',
            id: 8
        },
        {
            portrait: './images/portrait/CS-9.jpg',
            landscape: './images/landscape/CS-9.jpg',
            description: 'Car shades customized to your space',
            id: 9
        },
        {
            portrait: './images/portrait/CS-10.jpg',
            landscape: './images/landscape/CS-10.jpg',
            description: 'Protection that adds elegance to your outdoors',
            id: 10
        },
        {
            portrait: './images/portrait/CS-11.jpg',
            landscape: './images/landscape/CS-11.jpg',
            description: 'Stylish shade that keeps your car cool and safe',
            id: 11
        },
        {
            portrait: './images/portrait/CS-12.jpg',
            landscape: './images/landscape/CS-12.jpg',
            description: 'Reliable cover against sun, rain & dust',
            id: 12
        },
    ],
    cabros: [
        {
            portrait: './images/portrait/cabros.jpg',
            landscape: './images/landscape/cabros.jpg',
            description: 'Interlocking cabros in a herringbone layout &mdash; timeless strength with geometric charm',
            id: 5
        },
        {
            portrait: './images/portrait/cabros1.jpg',
            landscape: './images/landscape/cabros1.jpg',
            description: 'Heavy-duty cabros laid for high-traffic zones &mdash; built to endure, styled to impress',
            id: 6
        },
        {
            portrait: './images/portrait/cabros2.jpg',
            landscape: './images/landscape/cabros2.jpg',
            description: 'Courtyard cabros with custom inlay &mdash; where artistry meets outdoor utility',
            id: 7
        },
        {
            portrait: './images/portrait/cabros3.jpg',
            landscape: './images/landscape/cabros3.jpg',
            description: 'Cabro path framed by lush greenery &mdash; a walkable blend of nature and structure',
            id: 8
        },
        {
            portrait: './images/portrait/cabros4.jpg',
            landscape: './images/landscape/cabros4.jpg',
            description: 'Pathway design with cabro-paving and flower beds &mdash; functional beauty',
            id: 9
        },
    ],
    landscaping: [
        {
            portrait: './images/portrait/landscaping.jpg',
            landscape: './images/landscape/landscaping.jpg',
            description: 'Lush lawn installation with stone edging &mdash; a backyard transformed',
            id: 5
        },
        {
            portrait: './images/portrait/landscaping1.jpg',
            landscape: './images/landscape/landscaping1.jpg',
            description: 'Garden makeover with native plants and drip irrigation system',
            id: 6
        },
        {
            portrait: './images/portrait/landscaping2.jpg',
            landscape: './images/landscape/landscaping2.jpg',
            description: 'Pathway design with cabro-paving and flower beds &mdash; functional beauty',
            id: 7
        },
        {
            portrait: './images/portrait/redsoil.jpg',
            landscape: './images/landscape/redsoil.jpg',
            description: 'Pathway design with cabro-paving and flower beds &mdash; functional beauty',
            id: 8
        },
        {
            portrait: './images/portrait/plants.jpg',
            landscape: './images/landscape/plants.jpg',
            description: 'Pathway design with cabro-paving and flower beds &mdash; functional beauty',
            id: 9
        },
    ],
    privacyScreens: [
        {
            portrait: './images/portrait/CS-9.jpg',
            landscape: './images/landscape/CS-9.jpg',
            description: 'Elegant privacy screen with wood finish &mdash; perfect for garden boundaries',
            id: 9
        },
        {
            portrait: './images/portrait/CS-10.jpg',
            landscape: './images/landscape/CS-10.jpg',
            description: 'Powder-coated metal panels installed in Lavington for added security',
            id: 10
        },
        {
            portrait: './images/portrait/CS-11.jpg',
            landscape: './images/landscape/CS-11.jpg',
            description: 'Stylish screen design that blends privacy with modern aesthetics',
            id: 11
        },
        {
            portrait: './images/portrait/CS-12.jpg',
            landscape: './images/landscape/CS-12.jpg',
            description: 'Project Description...',
            id: 12
        },
        {
            portrait: './images/portrait/CS-9.jpg',
            landscape: './images/landscape/CS-9.jpg',
            description: 'Elegant privacy screen with wood finish &mdash; perfect for garden boundaries',
            id: 9
        },
        {
            portrait: './images/portrait/CS-10.jpg',
            landscape: './images/landscape/CS-10.jpg',
            description: 'Powder-coated metal panels installed in Lavington for added security',
            id: 10
        },
        {
            portrait: './images/portrait/CS-11.jpg',
            landscape: './images/landscape/CS-11.jpg',
            description: 'Stylish screen design that blends privacy with modern aesthetics',
            id: 11
        },
        {
            portrait: './images/portrait/CS-12.jpg',
            landscape: './images/landscape/CS-12.jpg',
            description: 'Project Description...',
            id: 12
        },
    ],
    gutters: [
        {
            portrait: './images/portrait/gutters.jpg',
            landscape: './images/landscape/gutters.jpg',
            description: 'Hands-on craftsmanship, ladder-high &mdash; where precision meets protection, one bucket at a time. ',
            id: 9 
        }
    ]
}

// Detect Category from URL for image rendering
function getCategoryFromURL() {
    const path = window.location.pathname.toLowerCase()

    if (path.includes('car-shades')) return 'carShades'
    if (path.includes('cabros')) return 'cabros'
    if (path.includes('gutters')) return 'gutters'
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
        <div class='img-container'><img src='${imgSrc}' alt='project-${project.id}' loading='lazy'></div>
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
        review: 'They transformed our backyard into a beautiful green space with cabro paths and flower beds.',
        client: 'Kevin O., Syokimau'
    },

    // Cabros
    {
        solution: 'cabros',
        review: 'Our driveway used to flood and crack. Greenscapes laid cabros with proper drainage and a beautiful finish. It\'s functional and stunning.',
        client: 'Nancy W., South C'
    },

    // Gutters
    {
        solution: 'gutters',
        review: 'Before Greenscape installed gutters, our flowerbeds kept washing away. Now the water flows exactly where it should — and the house looks sharper too.',
        client: 'Brian M., Lang\'ata'
    }
]

// Detect current page from URL
const route = window.location.pathname.toLowerCase()
let solution = ''

if (route.includes('car-shades')) solution = 'car-shades'
else if (route.includes('privacy-screens')) solution = 'privacy-screens'
else if (route.includes('landscaping')) solution = 'landscaping'
else if (route.includes('cabros')) solution = 'cabros'
else if (route.includes('gutters')) solution = 'gutters'

// Initialize masonry
// window.addEventListener('load', () => {
//     const grid = document.querySelector('.projects')
//     new Masonry(grid,{
//         itemSelector: '.project',
//         columnWidth: '232',
//         gutter: 20,
//         fitWidth: true
//     })
// })

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
document.querySelector('.nav-buttons').style.display = 'none' // Hide buttons

// Autoplay
setInterval( nextTestimonial, 10000)

// Initial load
if ( filteredTestimonials.length > 0) {
    showTestimonial( currentIndex )
}
else {
    reviewEl.textContent = 'No testimonials available for this service yet.'
    clientEl.textContent = ''
}


