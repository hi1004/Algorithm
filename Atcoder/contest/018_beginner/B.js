const Main = line => {
  let str = line[0];
  const n = line[1];

  for (let i = 0; i < n; i++) {
    const [idx1, idx2] = line[i + 2].split(' ').map(Number);
    str =
      str.substring(0, idx1 - 1) +
      str
        .substring(idx1 - 1, idx2)
        .split('')
        .reverse()
        .join('') +
      str.substring(idx2, str.length);
  }
  console.log(str);
};
Main(require('fs').readFileSync('./input.txt', 'utf8').split('\n'));
