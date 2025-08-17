document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitBtn = document.querySelector('button[type="submit"]')

    form.addEventListener('submit', async function (e) {
        e.preventDefault(); //Block Default Web3Forms Redirect

        // Show Loading State
        const originalText = submitBtn.value;
        submitBtn.textContent = 'Sending...'
        submitBtn.disabled = true
        submitBtn.classList.add('loading')

        const formData = new FormData(form);

        try {
            console.log("Form action:", form.action)
            console.log("Form method:", form.method)

            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { Accept: "application/json" }
            })

            if (response.ok) {
                window.location.href = 'success.html'
            }
            else {
                window.location.href = 'error.html'
                console.error('Server responded: ',response.status, response.statusText)
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