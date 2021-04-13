// "https://www.codewars.com/kata/5697fb83f41965761f000052/train/javascript"

function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(word => word.length > n);
}
console.log(filterLongWords('The quick brown fox jumps over the lazy dog', 4));
// ['quick', 'brown', 'jumps']
