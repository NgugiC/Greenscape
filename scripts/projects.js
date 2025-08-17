// Projects Array
const projects = [
    {
        portrait: './images/portrait/1.jpg',
        landscape: './images/landscape/1.jpg',
        description: 'Project Description...',
        id: 1
    },
    {
        portrait: './images/portrait/2.jpg',
        landscape: './images/landscape/2.jpg',
        description: 'Project Description...',
        id: 2
    },
    {
        portrait: './images/portrait/3.jpg',
        landscape: './images/landscape/3.jpg',
        description: 'Project Description...',
        id: 3
    },
    {
        portrait: './images/portrait/4.jpg',
        landscape: './images/landscape/4.jpg',
        description: 'Project Description...',
        id: 4
    },
    {
        portrait: './images/portrait/5.jpg',
        landscape: './images/landscape/5.jpg',
        description: 'Project Description...',
        id: 5
    },
    {
        portrait: './images/portrait/6.jpg',
        landscape: './images/landscape/6.jpg',
        description: 'Project Description...',
        id: 6
    },
    {
        portrait: './images/portrait/7.jpg',
        landscape: './images/landscape/7.jpg',
        description: 'Project Description...',
        id: 7
    },
    {
        portrait: './images/portrait/8.jpg',
        landscape: './images/landscape/8.jpg',
        description: 'Project Description...',
        id: 8
    },
    {
        portrait: './images/portrait/9.jpg',
        landscape: './images/landscape/9.jpg',
        description: 'Project Description...',
        id: 9
    },
    {
        portrait: './images/portrait/10.jpg',
        landscape: './images/landscape/10.jpg',
        description: 'Project Description...',
        id: 10
    },
    {
        portrait: './images/portrait/11.jpg',
        landscape: './images/landscape/11.jpg',
        description: 'Project Description...',
        id: 11
    },
    {
        portrait: './images/portrait/12.jpg',
        landscape: './images/landscape/12.jpg',
        description: 'Project Description...',
        id: 12
    },
]

// Check Screen Orientation
const isPortraitScreen = window.innerHeight > window.innerWidth


// Function to Render Projects
function renderProjects() {
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
renderProjects()

window.addEventListener('DOMContentLoaded', renderProjects)

// Improve Performance During Continuous Resizing
let resizeTimeout
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(renderProjects, 300)
})
