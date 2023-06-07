const findLongestChain = require('./last_letter_first_letter')
const assert = require('assert')

describe('Tests', function () {
  it('findLongestChain should be a function.', function () {
    assert(typeof findLongestChain === 'function')
  })
  it('findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"]) should return an array.', function () {
    assert(
      Array.isArray(
        findLongestChain([
          'certain',
          'each',
          'game',
          'involves',
          'starting',
          'with',
          'word'
        ])
      )
    )
  })
  it('findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"]) should return ["involves", "starting", "game", "each"].', function () {
    assert.deepStrictEqual(
      findLongestChain([
        'certain',
        'each',
        'game',
        'involves',
        'starting',
        'with',
        'word'
      ]),
      ['involves', 'starting', 'game', 'each']
    )
  })
  it('findLongestChain(["audino", "bagon", "kangaskhan", "banette", "bidoof", "braviary", "exeggcute", "yamask"]) should return ["braviary", "yamask", "kangaskhan"]', function () {
    assert.deepStrictEqual(
      findLongestChain([
        'audino',
        'bagon',
        'kangaskhan',
        'banette',
        'bidoof',
        'braviary',
        'exeggcute',
        'yamask'
      ]),
      ['braviary', 'yamask', 'kangaskhan']
    )
  })
  it('findLongestChain(["harp", "poliwrath", "poochyena", "porygon2", "porygonz", "archana"]) should return ["poliwrath", "harp", "poochyena", "archana"].', function () {
    assert.deepEqual(
      findLongestChain([
        'harp',
        'poliwrath',
        'poochyena',
        'porygon2',
        'porygonz',
        'archana'
      ]),
      ['poliwrath', 'harp', 'poochyena', 'archana']
    )
  })
  it('findLongestChain(["scolipede", "elephant", "zeaking", "sealeo", "silcoon", "tigers"]) should return ["scolipede", "elephant", "tigers", "sealeo"].', function () {
    assert.deepStrictEqual(
      findLongestChain([
        'scolipede',
        'elephant',
        'zeaking',
        'sealeo',
        'silcoon',
        'tigers'
      ]),
      ['scolipede', 'elephant', 'tigers', 'sealeo']
    )
  })
  it('findLongestChain(["loudred", "lumineon", "lunatone", "machamp", "magnezone", "nosepass", "petilil", "pidgeotto", "pikachu"]) should return ["machamp", "petilil", "lumineon", "nosepass"].', function () {
    assert.deepStrictEqual(
      findLongestChain([
        'loudred',
        'lumineon',
        'lunatone',
        'machamp',
        'magnezone',
        'nosepass',
        'petilil',
        'pidgeotto',
        'pikachu'
      ]),
      ['machamp', 'petilil', 'lumineon', 'nosepass']
    )
  })
})
