## Discription
Library for using funtional programming methods on js objects without mixins

## Examples

```javascript
  withFP ->
  console.log Object::map # undefined
```

```javascript
  withFP ->
    obj = a : 1, b : 2
    arr = obj.map ({val})-> val
    console.log arr [1, 2]
```

```javascript
  withFP ->
    obj = a : 1, b : 2
    #
    keys = obj.map ({val})-> val
    console.log keys # [1, 2]
    #
    vals = obj.map ({key})-> key
    console.log vals # ['a', 'b']
```

```javascript
  withFP ->
    obj = a : 1, b : 2
    #
    arr = obj.map (tuple)-> tuple
    res = arr.toObject()
    #
    console.log res # {a : 1, b : 2}
```

### Main function
withFP( function() )

  Adds mixins to Object and Array prototypes, perform function and delete mixins after.

#### Scope methods
  List of methods work only within withFP.

##### Array
  - Object Array[].toObject()

  Translate Array of entries {key, val} into Object {key : val}

##### Object
  - undefined Object.forEach
  - Array Object.filter
  - Array Object.map
  - Boolean Object.every
  - Boolean Object.some
  - <any> Object.reduce
  - <any> Object.reduceRight
