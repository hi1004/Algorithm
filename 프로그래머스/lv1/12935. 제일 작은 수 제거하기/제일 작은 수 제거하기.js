function solution(arr) {

    const min = arr.reduce((a,b) => {
        return Math.min(a,b)
    },arr[0])
    const answer = arr.splice(arr.indexOf(min), 1)
   
    return arr.length === 0 ? [-1] : arr
}