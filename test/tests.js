const { expect } = require('chai')
const nock = require('nock')
const fs = require('fs')
const { doRequest, getHash, getNewHash } = require('../src/app')
const MultitaskContent = require('../src/Multitask')

describe('Unit Tests', function() {
  before(function() {
    nock('https://www.google.com')
      .get('/')
      .reply(200, 'Google Home Page')
  })

  it('doRequest should receive data from google', async function() {
    const data = await doRequest('https://www.google.com')
    expect(data).to.exist
  })

  it('getNewHash should encrypt strings "b" and "c" and be different from getHash', function() {
    const hash1 = getHash('a')
    const hash2 = getNewHash('b', 'c')
    expect(hash1).to.not.equal(hash2)
  })

  it('Read file "Multitask.js" and its content should be "hello"', function() {
    expect(MultitaskContent).to.equal('hello')
  })
})