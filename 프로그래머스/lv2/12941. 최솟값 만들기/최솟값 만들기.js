function solution(A,B){
    var answer = 0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    const arr = A.map((n,i)=> {
        return n*B[i]
    })


    return arr.reduce((a,b)=>a+b,0);
}