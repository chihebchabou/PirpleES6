/*
    Homework Assignment #6: Loops
*/

labelx:
for (let x = 1; x <= 100; x++) {

    // Check if x is a multiple of three or five
    if (x % 3 === 0 || x % 5 === 0) {

        // If both of them, log to the console "FizzBuzz"
        if (x % 3 === 0 && x % 5 === 0) {
            console.log("FizzBuzz");
        } else {
            
            // If x is only a multiple of three then log "Fizz"
            if (x % 3 === 0) {
                console.log("Fizz");
            }

            // If x is only a multiple of five then log "Buzz"
            if (x % 5 === 0){
                console.log("buzz");
            }
        }
    } else {

        // Extra Credit

        // Check if x is prime or not
        for (let y = 2; y < x; y++){

            // If x is not prime which means that x is a multiple of a number between two and x (excluded), then log the number itself
            if ( x % y === 0) {
                console.log(x);

                // Move to the next iteration of x
                continue labelx;
            }
        }

        // If x is prime then log "prime" instead
        console.log("prime");
    }
}

/*
output the first 20 iterations of x

prime
prime
Fizz
4
buzz
Fizz
prime
8
Fizz
buzz
prime
Fizz
prime
14
FizzBuzz
16
prime
Fizz
prime
buzz
*/