/*
 Homework Assignment #3: If Statements and Operators

*/

// Create a collection of the men who are mortal
const men = {
    collection: ['plato', 'aristotle', 'socrates'],
    mortal: true
};
console.log("All men are mortal");

// The name that we are going to test
const name = 'Socrates';

 // Check if Socrates is part of this collection then it follows that he is mortal as well
if (men.collection.indexOf(name.toLowerCase()) !== -1 && men.mortal === true) {
    console.log(name + " is a man.\nTherefore, socrates is mortal.");
}

// Extra Credit:

console.log("--------------------");

// Define a cake object with a vanilla flavour attribute
const cake = { flavour: "vanilla" };

// Check if the cake's flavour is vanilla or chocolate
if (cake.flavour === "vanilla" || cake.flavour === "chocolate"){
    console.log("This cake is either vanilla or chocolate.");

    // Check if the cake's flavour is not chocolate then this cake is vanilla
    if (cake.flavour !== "chocolate") {
        console.log("This cake is not chocolate.\nTherefore, this cake is vanilla.");
    }
    else {
        console.log("This cake is not vanilla.\nTherefore, this cake is chocolate.");
    }
}

/*
 output:
 
 All men are mortal
 Socrates is a man.
 Therefore, socrates is mortal.
 --------------------
 This cake is either vanilla or chocolate.
 This cake is not chocolate.
 Therefore, this cake is vanilla.
*/

