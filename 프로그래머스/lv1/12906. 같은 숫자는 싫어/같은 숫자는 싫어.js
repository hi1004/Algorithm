function solution(arr)
{
    
    let answer = [];
    
     arr.forEach((item,index)=> {
        if ( index == 0) answer.push(item)
        else if( arr[index-1] !== item){
            answer.push(item)
        }
    })

    return answer;
}