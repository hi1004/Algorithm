const Main = line => {
  const x = Number(line[0]);
  const n = Number(line[1]);
  const list = line.slice(2).map(li => li.trim().split(' ').map(Number));

  let result = 0;
  function solution(arr) {
    for (let i = 0; i < n; i++) {
      result += arr[i][0] * arr[i][1];
    }
    return x === result ? 'Yes' : 'No';
  }

  console.log(solution(list));
};

Main(require('fs').readFileSync('./input.txt', 'utf8').split('\n'));
