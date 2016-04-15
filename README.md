object-fp
======

Library for using funtional programming methods on js objects without mixins

### Installation
Install this module through `npm`.
```
npm install object-fp
```

### Examples
Methods are not mixed.
```javascript
  withFP ->
  console.log Object::map # undefined
```
You can easily destruct keys or/and values.
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
And translate back Array into Object.
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
**withFP( function() )**
  > Mixin methods to Object and Array prototypes, perform function and unmix methods after.

#### Methods work only within withFP

##### Array
- **Array.prototype.toObject()**
  > Translates `Array [{key, val}]` into Object

##### Object
  Before each method object translates into `Array [{key, val}]`.

- **Object.prototype.forEach()**
  > Calls a function for each element in the array.

- **Object.prototype.entries()**
  > Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

- **Object.prototype.every()**
  > Returns true if every element in this array satisfies the provided testing function.

- **Object.prototype.some()**
  > Returns true if at least one element in this array satisfies the provided testing
function.

- **Object.prototype.filter()**
  > Creates a new array with all of the elements of this array for which the provided filtering function returns true.

- **Object.prototype.find()**
  > Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.

- **Object.prototype.findIndex()**
  > Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.

- **Object.prototype.keys()**
  > Returns a new Array Iterator that contains the keys for each index in the array.

- **Object.prototype.map()**
  > Creates a new array with the results of calling a provided function on every element in this array.

- **Object.prototype.reduce()**
  > Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

- **Object.prototype.reduceRight()**
  > Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.

### License

This module is licensed under the MIT license that can be found in the LICENSE file.
