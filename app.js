var userInput;
var userName;
userInput = 5;
userInput = 'Phill';
if (typeof userInput === 'string')
    userName = userInput;
userInput = true;
// userName = userInput  
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('testing error messaging', 666);
