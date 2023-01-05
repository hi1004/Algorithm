function solution(arr, divisor) {
   
    const answer = arr.filter(n => {
        if(n%divisor === 0) {
            return n
        }
    })
    answer.sort((a,b)=>a-b)
    return answer.length ? answer : [-1];
}