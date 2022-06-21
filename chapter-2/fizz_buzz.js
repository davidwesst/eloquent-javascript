/**
 * FizzBuzz
 * https://eloquentjavascript.net/02_program_structure.html#i_rebKE3gdjV
 */
function fizz_buzz() {
    const MAX_COUNT = 100;

    for(let i=1; i<=MAX_COUNT; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            // divide 3 and 5, FizzBuzz
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            // divide 3 = Fizz
            console.log("Fizz");
        } else if (i % 5 === 0) {
            // divide 5 = Buzz
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizz_buzz();