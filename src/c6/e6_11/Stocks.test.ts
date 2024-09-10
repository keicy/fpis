import { getOrElseW, match, Do, tap, map, apS, right  } from "fp-ts/lib/Either"
import { pipe } from "fp-ts/lib/function"

import {Stocks, eqStocks} from "./Stocks"

describe("Stocks",() => {
  test("Stocks must be kept between 0 to 99.", () => {
    const s1 = Stocks.create(-1)
    const s2 = Stocks.create(0)
    const s3 = Stocks.create(99)
    const s4 = Stocks.create(100)
  
    match(
      _ => {},
      r => fail()
    )(s1)
    expect(getOrElseW(() => fail())(s2).value).toBe(0)
    expect(getOrElseW(() => fail())(s3).value).toBe(99)
    match(
      _ => {},
      r => fail()
    )(s4) 
  })

  test("Stocks has equivalency.", () => {
    const s1 = Stocks.create(0)
    const s2 = Stocks.create(0)

    pipe(
      Do,
      apS("a", s1),
      apS("b", s2),
      tap(({a, b}) => right(expect(eqStocks.equals(a, b)).toBeTruthy())),
    )
  })
})
