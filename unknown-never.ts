let userInput: unknown;

let userName: string;

userInput = 5;
userInput = 'Phill';
if (typeof userInput === 'string') userName = userInput;

userInput = true;
// userName = userInput 

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('testing error messaging', 666);
