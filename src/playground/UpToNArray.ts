import type { EmptyObject, IntRange } from 'type-fest'

export type UpToNArray<T, Max extends number, L extends T[] = []> =
  L["length"] extends Max
  ? L
  : L | UpToNArray<T, Max, [T, ...L]>
;

type Elm = {}
type ZeroToNine = IntRange<0,10>
type UpTo9Elms = UpToNArray<Elm, 9>

function arangeCoins(size: ZeroToNine): UpTo9Elms {

  // not infered...
  // let l: UpTo9Elms
  // for(let i =0; i < size; i++) {
  //   l = [{}, ...l]
  // }

  // infered, but static...
  // const x: UpTo9Elms = [{},{},{},{},{},{},{},{},{},]
  // const y: UpTo9Elms = [{},{},{},{},{},{},{},{},{},{}]
  // type not matched...
  // const m = [{},{},{},]
  // const n: UpTo9Elms = m

  // not infered too... it seems useless... contains runtime error...
  const l = new Array(size).fill({}) as UpTo9Elms
  // l.push({}) // never...
  return l
}

type T = [] | [number] | [number,number]
type TT = UpToNArray<number, 2>

const l:T = [1,1,]
l.push(1) // not inferd...

const ll:TT = [1,1]
ll.push(1) // not inferd...

const lll: T = []
// lll.push(1) // never...
