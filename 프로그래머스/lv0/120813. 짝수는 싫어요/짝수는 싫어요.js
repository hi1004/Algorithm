function solution(n) {
    const nums = Array.from(Array(n), (e,index)=> index+1)
    var answer = nums.filter(n=>n%2 !== 0)
    return answer;
}