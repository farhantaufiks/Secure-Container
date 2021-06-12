function puzzle(input) {
    let splittedInput = input.split("-")
    let min = Number(splittedInput[0])
    let max = Number(splittedInput[1])
    let count = 0
    for (let i = min; i <= max; i++) {
        let string = i.toString()
        let array = string.split("")
        let pass = true
        let double = false
        for (let j = 0; j < array.length; j++) {
            if (j < array.length) {
                if (Number(array[j]) > Number(array[j + 1])) {
                    pass = false
                    array[j + 1] = array[j] - 1
                    i = Number(array.join(""))
                    break
                }
                if (Number(array[j]) == Number(array[j + 1])) {
                    double = true
                }
            }
        }
        if (pass && double) {
            count++
        }
    }
    return count
}

console.log(puzzle("367479-893698"))