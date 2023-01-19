function solution(t, p) {
    const strArr = [...t];
    const answer = []
    for(let i = 0; i<strArr.length; i++) {
      const num =  strArr.slice(i,p.length+i).join('')
        if(num.length === p.length) {
              answer.push(num);
        }
    }
    return answer.filter(n=>Number(p)>=Number(n)).length;
}