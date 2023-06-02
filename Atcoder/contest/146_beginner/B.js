const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let answer = '';
for (let i = 0; i < s.length; i++) {
  let char = s[i].charCodeAt(0);
  for (let j = 0; j < n; j++) {
    if (char >= 90) {
      char = 65;
    } else {
      char++;
    }
  }

  answer += String.fromCharCode(char);
}
console.log(answer);
