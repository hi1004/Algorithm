function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  console.log(str.slice(1, -1));
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return [str.slice(-1), str[0]];
}

console.log(isPalindrome('abcde'));
