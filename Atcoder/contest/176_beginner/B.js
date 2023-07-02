const main = args =>
  console.log(
    args
      .split('')
      .map(arg => Number(arg))
      .reduce((a, b) => a + b) %
      9 ===
      0
      ? 'Yes'
      : 'No'
  );
main(require('fs').readFileSync('./input.txt', 'utf8'));
