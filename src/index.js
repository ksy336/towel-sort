
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length === 0 || matrix.length === 0) {
        return [];
    }
    for (let j = 0; j < matrix.length; j++) {
            if (j % 2 === 1) {
                matrix[j].reverse();
            }

        }
        let arr = [].concat(...matrix);
        return arr;
    }





