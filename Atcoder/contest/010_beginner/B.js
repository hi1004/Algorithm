function Main(input) {
  const n = Number(input[0]);

  const arr = input[1].split(' ').map(Number);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    while (arr[i] % 2 === 0 || arr[i] % 3 === 2) {
      arr[i]--;
      sum++;
    }
  }
  console.log(sum);
}

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
