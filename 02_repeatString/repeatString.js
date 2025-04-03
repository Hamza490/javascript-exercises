const repeatString = function(message, num) {
if(num<0)
    return "ERROR";
else{
let concatenatedMessage="";
  for(i=0; i<num; i++){
    concatenatedMessage+=message;
}

return concatenatedMessage;
}
};

// Do not edit below this line
module.exports = repeatString;
