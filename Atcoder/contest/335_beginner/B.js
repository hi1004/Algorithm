const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i))
  );

for (let x = 0; x <= n; x++) {
  for (let y = 0; y <= n; y++) {
    for (let z = 0; z <= n; z++) {
      if (x + y + z <= n) {
        console.log(x, y, z);
      }
    }
  }
}
