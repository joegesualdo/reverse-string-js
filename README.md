## Reverse String
> Reverse a string (using multiple strategies)

## Install
```
$ npm install --save reverse-string-js
```

## Usage
```javascript
var reverseString = require('reverse-string-js')

reverseString("hello") // 'olleh'
reverseString("hello", {strategy: "inplace"}) // 'olleh'
reverseString("hello", {strategy: "stack"}) // 'olleh'
```

## API

### `reverseString(string, options)`

| Name | Type | Description |
|------|------|-------------|
| string | `String` | A string to reverse|
| options | `Object` | Options for the reversal 

The available options are:

- `strategy` - (string) Can either be "stack" or "inplace"

Returns: `String`, the reversed string 

```javascript
var reverseString = require('reverse-string-js')

reverseString("hello") // 'olleh'
reverseString("hello", {strategy: "inplace"}) // 'olleh'
reverseString("hello", {strategy: "stack"}) // 'olleh'
```
