let userInput: unknown;
let userName: string;

userInput = 'Mauro';

if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError('An error ocurred!', 500);
