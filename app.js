// One euro is:
const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euroAmount) {
    const dollarAmount = euroAmount * oneEuroIs.USD
    return dollarAmount;

}

function fromDollarToYen(dollarAmount) {
    const yuroAmount = dollarAmount * (1/oneEuroIs.USD) * oneEuroIs.JPY
    return yuroAmount;

}

function fromYenToPound(yenAmount) {
    const poundAmount = yenAmount * (1/oneEuroIs.JPY) * oneEuroIs.GBP
    return poundAmount
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };


0.8694444445