# # # # # # # # # # # # # # # # # #
#            requires
chai    = require 'chai'
{assert, should, expect} = chai
#
withFP  = require './index'
#
# # # # # # # # # # # # # # # # # #
#
log     = -> console.log arguments...
#
#
#
#
# obj = a : 1, b : 2
# withFP = (fn)->
#   addOrRmv(Object::)
#   fn()
#   addOrRmv(Object::, yes)
# withFP ->
#   log obj.map ({val})-> val
#
#
# # # # # # # # # # # # # # # # # #
#              main
describe 'withFP function', ->
  it 'shouldn\'t save mixins', ->
    list =
    [ 'forEach'
      'filter'
      'map'
      'every'
      'some'
      'reduce'
      'reduceRight'
    ]
    withFP ->
    expect(Object::).to.not.have.any.keys list
  #
  describe 'format [{key, val}]', ->
    describe 'obj.map ({val})-> val', ->
      obj = a : 1, b : 2
      arr = null
      withFP ->
        arr = obj.map ({val})-> val
      #
      it 'should return array of values', ->
        expect(arr).to.be.eql [1, 2]
    #
    describe 'obj.map ({key})-> key', ->
      obj = a : 1, b : 2
      arr = null
      withFP ->
        arr = obj.map ({key})-> key
      #
      it 'should return array of keys', ->
        expect(arr).to.be.eql ['a', 'b']
    #
    describe 'array.toObject()', ->
      it 'should return normal object', ->
        obj = a : 1, b : 2
        arr = null
        res = null
        withFP ->
          arr = obj.map (tuple)-> tuple
          res = arr.toObject()
        expect(res).to.be.eql obj
