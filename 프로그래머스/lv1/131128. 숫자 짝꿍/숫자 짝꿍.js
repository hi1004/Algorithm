function solution(X, Y) {
    var answer = ''
    X = [...X];
    Y = [...Y];
     for(let i = 0 ; i < 10 ; i ++) {
        const curX = X.filter(a => Number(a) === i).length
        const curY = Y.filter(a => Number(a) === i).length
        answer+=String(i).repeat(Math.min(curX, curY))
    }
    if(!answer) return '-1'
    if(!Number(answer)) return '0'
    return [...answer].sort((a,b)=>b-a).join('')
}