function solution(brown, yellow) {
    // (brown + yellow) === x * y
    // x = (brown + yellow) / y or y = (brown + yellow) / x
    // yellow = (x - 2) * (y - 2)
    let result;
    for(let y = 3; y <= (brown + yellow) / y; ++y) {
        const x = (brown + yellow) / y;
        if((x - 2) * (y - 2) === yellow && (brown + yellow) === x * y) {
            result = [x, y];
            break;
        }
    }
    return result;
}