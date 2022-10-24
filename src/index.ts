import { templateEngine } from './template-engine.js'

console.log(templateEngine('hello ${ a }!', { a: 'world' }))
