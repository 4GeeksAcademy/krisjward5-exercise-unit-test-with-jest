const { fromEuroToDollar } = require("./app.js");

test("3 euro should be 3.5 dollars", () => {
    
    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(dollars).toBe(expected)
})

const { fromDollarToYen } = require("./app.js");

test("1 dollars should be 146.2616822504 yen", () => {

    const yen = fromDollarToYen(1);

    const expected = 1*(1/1.07)*156.5;

    expect(yen).toBe(expected)

})

const { fromYenToPound } = require("./app.js");

test("156.5 yen should be 0.8694444445 pounds", () => {
    
    const pound = fromYenToPound(156.5);
    const expected = 156.5*(1/156.5)*.87;

    expect(pound).toBe(expected)
})