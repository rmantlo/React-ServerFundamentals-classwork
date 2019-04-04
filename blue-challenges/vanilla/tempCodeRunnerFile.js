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