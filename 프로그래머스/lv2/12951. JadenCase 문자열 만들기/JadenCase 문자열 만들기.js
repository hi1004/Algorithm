function solution(s) {

    const regex = /^[0-9]/g
    const str = s.split(' ');
    let result = str.map(x=> x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());


  
    return result.join(' ');
}