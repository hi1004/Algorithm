let [h, m] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(':')
  .map(Number);

(function solution() {
  const minute = 0 <= m && m < 60 ? m : '00';
  const hour = h < 0 || h >= 24 ? '00' : h;
  const timeHour =
    Number(hour - 8) < 0 ? 24 + Number(hour - 8) : Number(hour - 8);
  const answer = `${timeHour}:${Number(minute)}`;
  console.log(answer);
})();
