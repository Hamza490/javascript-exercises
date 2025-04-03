const sumAll = function(numOne, numTwo) {

let sum = 0;
let i = 0;
let x = 0;
if(Number.isInteger(numOne) && Number.isInteger(numTwo)){
  if(numOne > 0 && numTwo >0){
    if(numOne < numTwo){
      i = numOne;
      x = numTwo;
    }
    else{
      i = numTwo;
      x = numOne;
    }

    while(i<=x){
      sum=sum+i;
      i++;
    }

    return sum;
  }
  else  
    return 'ERROR';
}
else
  return 'ERROR';

}

// Do not edit below this line
module.exports = sumAll;
