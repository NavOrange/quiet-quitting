import { getMaxCountWord } from './get-max-count-word'

describe('get max count word', () => {
  const str = 'asdfssaaasasasasaarwerdfsafasfs'
  test(str, () => {
    expect(getMaxCountWord(str)).toEqual({
      max: 11,
      word: 'a'
    })
  })
})
