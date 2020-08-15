var userInput;
var userName;
userInput = 'Mauro';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error ocurred!', 500);
