const reverseString = function(message) {
reversedMessage="";
for(i=message.length-1; i>=0; i--){
    reversedMessage+=message[i];
}
return reversedMessage;
};

// Do not edit below this line
module.exports = reverseString;
