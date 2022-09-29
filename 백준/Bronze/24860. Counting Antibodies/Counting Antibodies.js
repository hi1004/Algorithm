const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const [vK, jK] = line[0].split(' ').map(Number);
const [vL, jL] = line[1].split(' ').map(Number);
const [vH, dH, jH] = line[2].split(' ').map(Number);

const ligthK_DNA = vK * jK;
const ligthL_DNA = vL * jL;
const heavyDNA = vH * dH * jH;
const result = heavyDNA * (ligthK_DNA + ligthL_DNA);
console.log(result);
