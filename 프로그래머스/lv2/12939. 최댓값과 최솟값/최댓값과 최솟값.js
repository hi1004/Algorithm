function solution(s) {
    const str = s.split(' ');
    str.sort((a,b)=>a-b);
    const answer = [str[0], str[str.length-1]]
    
    return answer.join(' ');
}