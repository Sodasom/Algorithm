function solution(n) {
    const result = [];
    for(let i = 0; i < n; ++i) {
        if(n % i === 1) result.push(i);
    }
    return Math.min.apply(null, result);
}