const Main = input => {
  const n = Number(input);
  let sum = 2025 - n;
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (sum === i * j) {
        console.log(`${i} x ${j}`);
      }
    }
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
