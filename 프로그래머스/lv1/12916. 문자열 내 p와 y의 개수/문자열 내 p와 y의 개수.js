function solution(s){
    const matchP = s.match(/p/gi);
    const lengthP = matchP === null ? 0 : matchP.length;
    const matchY = s.match(/y/gi);
    const lengthY = matchY === null ? 0 : matchY.length;
    
    const result = lengthP === lengthY ? true : false;
    
    return result;
}