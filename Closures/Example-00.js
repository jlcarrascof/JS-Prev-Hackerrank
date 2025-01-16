function task(callback) {
    console.log("Making something important...")
    callback()
}

task(() => console.log("¡Callback executed!"))
