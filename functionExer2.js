// console.log ("Hello world!");

// Make a function for add, subtract, multiply, and divide. Each of these functions should accept two parameters and return the sum, difference, product and quotient.

function add (a,b) {
    return a +b;
}
console.log ("The sum is: " + add(4,2));

// Write a function called sayHello that takes in a string as a parameter. If the parameter passed to the function is your first name, it should return "Hello Boss", but if the parameter passed to the function is any other name, it should return the string "Hello" and the name parameter.

function sayHello (string) {
    if ( string === "Renu") {
        return " Hello boss";
    } else {
        return "Hello " + string;
    }
}
console.log (sayHello ("Jojo"));

// Write a function called average which accepts an array as a parameter. The function should return the average of all of the numbers in the array (you can assume that the array passed to the function will contain only numbers)

function average (array) {
   let sum =0;
   for (let i=0; i<array.length; i++) {
       sum = sum+ array[i];
   }
   return sum/array.length;
}
console.log ("The average of an array is: " + average([10,20]));

// Write a function called createStudent, which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName and the values should be each of the

function createStudent (str1, str2) {
    return {
        firstName:str1,
        lastName:str2
    }

}
console.log (createStudent ("Renu", "Shinde"));

// Using your createStudent function, create three students and save them each in a variable. Then create a variable called students, which is an array that will store your three students

let tim = createStudent("Tim", "Garcia");
let matt = createStudent("Matt", "Lane");
let elie = createStudent("Elie", "Schoppik");
let students = [tim, matt,elie];
console.log(students);

// Write a function called findStudentByFirstName, which accepts one parameter, a string. This function should iterate through the students array you just made and if the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization

function findStudentByFirstName (str) {
    let newStr = str.toLowerCase();
    console.log(newStr);
for ( let i=0; i< students.length; i++) {
    if (students[i]. toLowerCase === newStr) {
        return true;
    }
}
}
console.log (findStudentByFirstName("eliE"));