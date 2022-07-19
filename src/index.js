
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (!(Array.isArray(matrix))) return [];
let res = [];
for (let i = 0; i < matrix.length; i++) {
  if ( !(i % 2) ) {
    for (let j = 0; j < matrix[i].length; j++) {
    res.push(matrix[i][j])}
  }
  else {
    matrix[i] = matrix[i].reverse();
    for (let k = 0; k < matrix[i].length; k++){
    res.push(matrix[i][k])}
  }
}
  return res;
}
