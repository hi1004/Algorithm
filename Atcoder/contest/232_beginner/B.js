const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s], [t]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
let st = new Set();
for (let i = 0; i < s.length; i++) {
  let k = (t.charCodeAt(i) - s.charCodeAt(i) + 26) % 26;
  st.add(k);
}
console.log(st.size === 1 ? 'Yes' : 'No');
