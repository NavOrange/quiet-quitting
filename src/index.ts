import { templateEngine } from './template-engine'
// import { getArea } from './max-area-of-island'

console.log(templateEngine('hello ${ a }!', { a: 'world' }))

// const grid = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ]

// console.log(getArea(grid))
