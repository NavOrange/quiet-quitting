import { templateEngine } from './template-engine.js'

describe('template engine', () => {
  test('基础替换', () => {
    expect(
      templateEngine('hello ${name}!', {
        name: 'Coda'
      })
    ).toMatch('hello Coda!')
  })

  test('插值包含空格', () => {
    expect(
      templateEngine('hello ${ name }!', {
        name: 'Coda'
      })
    ).toMatch('hello Coda!')
  })

  test('嵌套访问', () => {
    expect(
      templateEngine('hello ${ profile.name }!', {
        profile: {
          name: 'Coda'
        }
      })
    ).toMatch('hello Coda!')
  })

  test('多个值', () => {
    expect(
      templateEngine(
        'hello ${ profile.name }, update to: ${ profile.update }',
        {
          profile: {
            name: 'Coda',
            update: '2022/10/24'
          }
        }
      )
    ).toMatch('hello Coda, update to: 2022/10/24')
  })
})
