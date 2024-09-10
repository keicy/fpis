import * as E from 'fp-ts/Either'
import { Eq } from 'fp-ts/Eq'

export class Stocks {
  static create(value: number): E.Either<string, Stocks> {
    if(0 <= value && value <= 99) {
      return E.right(new Stocks(value))
    } else{
      return E.left("Stock value must be between 0 and 99.")
    }
  }

  readonly value: number

  private constructor(value: number) {this.value = value}
}

export const eqStocks: Eq<Stocks> = {
  equals:(x, y) => x.value === y.value
}