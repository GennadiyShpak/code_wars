// 'https://www.codewars.com/kata/5865a75da5f19147370000c7/train/javascript'

function addArrays(array1, array2) {
  let sumArr = [];
  if (array1.length !== array2.length) {
    throw Error;
  }
  for (let i = 0; i < array2.length; i += 1) {
    sumArr.push(array1[i] + array2[i]);
  }
  return sumArr;
}
console.log(addArrays([1, 2], [4, 5]));
console.log(addArrays(['a'], ['b']));
