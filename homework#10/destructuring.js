/*
 * Homework Assignment #10: Destructuring
*/

/*
Destructuring an object is the act of extracting properties
and save them in variables with the name of the object's key wrapped in curly braces {}
*/


/*
The parentheses () are required in case of object destructuring assignment separated from  declaration of variables
    const obj = {a: 1, b: 2};
    let a, b;
    {a, b} = obj; // is not valid
    console.log(a);

    ({a, b} = obj); // is valid
    console.log(a);
*/

// You can unpack an object property an assigne it to a variable with different name than the object property
const person = {firstName: "John", lastName: "Doe", age: 34};
const {firstName:FN, lastName:LN, age:AGE} = person;
console.log(FN, LN, AGE);

/*
Destructuring an array is the act of extacting values
and save them in variables wrapped in brackets []
*/


/*
Array Destructuring is very useful if you want to swapp variables
    let a = 1;
    let b = 2;
    let c = 3;
    console.log(a,b,c); // output : 1 2 3

    [a,b] = [b,a];

    console.log(a,b,c); // output : 2 1 3
*/

const languages = ["JavaScript", "Python", "Java", "Ruby", "HTML"];
const [javascript, python, java, ruby, html] = languages;
console.log(javascript);

// Extra Credit

/*
Destructuring nested objects or nested arrays is unpacking properties (in case of objects) or values (in case of arrays) from multi-level objects or arrays
*/

const courses = [
    {
        category: "Web Development",
        content: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        category: "Data Science",
        content: ["Python", "SQL", "Data Visualization", "Machine Learning"]
    }
]

for (const {category, content} of courses) {
    console.log(category);
    for(const c of content) {
        console.log(`\t${c}`);
    }
}

/* output:
Web Development
	HTML
	CSS
	JavaScript
	React
Data Science
	Python
	SQL
	Data Visualization
	Machine Learning
*/

const cafeMenu = [
    {
        category: "Hot Drinks",
        drinks: {
            Americano: 4.99,
            CafeMocha: 5.99,
            CafeLatte: 5.99,
            Capuccino: 6.75,
            Espresso: 3.00,
            VanillaLatte: 4.75
        }
    },
    {
        category: "Cold Drinks",
        drinks: {
            OrangeJuice: 2.99,
            AppleJuice: 2.00,
            IcedLatte: 5.99,
            IcedMocha: 4.75
        }
    }
];

function orangeJuciePrice([ ,{drinks:{OrangeJuice}}]){
    return(OrangeJuice);
}

console.log(`Orange Juice: $${orangeJuciePrice(cafeMenu)}`);

/* output:
Orange Juice: $2.99
*/