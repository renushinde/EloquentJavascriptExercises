// Factorialize a Number
//console.log("connected!");

function factorialize (num) {
    if (num === 0) {
        return 1;
    } else {
        return (num * factorialize(num-1));
    }

}
console.log(factorialize(5));


// without recursion

function factorializeWithForLoop (num) {
    let result =1;
    for ( let i=1; i<=num; i++) {
        console.log ("The value of i " + i);
        result = result * i;
        console.log ("The result is " + result);
    }
    return result;
}

console.log(factorializeWithForLoop(5));

1 *2 *6 * 24 

// singleLetterCount this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
function singleLetterCount (word, letter) {
    let count = 0;
    for ( let i=0; i<word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            count ++;
        }
    }
    return count;
}

console.log (singleLetterCount('Amazing','A')); // 2