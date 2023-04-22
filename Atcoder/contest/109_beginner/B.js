const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...words] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
words = words.map(word => word.join(''));
let startWord = words[0];
let wordLastChar = startWord[startWord.length - 1];
let answer = 'Yes';

const cur = [words[0]];
words.shift();
words.forEach(word => {
  const first = word[0];
  const last = word[word.length - 1];
  if (wordLastChar === first && !cur.includes(word)) {
    cur.push(word);
    wordLastChar = last;
  } else {
    answer = 'No';
    return;
  }
});
console.log(answer);
