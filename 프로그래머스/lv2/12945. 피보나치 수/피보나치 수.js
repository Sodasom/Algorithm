function solution(n) {
   const fibonacci = [0, 1];
    if(n <= 1) {
        return fibonacci[n];
    } else {
        for(let i = 2; i <= n; ++i) {
            fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567
        }
        return fibonacci[n];
    }
}    
