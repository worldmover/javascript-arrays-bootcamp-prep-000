var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array,element){
  return array.unshift(element)
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array[1]=element
}