function addNumbers(numbers) {
    let add = 0
    for (let i = 0; i < numbers.length; i++) {
        add += numbers[i]
    }
    console.log("My add is:", add)
}

addNumbers([1, 2, 3, 4])
