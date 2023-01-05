function solution(numbers) {

    const nums = Array.from({length:10},(_,i)=>i)
    const answer = nums.filter(n=>!numbers.includes(n)).reduce((a,b)=>a+b,0)
    return answer;
}