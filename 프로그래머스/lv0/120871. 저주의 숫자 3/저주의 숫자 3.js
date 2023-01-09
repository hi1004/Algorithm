function solution(n) {
    const answer = [];
    
    for(let i = 1; i<=n*2; i++) {
        if(i%3 !== 0 && !i.toString().split('').includes('3')) {
            answer.push(i)
        }
    }
    return answer[n-1];
    
}