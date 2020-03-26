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