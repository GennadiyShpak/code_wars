// 'https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript'
var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i += 1) {
    sum += i;
  }
  return sum;
};

console.log(summation(1));
console.log(summation(8));
