
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newMatrix = [];
    if (matrix) {
        matrix.forEach((element, index) => {
            if (index % 2 === 0) {
                newMatrix.push(...element);
            } else {
                newMatrix.push(...element.reverse());
            }
        });
    }
    return newMatrix;
}
