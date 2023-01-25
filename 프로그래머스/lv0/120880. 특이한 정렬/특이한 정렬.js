function solution(numlist, n) {
    var answer = [];
 
    const collection = {};



    for( const [ i, val ] of numlist.entries() ) {
        collection[val] = Math.abs(n-numlist[i])
    }

    const arrs = Object.entries(collection).sort((a,b)=>Number(a[1])-Number(b[1]));
    
    for(let i = 0; i<arrs.length; i++) {
        for(let j = 1; j<arrs.length; j++) {
            if(arrs[i][1] === arrs[j][1]) {
                const temp = arrs[i]
                arrs[i] = arrs[j];
                arrs[j] = temp
                break;
            }
        }
    }

    return arrs.map(arr=> arr[0]).map(Number)
}