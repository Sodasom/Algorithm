function solution(a, b) {
    if(b < a) {
        const change = b;
        b = a;
        a = change;
    }
    
    let sum = 0;
    for(let i = a; i <= b; ++i){
        sum += i;
    }
    return sum;
}