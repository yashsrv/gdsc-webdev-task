import { setCookie } from './cookie.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        // Getting input values
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        // Form validation
        if (username === "admin" && password === "admin123") {
            setCookie()
            window.location.href = "dashboard"
        } else {
            alert('Invalid username or password')
        }
    })
})