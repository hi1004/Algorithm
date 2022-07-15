const foo = [
  0, 0.3, 1.6, 3.4, 5.5, 8.0, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7,
];

const kakudo = [
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
  'N',
];

function Main(input) {
  // 1行目がinput[0], 2行目がinput[1], …に入る
  input = input.split(' ');
  let a = parseInt(input[0]); //角度
  let b = parseInt(input[1]);
  if (changeFoo(b) === 0) {
    console.log('C ' + changeFoo(b));
  } else {
    console.log(changeKakudo(a) + ' ' + changeFoo(b));
  }
}

function changeFoo(num) {
  num = Math.round((num / 60) * 10) / 10;
  for (let i = 12; i >= 0; i--) {
    if (foo[i] <= num) {
      return i;
    }
  }
}

function changeKakudo(num) {
  if (num < 112.5 || num > 3487.5) {
    return 'N';
  }
  return kakudo[Math.floor((num - 112.5) / 225)];
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
