function solution(absolutes, signs) {
    var answer =  absolutes.map((n,i) => {
        if(signs[i]) return n
        else return -n
    })
   
    return answer.reduce((a,b)=>a+b,0);
}