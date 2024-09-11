import type { IntRange } from 'type-fest'
import { Eq } from 'fp-ts/Eq'

type ZeroToNinetyNine = IntRange<0,100>

export class Stocks {
  readonly value: ZeroToNinetyNine

  constructor(value: ZeroToNinetyNine) {this.value = value}
}

export const eqStocks: Eq<Stocks> = {
  equals:(x, y) => x.value === y.value
}