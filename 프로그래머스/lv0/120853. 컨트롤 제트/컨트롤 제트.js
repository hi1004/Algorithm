function solution(s) {
    var answer = [0]
    const nums = s.split(' ');
    nums.forEach(item=>{
        if(item === 'Z') {
            answer.pop()
        } 
        answer.push(item)
    })
    
    return answer.filter(item => item !== 'Z').map(Number).reduce((a,b)=>a+b,0);
}