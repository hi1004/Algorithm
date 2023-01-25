function solution(score) {
    var answer = [];
    const avg = score.map(s => s.reduce((a,b)=>a+b,0)/2)
    const new_avg = [...avg]

    const collection = {};
    const duplication = {};
    
    for(let val of new_avg) {
        duplication[val] = (duplication[val]|0) +1 
    }
    for(let  [index,val] of [...new Set(avg.sort((a,b)=>b-a).entries())]) {
             collection[val] = index+1  
    }
    for(let key in collection) {
        if(duplication[key]>=2){
            collection[key] -= duplication[key]-1
        }
    }



    return new_avg.map(n =>collection[n]);
}