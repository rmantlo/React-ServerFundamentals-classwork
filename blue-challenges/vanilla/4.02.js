/*

Given 2 arrays:

const arrOne = [ 10, 20 , 30 , 40 , 50, 70 ];
const arrTwo = [ 5, 3, 2, 5 ];

Create a function that multiplies 'like' indexes (0 with 0, 1 with 1, etc.) together then place the value in a new array. 

The function you create should return [50, 60, 60, 200] based on the arrays above.

Make sure the values given to the function are an array type and they have data inside of them. If not of type array, return string message. 

If the first array has more values than the second, return an array with the same number of values as the shorter array.
*/

//my solution:
const arrOne = [10, 20, 30, 40, 50, 70];
const arrTwo = [5, 3, 2, 5];
let f = 'hello';

function multiply(a, b) {

    if (a instanceof Array && b instanceof Array) {
        let newArr = [];
        for (i = 0; i < b.length; i++) {
            newArr.push(a[i] * b[i]);
        }
        console.log(newArr);
        return newArr;
    } else {
        return 'Properties are not Arrays'
    }
}

let product = multiply(arrOne, arrTwo);
console.log(product);


//instructor solution:
const arrOne = [10, 20, 30, 40, 50, 70];
const arrTwo = [5, 3, 2, 5];

const empty = [];
const str = 'hello';

const arrMultiplier = (arrOne, arrTwo) => {
    //for type checking: typeof and instanceof (dont have to use both)
    if (arrOne instanceof Array && !arrTwo instanceof Array) {
        if (typeof arrOne === 'object' && typeof arrTwo === 'object') {
            let newArr = [];
            const limiter = arrOne.length > arrTwo.length ? arrTwo.length : arrOne.length;

            for (let i = 0; i < limiter; i++) { // now dont need this in a if statement
                //if(arrTwo[i] == undefined){
                //console.log("skipping "+arrOne[i]);
                //}else {
                newArr.push(arrOne[i] * arrTwo[i]);
                //}
            }
            return newArr;
        }
        return 'Arguements are not Arrays'
    }
    return 'Please provide array values'
}
let product = arrMultiplier(str, arrTwo);
console.log(product);