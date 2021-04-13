// 'https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript'
const moveZeros = function (arr) {
  const arr1 = [];
  const arr2 = [];
  arr.forEach(item => (item === 0 ? arr2.push(item) : arr1.push(item)));
  return arr1.concat(arr2);
};
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
