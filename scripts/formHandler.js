document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact-form');
    const submitBtn = form.querySelector('button[type="submit"]')

    const errorMsg = document.querySelector('#error')

    form.addEventListener('submit', async function (e) {
        e.preventDefault(); //Block Default Web3Forms Redirect

        // Show Loading State
        const originalText = submitBtn.value;
        submitBtn.textContent = 'Sending...'
        submitBtn.disabled = true
        submitBtn.classList.add('loading')
        
        try {
            console.log("Form action:", form.action)
            console.log("Form method:", form.method)
            
            const formData = new FormData(form)
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" }
            })

            const result = await response.json()

            if (response.ok) {
                window.location.href = 'success.html'
            }
            else {
                window.location.href = 'error.html'
                console.error('Server responded: ',response.status, response.statusText)
                console.error('Web3Forms error: ', result.message)
                errorMsg.innerHTML = response.status
            }
        }
        catch (error) {
            window.location.href = 'network-error.html'
            console.error('Fetch failed: ',error)
        }
        finally {
            // Restore Button State in case of navigation cancel/SPA usage
            submitBtn.textContent = originalText
            submitBtn.disabled = false
            submitBtn.classList.remove('loading')
        }
    })
})