const Numeral = require('numeral');

Numeral.defaultFormat('0,0.00')

const isNumber = (value = 0) => {
    const numValue = Numeral(value).value()
    return  {
        greaterThan: (comparator) => {
            const numComparator = Numeral(comparator).value()
            return numValue > numComparator
        },
        lessThanEqual: (comparator) => {
            const numComparator = Numeral(comparator).value()
            return numValue <= numComparator
        }
    }
}

const sum = (value1 = 0, value2 = 0) => {
    const numValue1 = Numeral(value1).value()
    const numValue2 = Numeral(value2).value()
    const add = Numeral(numValue1).add(numValue2).value()
    return Numeral(add).format()
  }

const subtract = (subtrahend = 0, value = 0) => {
    const numSubtrahend = Numeral(subtrahend).value()
    const numValue = Numeral(value).value()
    const subtract = Numeral(numSubtrahend).subtract(numValue).value()
    return Numeral(subtract).format()
}


const percentage = (value = 0, percent = 0) => {
    const numValue = Numeral(value).value()
    const ratio = Numeral(percent).divide(100).value()
    const percentage = Numeral(numValue).multiply(ratio).value()
    return Numeral(percentage).format()
  }

module.exports = {
    isNumber,
    sum,
    subtract,
    percentage,
}