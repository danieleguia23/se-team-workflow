function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login successful";
    } else {
        return "Invalid username or password";
    }
}

console.log(login("admin", "1234"));