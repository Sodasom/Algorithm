function solution(A,B){
    // A 작은 순 배열
    const smallA = A.sort((a, b) => a - b);
    // B 큰 순 배열
    const bigB = B.sort((a, b) => b - a);
    
    const result = smallA.reduce((acc, cur, idx) => cur * bigB[idx] + acc, 0)
    
    return result;
}