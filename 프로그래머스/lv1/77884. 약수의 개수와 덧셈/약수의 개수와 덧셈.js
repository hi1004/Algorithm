function solution(left, right) {
    let answer = []
    for(let i = left; i<=right; i++) {
        const arrs = []
        for(let j = 1; j<=i; j++) {
            if(i%j === 0) {
                arrs.push(j)
            }
        }
     
        answer.push(arrs.length % 2 === 0 ? i : -i);
        
    }
    return answer.reduce((a,b)=>a+b,0);
}