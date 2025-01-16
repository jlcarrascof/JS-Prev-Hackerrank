function greetWithCallback(name, callback) {
    const message = `Hello, ${name}!`
    callback(message)
}

greetWithCallback("John", (message) => console.log(message))
