objToArr = (obj)->
  keys = Object.keys(obj)
  keys.map (key)-> {
    key
    val : obj[key]
  }
#
addOrRmv = (obj, rmv = no)->
  list =
  [ 'forEach'
    'filter'
    'map'
    'every'
    'some'
    'reduce'
    'reduceRight'
  ]
  if rmv
    list.forEach (method)-> delete obj[method]
  else
    list.forEach (method)->
      obj[method] = ->
        objToArr(@).map arguments...
#
toObject = ->
  res = {}
  @.forEach ({key, val})-> res[key] = val
  res
#
withFP = (fn)->
  # ADD mixins
  addOrRmv(Object::)
  Array::toObject = toObject
  fn?()
  # RMV mixins
  addOrRmv(Object::, yes)
  delete Array::toObject

withFP ->

module.exports = withFP
