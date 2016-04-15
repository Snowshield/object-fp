# Discription
Library for using funtional programming methods on js objects without mixins

# Examples

# Documentation

## Main function
withFP( function() )

  Adds mixins to Object and Array prototypes, perform function and delete mixins after.

## Scope methods
  List of methods work only within withFP.

### Array
  - Object Array[].toObject()

  Translate Array of entries {key, val} into Object {key : val}

### Object
  - undefined Object.forEach
  - Array Object.filter
  - Array Object.map
  - Boolean Object.every
  - Boolean Object.some
  - <any> Object.reduce
  - <any> Object.reduceRight
