/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const [ ROWS, COLS ] = [ mat.length, mat[0].length ];

    let sum = 0;
    for (let r = 0; r < ROWS && r < COLS; r += 1) {
        sum += mat[r][r]
    }
    for (let r = ROWS - 1; r >= 0; r -= 1) {
        sum += mat[r][ROWS - 1 - r];
    }
    if (ROWS % 2 === 1) {
        const half = Math.floor((ROWS)/2);
        sum -= mat[half][half];
    }
    
    return sum;
};