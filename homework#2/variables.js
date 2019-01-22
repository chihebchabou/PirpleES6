/* 
 Homework Assignment #2: Variables and Constants
*/

/*
 What is hoisting?
 Hoisting in Javascript is the act of moving the declarations to the top of scope.
 In JavaScript, declaration of variables, regardless of where they occur in the code, must be processed before any use of them.
 The JavaScript interpreter scans the code looking for the variable and function declarations and adds them to the memory inside 
 a JavaScript data structure called Lexical Environment and use them during the code execution even before they are declared in the source code.
*/

/*
 What are the differences between let, const and var?
 variables declared with 'var' keyword are defined globally(outside any function), or locally(inside a function) without consideration of the block they are declared within.
 Prior to the ES6, only 'var' keyword is used to declare variables.
 Unlike 'var', if a variable declared with 'let' or 'const' within a block of code which is delimited with curly braces {}, it is only accessible to the code within this block.
 Constant variables, which are declared with 'const' keyword, must be assigned a value (initialized) when declared.
 'const' variables cannot be reassigned
 'const' and 'let' are introduced in ES6
*/

// var example
function func1() {
    if (true) {
        var a = 1;
        console.log(a); // output: 1
    }
    console.log(a); // output: 1
    
}

func1();

/*
 var is declared inside the function which makes the entire function become the scope of var
*/

/*
--------------------------------------
*/

 // let example
function func2() {
    if (true) {
        let b = 2;
        console.log(b) // output: 2
    }
    console.log(b); // output: ReferenceError: b is not defined
    
}

func2();

/*
 Unlike var, let variable is limited in scope to the block (if statement in this case) on which it is used, so it's not accessible from outside this block
*/

/*
-----------------------------------
*/

// const example
function func3() {
    if (true) {
        const b = 1;
        console.log(b); // output: 1
    }
    console.log(b); // output: ReferenceError: b is not defined
}

func3();

let a = 1;
a = 2;

const b = 1;
b = 2; // output: TypeError: Assignment to constant variable.

const c; // SyntaxError: Missing initializer in const declaration

/*
 const variables are block scoped (much like let) but they cannot be reassigned.
 const variable must be assigned a value (initialized) when declared.
*/

