function solution(n) {
    let count = 0;
    for(let i = 1; i <= n; ++i) {
        if(n % i === 0 && i % 2 === 1) count++;
    }
    return count;
}