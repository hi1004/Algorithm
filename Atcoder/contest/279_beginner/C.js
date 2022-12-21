function main(input) {
  const rotate = a => a[0].map((_, c) => a.map(r => r[c]));

  const args = input.split('\n');
  let info = args[0].split(' ').map(x => x * 1);

  let arr0 = rotate(args.slice(1, info[0] + 1).map(x => x.split('')))
    .map(x => x.join(''))
    .sort()
    .join('');
  let arr1 = rotate(args.slice(1 + info[0]).map(x => x.split('')))
    .map(x => x.join(''))
    .sort()
    .join('');

  console.log(arr0 === arr1 ? 'Yes' : 'No');
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
