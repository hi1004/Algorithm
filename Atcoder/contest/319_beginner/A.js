const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[s]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );

const score = {
  tourist: 3858,
  ksun48: 3679,
  Benq: 3658,
  Um_nik: 3648,
  apiad: 3638,
  Stonefeang: 3630,
  ecnerwala: 3613,
  mnbvmar: 3555,
  newbiedmy: 3516,
  semiexp: 3481,
};

console.log(score[s]);
