function solution(polynomial) {
    var answer = ' ';
    let xCount = 0;
    let isOnlyNum = false;
    let num = 0;
    const arrs = polynomial.split(' + ')

    arrs.forEach(arr => {
        if(arr.includes('x')) {
            if(arr.split('x').join('') === '') {
             xCount += 1
            } else {
             xCount += Number(arr.split('x').join(''))
            }
        } else {
            isOnlyNum = true;
            num += Number(arr)     
        }    
    })
    if(arrs.length === 1) {
        answer = arrs[0]
    } else if(isOnlyNum) {
        if(xCount === 0) {
            answer = num.toString()
        }else if(xCount !== 1) {
          answer = `${xCount}x + ${num}`;
        } else {
          answer = `x + ${num}`;
        }
    } else {
        answer = `${xCount}x`
    }

    return answer;
}