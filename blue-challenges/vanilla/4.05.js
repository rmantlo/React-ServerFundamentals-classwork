//object methods

/* 
    BRONZE :: 
      Write a function that takes an object as a parameter. Return the total number of keys in the object.

      For example:
          Given: {
            gold: 'Vanilla',
            blue: 'React',
            red: 'Angular'
          }

        Should return 3, since there are three keys in the object.

    SILVER ::
      Modify the function to return the total number of characters in the objects keys.

      For example:
        Given: {
          gold: 'Vanilla',
          blue: 'React',
          red: 'Angular'
        }

        Should return 11. Since there are 11 characters in the words 'gold', 'blue' and 'red'.

      GOLD ::
        Modify the function to alternate between adding and subtracting the length of they keys.
        Start by getting the length of the first key, then subtract, then add, subtract, add so and and so forth.

      For example:
        Given: {
          gold: 'Vanilla',
          blue: 'React',
          red: 'Angular'
        }
        
        Should return 3, since the first key is four characters(+4), the second is four characters(-4), and the third is three(+3)
*/

const given = {
    gold: 'Vanilla',
    blue: 'React',
    red: 'Angular'
}
function keyList(obj) {
    let keywords = Object.keys(obj);
    console.log(keywords.length);

    let mapthing = keywords.map((key) => {
        return key.length
    })
    //console.log(mapthing);

    let number = 0;
    for (i = 0; i < mapthing.length; i++) {
        number += mapthing[i];
    }
    console.log(number);

    console.log(Number(mapthing[0] - mapthing[1] + mapthing[2]));

    let anotherNumber = 0;
    keywords.map((nkey, i) => {
        //console.log(nkey);
        if (i % 2 == 0) {
            anotherNumber += nkey.length;
            return anotherNumber;
        } else if (i % 2 != 0) {
            anotherNumber -= nkey.length;
            return anotherNumber;
        }
        return anotherNumber;
    })
    console.log(anotherNumber);

}

keyList(given);


//other solutions:


const obj = {
    gold: 'Vanilla',
    blue: 'React',
    red: 'Angular'
}


function getKeys(object) {
    var keyCount = [];
    var silverCount = 0;
    var count = 0;
    var bool = true;

    for (element in object) {
        console.log(element);
        keyCount.push(element);

        var charCounter = element.split('');

        //silver challenge count all characters
        silverCount += charCounter.length;

        //gold challenge alternate between adding and subtracting
        bool == true ? count += charCounter.length : count -= charCounter.length;

        bool == true ? bool = false : bool = true;

    }

    console.log(`The number of keys in the object is ${keyCount.length}`);

    console.log(`The number of characters in the object keys is ${silverCount}`);

    console.log(`The number of characters in the object keys when alternating between adding and subtracting is ${count}`);

}

getKeys(obj);