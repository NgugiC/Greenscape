document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact-form');
    const submitBtn = form.querySelector('button[type="submit"]')

    form.addEventListener('submit', async function (e) {
        e.preventDefault(); 

        // Show Loading State
        const originalText = submitBtn.value;
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

            const response = await fetch("https://api.web3forms.com/submit", {
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
            submitBtn.disabled = false
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
