function solution(common) {
    var answer = 0;
    const arr = [common[0]]
    const a = common[1] - common[0];
    const b = common[1] / common[0];
      let x = common[0];
    for(let i = 1; i<=common.length; i++) {
             x=x*b
        if(common[i] === x) {
            arr.push(x)
        } 
    }
  
  

    return arr.length !== common.length? common[common.length-1] + a : common[common.length-1]*b;
}