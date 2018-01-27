var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array,element){
  return array.unshift(element)
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array[1]=element
  return array
}
function addElementToEndOfArray(array,element){
  return array.push(element)
}
function destructivelyAddElementToEndOfArray(array,element){
  return array.push(element)
}