const link =
  'https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript';
function generateRange(min, max, step) {
  let result = [];
  for (min; min <= max; min += step) {
    result.push(min);
  }
  return result;
}
console.log(generateRange(2, 10, 2));
// [2,4,6,8,10]
