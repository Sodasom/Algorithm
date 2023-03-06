function solution(n) {
    let plusNum = 0;
    for(let i = 0; i <= n; ++i) {
        if(n % i === 0) plusNum = plusNum + i;
    }
    return plusNum;
}