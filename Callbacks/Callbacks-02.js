function addNumbersWithCallback(numbers, callback) {
    let add = 0
    for (let i = 0; i < numbers.length; i++) {
        add += numbers[i]
    }
    callback(add)
}

addNumbersWithCallback([1, 2, 3, 4], (result) => console.log("My add is:", result))
