function solution(my_string) {
    const lowerStr = my_string.toLowerCase().split("")
    const sortStr = lowerStr.sort().join("")
    return sortStr;
}