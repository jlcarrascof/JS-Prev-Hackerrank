// Write a function that takes an array of strings and a callback. The function should count how many times each string appears and pass the result to the callback.

// Escribe una función que tome un array de strings y un callback. La función debe contar cuántas veces aparece cada string y pasar el resultado al callback.

function countStringsWithCallback(strings, callback) {
    const count = {}
    for (let i = 0; i < strings.length; i++) {
        const word = strings[i]
        count[word] = (count[word] || 0) + 1
    }
    callback(count)
}

countStringsWithCallback(
    ["apple", "pear", "apple", "grape", "pear", "apple"],
    (result) => console.log("Count words with callbacks:", result)
)
