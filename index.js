var reverseString = (function(string, opts){
  function reverseStringWithStack(string){
    stack = []
    var string_a = string.split("")
    while(string_a.length != 0){
      stack.push(string_a.shift())
    }
    while(stack.length != 0){
      string_a.push(stack.pop())
    }
    return string_a.join("")
  }

  function reverseStringInPlace(string){
    string = string.split("")
    begIndex= 0
    endIndex= string.length - 1
    // while(begIndex != endIndex && begIndex < endIndex){
    while(begIndex < endIndex){
      temp = string[begIndex]
      string[begIndex] = string[endIndex]
      string[endIndex] = temp 
      begIndex++
      endIndex--
    }
    return string.join("")
  }
  opts = opts || {}
  // default to inplace
  if(opts.strategy == "inplace"){
    return reverseStringInPlace(string)
  } else if(opts.strategy == "stack"){
    reverseStringWithStack(string)
  }else{
    return reverseStringInPlace(string)
  }
})

module.exports = reverseString
console.log(reverseString("hello", {stregy: "inplace"}))

