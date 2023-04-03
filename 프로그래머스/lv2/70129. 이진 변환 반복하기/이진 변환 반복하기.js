function solution(s) {
    const result = [0, 0];
    
    while(s !== "1") {
        result[0] ++;
        result[1] += (s.match(/0/g) || []).length;
        s = s.match(/1/g).length.toString(2);
    }
    return result;
}