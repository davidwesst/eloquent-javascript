/**
 * Chessboard
 * https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ
 */
function chessboard() {
    const size = 8;
    let board = "";

    // row loop
    for(let i=0; i<size; i++) {

        // even lines start blank
        let firstChar = ' ';
        let secondChar = '#';

        if(i%2 !== 0) {
            // odd lines start with char
            firstChar = '#';
            secondChar = ' ';
        }

        // position loop
        for(let j=0; j<size; j++) {
            if(j % 2 === 0) {
                board = board.concat(firstChar);
            } else {
                board = board.concat(secondChar);
            }
        }

        // start new line
        board = board.concat("\r\n");
    }

    // output result
    console.log(board);
}

chessboard();