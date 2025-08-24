document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact-form');
    const submitBtn = form.querySelector('button[type="submit"]')

    // Grab input fields for validation
    const nameInput = form.querySelector('#name')
    const emailInput = form.querySelector('#email')
    const phoneInput = form.querySelector('#phone')
    const sizeInput = form.querySelector('#size')
    const messageInput = form.querySelector('#message')

    // Track fields that have been interacted with
    const touchedFields = new Set()

    // Handle error
    function showError (input, message) {
        input.classList.add('invalid')
        input.classList.remove('valid')

        let error = input.parentElement.querySelector('.error-message')
        if (!error) {
            error = document.createElement('small')
            error.className = 'error-message'
            error.style.color = 'red'
            input.parentElement.appendChild(error)
        }
        error.textContent = message
    }

    // Handle success
    function showSuccess (input) {
        input.classList.add('valid')
        input.classList.remove('invalid')

        const error = input.parentElement.querySelector('.error-message')
        if (error) error.textContent= ''
    }

    // Validate name
    function validateName ( show = true ) {
        const value = nameInput.value.trim()
        if (value === '') {
            if (show) showError (nameInput, 'Name is required.')
            return false
        }
        else if (!/^[a-zA-Z\s]+$/.test(value)) {
            if (show) showError (nameInput, 'Only letters and spaces allowed.')
            return false
        }
        if (show) showSuccess (nameInput)
        return true
    }

    // Validate email
    function validateEmail ( show = true ) {
        const value = emailInput.value.trim()
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (value === '') {
            if (show) showError (emailInput, 'Email is required.')
                return false
        }
        else if (!emailPattern.test(value)) {
            if (show) showError (emailInput, 'Enter a valid email.')
            return false
        }
        if (show) showSuccess (emailInput)
        return true
    }

    // Validate phone
    function validatePhone ( show = true ) {
        const value = phoneInput.value.trim()
        const regex = /^\+?\d[\d\s-]{7,20}\d$/
        if (value === '') {
            if (show) showError (phoneInput, 'Phone number is required.')
                return false
        }
        else if (!regex.test(value)) {
            if (show) showError (phoneInput, 'Enter a valid phone number.')
            return false
        }
        if (show) showSuccess (phoneInput)
        return true
    }

    // Validate size
    function validateSize ( show = true ) {
        const value = sizeInput.value.trim()
        if (value === '' || parseInt(value) < 1) {
            if (show) showError (sizeInput, 'Must be at least 1 vehicle.')
            return false
        }
        if (show) showSuccess (sizeInput)
        return true
    }

    // Validate message
    function validateMessage ( show = true ) {
        const value = messageInput.value.trim()
        if(value === '') {
            if (show) showError (messageInput, 'Message is required.')
                return false
        }
        else if (value.length < 10) {
            if (show) showError (messageInput, 'Message must be at least 10 characters.')
            return false
        }
        if (show) showSuccess (messageInput)
        return true
    }

    // Aggregate validity
    function checkFormValidity () {
        const validations = [
            { input: nameInput, fn: validateName },        
            { input: emailInput, fn: validateEmail },
            {input: phoneInput, fn: validatePhone },
            {input: sizeInput, fn: validateSize },
            {input: messageInput, fn: validateMessage }
        ]

        let valid = true

        validations.forEach(({input, fn}) => {
            if (touchedFields.has(input)) {
                if (!fn(true)) valid = false
            }
            else {
                // Run silently without showing errors
                if(!fn(false)) valid = false
            }
        })

        submitBtn.disabled= !valid
        return valid
    }

    // Event Listeners
    [nameInput, emailInput, phoneInput, sizeInput,messageInput].forEach( input => {
        input.addEventListener('blur', () => {
            touchedFields.add(input)
            checkFormValidity()
        })
        input.addEventListener('input', () => {
            if (touchedFields.has(input)) checkFormValidity()
        })
    })

        // Submit Handler
    form.addEventListener('submit', async function (e) {
        if (!checkFormValidity()) {
            e.preventDefault()

            // Focus first invalid field
            const firstInvalid = form.querySelector('.invalid')
            if (firstInvalid) firstInvalid.focus()
                return
        }

        e.preventDefault();

        const validity = checkFormValidity() 

        // Grab the name entered
        const userName = nameInput.value

        // Update the Form Subject Field Dynamically
        document.querySelector('#subject').value = `Quote Request from ${userName}`

        // Show Loading State
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...'
        submitBtn.disabled = true
        submitBtn.classList.add('loading')
        
        // Capture Form Submission Time
        const now = new Date() // Current Date and Time

        // Format: YYYY-MM-DD HH:MM:SS
        const formatted = now.getFullYear() + "-" +
        String(now.getMonth() + 1).padStart(2, "0") + "-" +
        String(now.getDate()).padStart(2, "0") + " " +
        String(now.getHours()).padStart(2, "0") + ":" +
        String(now.getMinutes()).padStart(2, "0") + ":" +
        String(now.getSeconds()).padStart(2, "0")

        // Timezone Offset
        const offset = -now.getTimezoneOffset()
        const sign = offset >= 0 ? "+" :"-"
        const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0")
        const minutes = String(Math.abs(offset) % 60).padStart(2, "0")
        const timezone = `GMT${sign}${hours}:${minutes}`

        document.querySelector('#submission-time').value = `${formatted} ${timezone}`
        
        try {
            const formData = new FormData(form)

            // Debug
            // for (let[key, value] of formData.entries()) {
            //     console.log(key, ":", value)
            // }

            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" }
            })

            const result = await response.json()

            if (response.ok) {
                form.reset()
                window.location.href = 'success.html'
            }
            else {
                window.location.href = 'error.html'                
            }
        }
        catch (error) {
            window.location.href = 'network-error.html'
        }
        finally {
            // Restore Button State in case of navigation cancel/SPA usage
            submitBtn.textContent = originalText
            submitBtn.classList.remove('loading')
        }
    })
})

// Whatsapp Redirect
document.querySelector('#whatsapp-link').addEventListener('click', e => {
    e.preventDefault()
    window.location.href= "https://api.whatsapp.com/send?phone=254715538159"
})

// Phone Number Injector
document.querySelector('#phone-number').addEventListener('click', e => {
    e.preventDefault()
    window.location.href= "tel:+254715538159"
})
