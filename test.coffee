chai  = require 'chai'
{assert, should, expect} = chai
#
describe 'true', ->
  it 'should be true', ->
    expect(true).to.be.true
