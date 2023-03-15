function solution(s) {
    // 문자열 s를 number type 배열로
    const arrS = s.split(' ').map(el => Number(el));
    // 배열에서 최대값 
    const maxEl = Math.max.apply(null, arrS);
    // 배열에서 최소값
    const minEl = Math.min.apply(null, arrS);
    // 최대값 최소값 문자열
    const minMax = `${minEl} ${maxEl}`
    
    return minMax;
}