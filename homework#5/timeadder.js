/*
 Homework Assignment #5: Switch Statements
*/

/*
 To prevent floating point numbers, if label1 or label2 have the shortest time unit then the unit time conversion will be to that shortest one
 example : timeAdder(1, "hour", 13, "minutes") return [73, "minutes"]
      label1: timeAdder(456, "seconds", 3, "minutes") return [636, "seconds"] ... and so on
*/
function timeAdder(value1, label1, value2, label2) {

    // Define the array that the function will return
    let timeResult = [];

    // Array's variables
    let value3;
    let label3;

    // If the arguments are the wrong type then return flase
    if (typeof(label1) !== "string" || typeof(label2) !== "string" || typeof(value1) !== "number" || typeof(value2) !== "number"){
        return false;
    }

    // If value and label disagree in number then return false
    if ((value1 <= 1 && label1.charAt(label1.length - 1) === "s") || (value1 > 1 && label1.charAt(label1.length - 1) !== "s")) {
        return false;
    }
    if ((value2 <= 1 && label2.charAt(label2.length - 1) === "s") || (value2 > 1 && label2.charAt(label2.length - 1) !== "s")) {
        return false;
    }

    // Try any possible combination inputs
    switch (label1) {
        case 'second':
        case 'seconds':
            switch (label2) {
                case 'second':
                case 'seconds':

                    // Add value1 and value2
                    value3 = value1 + value2;
                    break;

                case 'minute':
                case 'minutes':

                    // Time conversion and addition
                    value3 = value1 + value2 * 60;
                    break;

                case 'hour':
                case 'hours':

                    // Time conversion and addition
                    value3 = value1 + value2 * 3600;
                    break;

                case 'day':
                case 'days':

                    // Time conversion and addition
                    value3 = value1 + value2 * 86400
                    break;

                default:

                    // The case that the function's label2 argument is not second(s) or minute(s) or hour(s) or day(s)
                    return " label2 should accept any of the following strings: 'seconds', 'minutes', 'hours', 'days', 'second', 'minute', 'hour', 'day'";
            }

            // If label3 is not assigned a value then it takes "second" or "seconds" in this case
            if (!label3) {
                label3 = value3 > 1 ? "seconds" : "second";
            }
            break;

        case 'minute':
        case 'minutes':
            switch (label2) {
                case 'second':
                case 'seconds':

                    // Time conversion and addition
                    value3 = value1 * 60 + value2;

                    // Set label3 to seconds or second according to number agreement
                    label3 = value3 > 1 ? "seconds" : "second"; 
                    break;

                case 'minute':
                case 'minutes':

                    // Add value1 and value2
                    value3 = value1 + value2;
                    break;

                case 'hour':
                case 'hours':

                    // Time conversion and addition
                    value3 = value1 + value2 * 60;
                    break;

                case 'day':
                case 'days':

                    // Time conversion and addition
                    value3 = value1 + value2 * 1440
                    break;

                default:

                    // The case that the function's label2 argument is not second(s) or minute(s) or hour(s) or day(s)
                    return " label2 should accept any of the following strings: 'seconds', 'minutes', 'hours', 'days', 'second', 'minute', 'hour', 'day'";
            }

            // If label3 is not assigned a value then it takes "minute" or "minutes" in this case
            if (!label3) {
                label3 = value3 > 1 ? "minutes" : "minute";
            }
            break;

        case 'hour':
        case 'hours':
            switch (label2) {
                case 'second':
                case 'seconds':

                    // Time conversion and addition
                    value3 = value1 * 3600 + value2;

                    // Set label3 to seconds or second according to number agreement
                    label3 = value3 > 1 ? "seconds" : "second"; 
                    break;

                case 'minute':
                case 'minutes':

                    // Time conversion and addition
                    value3 = value1 * 60 + value2 ;

                    // Set label3 to minutes or minute according to number agreement
                    label3 = value3 > 1 ? "minutes" : "minute";
                    break;

                case 'hour':
                case 'hours':

                    // Add value1 and value2
                    value3 = value1 + value2;
                    break;

                case 'day':
                case 'days':

                    // Time conversion and addition
                    value3 = value1 + value2 * 24;
                    break;

                default:

                    // The case that the function's label2 argument is not second(s) or minute(s) or hour(s) or day(s)
                    return " label2 should accept any of the following strings: 'seconds', 'minutes', 'hours', 'days', 'second', 'minute', 'hour', 'day'";
            }

            // If label3 is not assigned a value then it takes "hour" or "hours" in this case
            if (!label3) {
                label3 = value3 > 1 ? "hours" : "hour";
            }
            break;

        case 'day':
        case 'days':
            switch (label2) {
                case 'second':
                case 'seconds':

                    // Time conversion and addition
                    value3 = value1 * 86400 + value2;

                    // Set label3 to seconds or second according to number agreement
                    label3 = value3 > 1 ? "seconds" : "second"; 
                    break;

                case 'minute':
                case 'minutes':

                    // Time conversion and addition
                    value3 = value1 * 1440 + value2 ;

                    // Set label3 to minutes or minute according to number agreement
                    label3 = value3 > 1 ? "minutes" : "minute";
                    break;

                case 'hour':
                case 'hours':

                    // Time conversion and addition
                    value3 = value1 * 24 + value2 ;

                    // Set label3 to hours or hour according to number agreement
                    label3 = value3 > 1 ? "hours" : "hour";
                    break;

                case 'day':
                case 'days':

                    // Add value1 and value2
                    value3 = value1 + value2;
                    break;

                default:

                    // The case that the function's label2 argument is not second(s) or minute(s) or hour(s) or day(s)
                    return " label2 should accept any of the following strings: 'seconds', 'minutes', 'hours', 'days', 'second', 'minute', 'hour', 'day'";
            }

            // If label3 is not assigned a value then it takes "day" or "days" in this case
            if(!label3){
                label3 = value3 > 1 ? "days" : "day";
            }
            break;

        default:

            // The case that the function's label1 argument is not second(s) or minute(s) or hour(s) or day(s)
            return " label1 should accept any of the following strings: 'seconds', 'minutes', 'hours', 'days', 'second', 'minute', 'hour', 'day'";
    }

    // Fill the timeResult array and return it
    timeResult[0] = value3;
    timeResult[1] = label3;
    return timeResult;
}

// Extra Credit

function largestTimeAdder(time) {
    switch (time[1]) {
        case "second":
        case "seconds":
            switch (time[0]) {
                case 60:
                    time = [1, 'minute'];
                    break;
    
                case 3600:
                    time = [1, 'hour'];
                    break;
    
                case 86400:
                    time = [1, 'day'];
                    break;

                default:
                    time = time;
                    break;     
            }
            break;

        case "minute":
        case "minutes":
            switch (time[0]) {
                case 60:
                    time = [1, 'hour'];
                    break;
            
                case 1440:
                    time = [1, 'day'];
                default:
                    time = time;
                    break;
            }
            break;
        
        case "hour":
        case "hours":
            switch (time[0]) {
                case 24:
                 time = [1, 'day'];
                 break;

                default:
                    time = time;
                    break;
            }
            break;

        default:
            return 'invalid input';
            //break;
    }
    return time;
}

const time1 = timeAdder(1, "hour", 0, 'day');
const time2 = timeAdder(false, "seconds", 30, "minutes");
const time3 = timeAdder(23, "hours", 60, "minutes");
const time4 = timeAdder(23, "qsdqs", 1, "hour");

console.log(time1);
console.log(largestTimeAdder(time1));

console.log("-------------------------");

console.log(time2);
console.log(largestTimeAdder(time2));

console.log("-------------------------");

console.log(time3);
console.log(largestTimeAdder(time3));

console.log("-------------------------");

console.log(time4);
console.log(largestTimeAdder(time4));

/*
 output

[ 1, 'hour' ]
[ 1, 'hour' ]
-------------------------
false
invalid input
-------------------------
[ 1440, 'minutes' ]
[ 1, 'day' ]
-------------------------
 label1 should accept any of the following strings: 'seconds', 'minutes', 'hours', 'days', 'second', 'minute', 'hour', 'day'
invalid input
*/