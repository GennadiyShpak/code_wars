const link =
  'https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript';

function firstNonRepeatingLetter(s) {
  let firstUnique;
  const a = s.split('');
  a.forEach(letter => {
    const z = a.filter(item => item.toLowerCase() === letter.toLowerCase());
    if (z.length === 1 && !firstUnique) {
      firstUnique = letter;
      return;
    }
  });
  if (!firstUnique) {
    firstUnique = '';
  }
  return firstUnique;
}
console.log(firstNonRepeatingLetter('a'));
console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('moonMen'));
