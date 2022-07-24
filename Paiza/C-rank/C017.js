const Main = input => {
  input = input.split('\n');
  const [a, b] = input[0].split(' ').map(Number);
  const n = input[1].trim();
  const arr = [];
  let flg = false;
  for (let i = 0; i < n; i++) {
    arr.push(input[i + 2].trim().split(' ').map(Number));

    for (let j = 0; j < 2; j++) {
      if (a > arr[i][0]) {
        flg = true;
      } else if (a < arr[i][0]) {
        flg = false;
      } else if (a === arr[i][0]) {
        if (b < arr[i][1]) {
          flg = true;
        } else if (b > arr[i][1]) {
          flg = false;
        }
      }
    }
    console.log(flg ? 'High' : 'Low');
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8'));
