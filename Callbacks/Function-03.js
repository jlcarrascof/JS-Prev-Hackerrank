function countStrings(strings) {
    const myCount = {}
    for (let i = 0; i < strings.length; i++) {
        const word = strings[i]
        myCount[word] = (myCount[word] || 0) + 1
    }
    console.log("Count of words:", myCount)
}

countStrings(["apple", "pear", "apple", "grape", "pear", "apple"])
