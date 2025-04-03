const removeFromArray = function(inputArray,...nums) {

  let removedIndeces = [];
  let i=0;

  for(let element of inputArray){
  if(!nums.includes(element)){
    removedIndeces.push(element);
  }
  i++;
  }

  return removedIndeces;
}
// Do not edit below this line
module.exports = removeFromArray;
