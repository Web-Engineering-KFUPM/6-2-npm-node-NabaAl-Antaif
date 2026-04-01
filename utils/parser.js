import _ from "lodash"

export function parseNumbers(input) {
    return {
        numbers: _.map(input, (str) => Number(str))
    }
}

export function isValidOperation(operation) {
    return {
        isValid: _.includes(["add", "subtract", "multiply", "divide"], operation)
    }
}