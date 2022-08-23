const Main = input => {
  const n = Number(input);
  let sum = 0;
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      sum += i * j;
    }
  }

  const arr = [];
  for (let i = 1; i <= 9; i++) {
    if ((sum - n) % i === 0) {
      arr.push(i);
    }
  }

  arr.forEach(v => {
    if ((sum - n) / v <= 9) {
      console.log(v + ' x ' + (sum - n) / v);
    }
  });
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
