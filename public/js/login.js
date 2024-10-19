function login() {
    // getting input values
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    // form validation
    if (username === "admin" && password === "admin123") {
        // redirecting to dashboard
        window.location.href = "dashboard"
    } else {
        alert('Invalid username or password')
    }
}