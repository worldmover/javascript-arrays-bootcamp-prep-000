var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
  var array1=[element,...array]
  return array1
}

function destructivelyAddElementToBeginningOfArray(array,element){
  return array.unshift(element)
}

function addElementToEndOfArray(array,element){
  return [array,...element]
}

function destructivelyAddElementToEndOfArray(array,element){
  return array.push(element)
}

function accessElementInArray(array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
 return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length - 1)
}

