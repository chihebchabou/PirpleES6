/*
 Homework Assignment #4: Functions
*/

// Collection of men who are mortal
const men = {
    collection: ['plato', 'aristotle', 'socrates'],
    mortal: true
};

 // Check if the name of the man is a part of this collection then it follows that he is mortal as well
const nameIdentifier = (name) => {

    // Check if our function take a name as parameter, if not 'Unrecognized name' as default
    name = name || "Unrecognized name";

    // Check if name is a string
    if (typeof name === 'string') {

        if (name.toLowerCase() === "unrecognized name" || men.collection.indexOf(name.toLowerCase()) === -1) {

            // If the value of the name is "Unrecognized name" or it's not a part of the men's collection, return "Unrecognized name"
            return "Unrecognized name";

        } else if (men.mortal === true) {

            // If man is mortal return true, otherwise return false
            return true;
        }
        else {
            return false;
        }
    } else {

        // The case that name is not a string
        return name + " is not a string";
    }
}

console.log("All men are mortal");
console.log(nameIdentifier("Socrates"));
console.log(nameIdentifier(12));
console.log(nameIdentifier());
console.log(nameIdentifier("John"));

console.log("------------------------");

// Extra Credit

// Define a function that takes two arguments: an array of all cake possibilities (vanilla or chocolate) and a boolean representing whether or not the cake is chocolate.
const chocolateOrVanilla = (flavors, isChocolate) => {

    // Result that the function should return
    let result = "This cake is ";
    if (isChocolate === true) {

        // If chocolate is the falvour of the cake then return This cake is chocolate
        result += flavors.find(flavor => flavor === 'chocolate');
    } else {

        // Otherwise return This cake is vanilla
        result += flavors.find(flavor => flavor === 'vanilla');
    }
    return result;
}

console.log(chocolateOrVanilla(['vanilla', 'chocolate'], false));
console.log(chocolateOrVanilla(['vanilla', 'chocolate'], true));

/*
output

All men are mortal
true
12 is not a string
Unrecognized name
Unrecognized name
------------------------
This cake is vanilla
This cake is chocolate
*/