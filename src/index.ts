import { templateEngine } from './template-engine.js'
// import { getArea } from './max-area-of-island.js'

console.log(templateEngine('hello ${ a }!', { a: 'world' }))

// const grid = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ]

// console.log(getArea(grid))
