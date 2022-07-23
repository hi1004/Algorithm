const Main = input => {
  input = input.trim().split('\n');
  const [s, t] = input;

  const sArr = s.trim().split('');
  const tArr = t.split('');

  const str = 'atcoder';
  let flg = true;
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === '@') {
      sArr[i] = str.includes(tArr[i]) ? tArr[i] : ' ';
    }
    if (tArr[i] === '@') {
      tArr[i] = str.includes(sArr[i]) ? sArr[i] : ' ';
    }
    if (sArr[i] !== tArr[i]) {
      flg = false;
      break;
    }
  }

  console.log(flg ? 'You can win' : 'You will lose');
};
Main(require('fs').readFileSync('./input.txt', 'utf-8'));
