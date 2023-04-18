function solution(n) {
    const result = [1, 2];
    if(n === 1) return result[0];
    if(n === 2) return result[1];
    
    for(let i = 2; i < n; ++i) {
        result[i] = (result[i - 2] + result[i - 1]) % 1234567
    }
    return result[n - 1];
}