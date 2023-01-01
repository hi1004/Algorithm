function solution(spell, dic) {
    var answer = 2;
    const regex = `[^${spell.join(',')}]`;
 
    dic.forEach(s=> {
     
        const arr = [...new Set(s.split(new RegExp(regex,'g')).join('').split(''))]
     
        if(arr.length === spell.length) {
            answer = 1;
        } 
    })
    return answer;
}