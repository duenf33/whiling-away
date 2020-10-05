// Challenge 0

function challenge0() {
    let num = 1;
    while (num <= 3) {
        console.log(num);
        num += 1;
    }
}
// challenge0();

// 1. Write a function that prints the numbers from 1 to 5. Note that, since we're hard-coding our starting point (1) and our end point (5), no parameters are required!

function oneToFive() {
    let num = 1;
    while (num <= 5) {
        // console.log(num);
        num += 1;
    }
}
// oneToFive();

// 2. Write a function that prints the numbers from 1 to whatever number is passed in as a parameter. Call your function with 6 as the parameter, and you should see 1, 2, 3, 4, 5, and 6 printed. Now call it with 3, and you should see 1, 2, and 3 printed. HINT: you can check the value of a counter variable against the parameter you're taking in.

function oneToSix(x) {
    let num = 1;
    while (num <= x) {
        console.log(num);
        num += 1;
        if(num === 7) {
            return oneToSix(3);
        }
    }
}
// oneToSix(6)

// 3. Write a function that takes in two parameters and prints the numbers from the first to the second, INCLUSIVE. Call it with 3 and 8 as parameters, and then again with -2 and 1. 

function twoParameters(a, b) {
    let num = a;
    while (num <= b){
        console.log(num);
        num += 1;
        if(num > b){
            let num = -2;
            while (num <= 1) {
                console.log(num);
                num += 1;
            }
        }
    }
}
// twoParameters(3, 8)

// 4. Write a function that prints the numbers from 1 to the number given, and then, after each number, print "Odd" if it's an odd number and "Even" if it's an even number. Print that pair of things (number and odd/even string) on one line or split them between two--up to you! Call it with the parameter 5. HINT: remember the modulus operation?

function oddEven(a) {
    let num = 1;
    while (num <= a){
        console.log(num);
        num += 1;
        if(num % 2) {
            console.log('even');
        } else {
            console.log('odd');
        }
    }
}
// oddEven(5);

// 5. Print the even numbers ONLY from 1 to whatever number is passed in (inclusive). Call it with 10, and make sure you're getting 2, 4, 6, 8, and 10 printed out! HINT: you can use an if (or any other code!) within curly braces, whether it's a function or a loop.

function evenNum(a) {
    let num = 2;
    while (num <= a) {
        console.log(num);
        num += 2;
    }
}
// evenNum(10);

// 6. Write a function that prints the numbers from 10 to 1, in descending order. Now call it! HINT: we can change a counter variable in any way we decide. It does not have to be just upping it by 1!

function descendingOrder() {
    let num = 10;
    while (num >=1) {
        console.log(num);
        num -= 1;
    }
}
// descendingOrder();

// 7. Write a function that prints the numbers from 10 to 1, in descending order, followed by "Blast off!".

function blastOff() {
    let num = 10;
    while (num >=1) {
        console.log(num);
        num -= 1;
        if(num < 1) {
            console.log('Blast off!');
        }
    }
}
// blastOff();

// 8. Write a function that prints the numbers from the parameter given down to 1, in descending order, counting by 3s. Then call it with 20. You should see 20, 17, 14, and so on, down to 2. It should not print 1 or anything below it.

function descendingNumberParameter(a) {
    let num = a;
    while (num > 1) {
        console.log(num);
        num -= 3;
    }
}
// descendingNumberParameter(20);

//-------------------
// STRING CHALLENGES:
//-------------------

// 9. Write a function that prints "Hello!" seven times, each time PRECEDED by the number we're on, a period, and a space. That is, if we're on number 5, we should print: "5. Hello!" Note that, since we're hard-coding everything, no parameters are required. Now call it and observe your console. Count 'em up and make sure there are 7 printings!

function helloString() {
    let num = 1;
    while (num <= 7) {
        console.log(num + '. ' + "Hello!");
        num += 1;
    }
}
// helloString();

// 10. Write a function that prints in the same format as above, and also 7 times, but with a string passed in instead of a hard-coded "Hello!". Call it with the string of your choosing. You should see the same results as the previous challenge, but with the string you pass in instead of "Hello!".

function stringPassed(a) {
    let num = 1;
    while (num <= 7) {
        console.log(num + '. ' + a);
        num += 1;
    }
}
// stringPassed('what\'s good??');

// 11. Write a function that takes in a string AND a number and prints that string that number of times. Now call it with the parameters of "Good-bye..." and 4, and then "Get out!" and 6.

function stringNumber(string, number) {
    let num = 1;
    while (num <= number) {
        console.log(num + '. ' + string + ' ...');
        num += 1;
        if(num > number) {
            let num = 1;
            while (num <= 6) {
                console.log(num + '. ' + 'Get out!');
                num += 1;
            }
        }
    }
}
// stringNumber('Good bye', 4);

// 12. Write a function that takes in a string and prints every character individually of that string. Then call it with "think". HINT: remember, indices are just numbers! HINT 2: there's a property of any string that can tell you where to stop getting indices. But now these hints are getting a bit... lengthy.

function printString(string) {
    let num = 0;
    while(num <= string.length){
        console.log(string[num]);
        num++;
    }
}
// printString('Fernando Duenas');

// 13. Write a function that prints every OTHER character of its string parameter individually. Call it with "Nobody", and make sure you're printing "o", followed by "o", followed by "y".

function printsEveryOtherCharacter (word) {
    let num = 1;
    while(num <= word.length){
        console.log(word[num]);
        num += 2
    }
}
// printsEveryOtherCharacter('nobody');

// 14. Write a function that prints a string's individual characters backwards. Use a loop for this, NOT .join. Call it with 'Mesuara'.

function individualCharacterBackwards(word) {
    let reverse = '';
    for(let num = word.length - 1; num >= 0; num--){
        console.log(word[num]);
        reverse += word[num];
    }
}
// individualCharacterBackwards('Mesuara');

function individualCharacterBackwards(word) {
    let num = word.length - 1;
    while(num >= 0){
        console.log(word[num]);
        num--;
    }
}
// individualCharacterBackwards('fernando');

// 15. Actual for real FizzBuzz! Write a function that takes in a number and prints EACH integer from 1 to that number, inclusive. If the number is divisible by 3, print "Fizz" instead of the number. If it's divisible by 5, print "Buzz" instead of the number. If it's divisible by both, print "FizzBuzz". Now call it with 15 and check the output.

function fizzBuzz(number){
    let num = 0;
    while(num <= number -1){
        num++;
        if(num % 3 === 0 && num % 5 === 0){
            console.log('FizzBuzz');
        } else if(num % 3 === 0){
            console.log('Fizz');
        } else if(num % 5 === 0){
            console.log('Buzz');
        } else {
            console.log(num);
        }
    }
}
// fizzBuzz(15);

// 16. Fibonacci! Write a function that takes in a number and prints each Fibonacci number (starting with 0 and 1) from 1 to that number, inclusive. Call it with 21, and you should see the Fibonacci sequence up to and including 21 (1, 1, 2, 3, 5, 8, 13, 21).

function fibonacci(num){
    let a = 1;
    let b = 0;
    let fibo;
    while (num >= 0){
    console.log(b);
    fibo = a;
    a = a + b;
    b = fibo;
    num--;
    }
}
fibonacci(8)