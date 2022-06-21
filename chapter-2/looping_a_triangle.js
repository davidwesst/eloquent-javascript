/**
 * Looping a triangle
 * https://eloquentjavascript.net/02_program_structure.html#i_umoXp9u0e7
 */
function looping_a_triangle() {
    const MAX_COUNT = 7;

    // console.log loop
    for(let i=1; i<=7; i++) {
        let output = "";

        // build string loop
        for(let j=1; j<=i; j++) {
            output = output.concat("#");
        }

        console.log(output);
    }
}

looping_a_triangle();