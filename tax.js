const { isNumber, sum, subtract, percentage } = require('./utility');

const calculateTax = (netIncome = 0) => {
    let taxPrice = '0.00'
    if (isNumber(netIncome).lessThanEqual('150,000')) {
        taxPrice = '0.00'
    }
    else if (isNumber(netIncome).lessThanEqual('300,000')) {
        const taxPercent = '5'
        const taxAccumulate = '0'
        const deltaIncome = subtract(netIncome, '150,000')
        const tax = percentage(deltaIncome, taxPercent)
        taxPrice = sum(tax, taxAccumulate)
    }
    else if (isNumber(netIncome).lessThanEqual('500,000')) {
        const taxPercent = '10'
        const taxAccumulate = '7,500'
        const deltaIncome = subtract(netIncome, '300,000')
        const tax = percentage(deltaIncome, taxPercent)
        taxPrice = sum(tax, taxAccumulate)
    }
    else if (isNumber(netIncome).lessThanEqual('750,000')) {
        const taxPercent = '15'
        const taxAccumulate = '27,500'
        const deltaIncome = subtract(netIncome, '500,000')
        const tax = percentage(deltaIncome, taxPercent)
        taxPrice = sum(tax, taxAccumulate)
    }
    else if (isNumber(netIncome).lessThanEqual('1,000,000')) {
        const taxPercent = '20'
        const taxAccumulate = '65,000'
        const deltaIncome = subtract(netIncome, '750,000')
        const tax = percentage(deltaIncome, taxPercent)
        taxPrice = sum(tax, taxAccumulate)
    }
    else if (isNumber(netIncome).lessThanEqual('2,000,000')) {
        const taxPercent = '25'
        const taxAccumulate = '115,000'
        const deltaIncome = subtract(netIncome, '1,000,000')
        const tax = percentage(deltaIncome, taxPercent)
        taxPrice = sum(tax, taxAccumulate)
    }
    else if (isNumber(netIncome).lessThanEqual('5,000,000')) {
        const taxPercent = '30'
        const taxAccumulate = '365,000'
        const deltaIncome = subtract(netIncome, '2,000,000')
        const tax = percentage(deltaIncome, taxPercent)
        taxPrice = sum(tax, taxAccumulate)
    }
    else {
        const taxPercent = '35'
        const taxAccumulate = '1,265,000'
        const deltaIncome = subtract(netIncome, '5,000,000')
        const tax = percentage(deltaIncome, taxPercent)
        taxPrice = sum(tax, taxAccumulate)
    }
    return taxPrice
}

module.exports = {
    calculateTax
}