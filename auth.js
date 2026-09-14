function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Authentication successful";
    } else {
        return "Authentication failed";
    }
}

console.log(login("admin", "1234"));