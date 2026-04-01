export function add(numbers) {
    return {
        add: _.sum(numbers)
    }
}
export function subtract(numbers) {
    return {
        subtract: numbers.reduce((result, num) => result - num)
    }
}

export function multiply(numbers) {
    return {
        multiply: numbers.reduce((result, num) => result * num, 1)
    }
}

export function divide(numbers) {
    return {
        divide: numbers.reduce((result, num) => result / num)
    }
}