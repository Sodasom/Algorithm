function solution(s) {
    // const result = s.replace(/\b[a-z]/g, str => str.toUpperCase());
    // return result;
    const arrS = s.split(" ").map(el => el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase());
    const strS = arrS.join(" ")
    return strS;
}