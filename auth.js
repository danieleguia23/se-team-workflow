function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Authentication successful";
    } else {
        return "Access denied";
    }
}

console.log(login("admin", "1234"));