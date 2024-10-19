function setCookie() {
    const name = encodeURIComponent(document.getElementById("username").value)
    const value = encodeURIComponent(document.getElementById("password").value)

    document.cookie = `${name}=${value}`
}

const {pathname} = window.location
if (pathname == "/dashboard"){
    if (!document.cookie){
        alert("Please login first")
        window.location.href = "login"
    }
} else if (pathname == "/login" || pathname == "/"){
    if (document.cookie){
        window.location.href = "dashboard"
    }
}
