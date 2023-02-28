function solution(my_string) {
    const changeStr = my_string.replace(/./g, str => str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase());
    return changeStr;
}