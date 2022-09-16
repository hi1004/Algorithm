const Main = line => {
  const n = Number(line[0]);

  const table = line.slice(1).map(val => val.split(' ').map(Number));

  const s = [];
  const e = [];
  const h = [];
  const l = [];

  table.forEach(arr => {
    s.push(arr[0]);
    e.push(arr[1]);
    h.push(arr[2]);
    l.push(arr[3]);
  });
  console.log(s[0], e[n - 1], Math.max(...h), Math.min(...l));
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
