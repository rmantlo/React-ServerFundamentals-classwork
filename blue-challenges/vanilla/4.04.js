/*
  BRONZE ::
    Create a function that takes in the string

    const stringCheck = '  Welcome to eleven fifty   ';

    The function should remove extra whitespace before or after 
    the characters is trimmed, and should change the string so that the 
    the first 'e' and 'f' in 'eleven fifty' is capitalized. 

  SILVER ::
    Add typechecking and make sure the string parameter is a string.
    Also check to make sure the length is greater than zero, but less than
    30. If the string is invalid, return a message for an invalid argument.

  GOLD ::
    Create a callback function that prints a parameter to the console.
    Add a second parameter to the string function from Silver and Bronze for a callback function.
    Instead of returning the data, pass it callback function, and log it to the console.
*/



const str = ' Welcome to eleven fifty  ';
const string2 = '  This string is not the proper length to work'

function checkstr(a) {
    let newS = (a.trim());
    let newStr = newS.toLowerCase()

    let newString = (newStr.slice(0, 11) + newStr.charAt(11).toUpperCase() +newStr.slice(12, 18) + newStr.charAt(18).toUpperCase() +newStr.slice(19) );
    
    if( typeof newString === 'string' && newString.length > 1 && newString.length < 30){
        return newString;
        

    } else if ( newString === 'string' && newString.length < 1 || newString.length > 10){
        return 'String length is not within parameters'
    } else {
        return 'invalid arguement'
    }
}

console.log(checkstr(str));
console.log(checkstr(string2));


//instructor solution:
//simple not only works with this phrase
const str = ' Welcome to eleven fifty  ';
const str2 = '  This string is not the proper length to work'
const logger = data => {
    console.log(data);
}
const challenge = (str, callback) => {
    if(typeof str !=='string' || str.length < 1 || str.length > 30){
        callback('Invalid Argruement')
        return;
    }
    let trimmedString = str.trim();

    let replacedString = trimmedString.replace('eleven fifty', 'Eleven Fifty');
    callback(replacedString);
    return;

}
challenge(str, logger);

//callback passes off results of it's function. callback value becomes the results of its function, and then it is sent to the second called item

//i need to stop making this so complicated from the get go, just to exact instructions first then make it more fancy after