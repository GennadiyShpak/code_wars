// 'https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript'
var summation = function (num) {
  let counter = 0;
  let sum = 0;
  while (counter !== num) {
    counter += 1;
    sum += counter;
  }
  return sum;
};

console.log(summation(1));
console.log(summation(8));
