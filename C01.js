function add() {
  // console.log(arguments)
  const args = array.from(arguments);
  return args.reduce((acc, cur) => acc + cur);
}
// console.log(add(1,2,3,4,6,7,9,10,11))

function sum(...args) {
  return args.reduce((acc, cur) => acc + cur);
}
console.log(sum(1, 2, 7));
console.log(sum(1, 4));
console.log(sum(11));
console.log(sum(10, 3, 6, 7, 9));
