/*
Create a function that swaps the value of any 2 specified properties in a object, make sure you don't mutate (change) the original object. 
Your function may have 3 parameters, the original object, property1, property2

Example Object : 

const testObj = {
  language : 'JavaScript',
  library : 'React'
};
{
    language : 'React',
    library : 'JavaScript'
}
*/

const testObj = {
    language : 'JavaScript',
    library : 'React'
  };

const propSwap = (obj, propOne, propTwo) => {
    let newObj = {};

    newObj[propOne] = obj[propTwo];
    newObj[propTwo] = obj[propOne];
    
    return newObj;
};

let newObj = propSwap(testObj, 'language', 'library');
console.log(newObj);
console.log(testObj);

const testObj = {
    language: 'JavaScript',
    library: 'React'
 };
 
 function swap(obj, key1, key2) {
    let tester = {};

    [tester[key1], tester[key2]] = [obj[key2], obj[key1]];
    console.log(tester);
 }
 
 swap(testObj, 'language', 'library');
 console.log(testObj)

const randomObj = {
    os : 'test',
    city  : 'another test'
}

function keySwapper (object, keySwap1, keySwap2){

    let newobj = object
 
    let key1value = newobj[keySwap1];
    let key2value = newobj[keySwap2];
 
    newobj[keySwap1] = key2value;
    newobj[keySwap2] = key1value;
 
    console.log(newobj);
 
 }
 
 keySwapper(randomObj, "os", "city");
 console.log(randomObj);