const Main = input => {
  const [n, r] = input[0].split(' ').map(Number);
  // 円の長さ
  const diameter = r * 2;
  // 入力値のboxを２次配列で作る。
  const boxs = input.slice(1).map(box => box.split(' ').map(Number));
  let flag = false;

  // 2重for文を使う
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 3; j++) {
      // 条件に円の長さより小さかったらflagはfalseになり、for文を中止する。
      if (boxs[i][j] >= diameter) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      console.log(i + 1);
    }
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
