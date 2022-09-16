const Main = line => {
  const [H, W] = line[0].split(' ').map(Number);
  const s = line.slice(1, H + 1).map(val => val.trim().split(''));
  const p = line.slice(H + 1).map(val => val.split(' ').map(Number));

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (s[i][j] === 'o') {
        result += p[i][j];
      }
    }
  }
  console.log(result);
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
