const link =
  'https://www.codewars.com/kata/54d7660d2daf68c619000d95/train/javascript';

function convertFrac(lst) {
  let denom = [];
  lst.forEach(arr => denom.push(arr[1]));
  const sort = denom.sort((a, b) => a - b);
  console.log('sort', sort);
}

const lst = [
  [1, 2],
  [1, 3],
  [1, 4],
];
convertFrac(lst);
