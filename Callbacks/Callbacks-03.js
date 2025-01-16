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
