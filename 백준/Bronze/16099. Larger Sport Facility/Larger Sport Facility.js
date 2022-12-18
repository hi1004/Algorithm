process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);

});
reader.on('close', () => {
    const n = Number(lines[0]);
   for (let i = 1; i <= n; i++) {
    const [lt, wt, le, we] = lines[i].split(' ').map(Number);

    if (lt * wt > le * we) {
      console.log('TelecomParisTech');
    } else if (lt * wt < le * we) {
      console.log('Eurecom');
    } else {
      console.log('Tie');
    }
  }
});