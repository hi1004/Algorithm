const Main = input => {
  input = input.split('\n').map(Number);
  const n = input[0];
  const t = [];
  for (let i = 1; i <= n; i++) {
    t.push(input[i]);
  }
  // console.log(Math.min.apply(null, t));
  console.log(t.reduce((acc, cur) => Math.min(acc, cur)));
};

Main(require('fs').readFileSync('./input.txt', 'utf-8'));
