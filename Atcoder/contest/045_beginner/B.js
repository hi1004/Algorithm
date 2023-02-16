const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input_list = fs.readFileSync(file).toString().trim().split(/\s+/);
const alpha_map = { a: 0, b: 1, c: 2 };

let order = 0;
while (input_list[order]) {
  [deleted, ...input_list[order]] = input_list[order];

  if (!deleted) {
    break;
  }
  order = alpha_map[deleted];
}
for (let key in alpha_map) {
  if (alpha_map[key] === order) {
    console.log(key.toUpperCase());
  }
}
