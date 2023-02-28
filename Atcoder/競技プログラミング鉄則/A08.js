const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);

// 累積和
const Z = Array.from(Array(H + 1), () => new Array(W + 1).fill(0));

// 横方向の累積和
for (let i = 1; i <= H; i += 1) {
  const X = input[i].split(' ').map(Number);
  for (let j = 1; j <= W; j += 1) {
    Z[i][j] = Z[i][j - 1] + X[j - 1];
  }
}

// 縦方向の累積和
for (let i = 1; i <= H; i += 1) {
  for (let j = 1; j <= W; j += 1) {
    Z[i][j] += Z[i - 1][j];
  }
}

// クエリ処理
// 入力
const Q = Number(input[H + 1]);

// 出力
for (let i = 1; i <= Q; i += 1) {
  const [a, b, c, d] = input[H + i + 1].split(' ').map(Number);

  console.log(Z[c][d] + Z[a - 1][b - 1] - Z[c][b - 1] - Z[a - 1][d]);
}
