import {Stocks, eqStocks} from "./Stocks"

describe("Stocks",() => {
  test("Stocks has equivalency.", () => {
    const s1 = new Stocks(0)
    const s2 = new Stocks(0)

    expect(eqStocks.equals(s1, s2)).toBeTruthy()
  })
})