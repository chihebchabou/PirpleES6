/*
 * Homework Assignment #11: Exceptions
*/

function reverseJsonArray(value) {
    try {
        let res = JSON.parse(value);
        res = res.reverse();
        return JSON.stringify(res);
    } catch (e) {
        return false;
    }
    
}

console.log(reverseJsonArray());
console.log(reverseJsonArray(true));
console.log(reverseJsonArray([{a: 1}, {b: 2}]));
console.log(reverseJsonArray("Hello world!"));
console.log(reverseJsonArray('[{"a":1 ,"b":2}]'));
console.log(reverseJsonArray('[]'));
console.log(reverseJsonArray('[{"a":1 ,"b":2}, {"c":3 ,"d":4}]'));
console.log(reverseJsonArray('[{"a":1 ,"b":2}, {"c":3 ,"d":4}, {"e":5, "f":6}]'));

/*
output

false
false
false
false
[{"a":1,"b":2}]
[]
[{"c":3,"d":4},{"a":1,"b":2}]
[{"e":5,"f":6},{"c":3,"d":4},{"a":1,"b":2}]
*/