const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const words = fs.readFileSync(file).toString().trim().split('\n');

const n = words.shift();
const setWords = new Set(words);
const getWords = [...setWords].map(n => n.trim());
getWords.sort();
console.log(
  getWords
    .sort((preWord, nextWord) => preWord.length - nextWord.length)
    .join('\n')
);
