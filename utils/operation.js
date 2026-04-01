export function add(numbers) {
    return numbers.reduce((result, num) => result + num, 0)
}

export function subtract(numbers) {
    return numbers.reduce((result, num) => result - num, 0)
}

export function multiply(numbers) {
    return numbers.reduce((result, num) => result * num, 1)
}

export function divide(numbers) {
    return numbers.reduce((result, num) => result / num, 1)
}