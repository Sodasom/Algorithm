function solution(people, limit) {
    // 보트에 탈 수 있는 사람 최대 2명
    let result = 0;
    people.sort((a, b) => b - a);
    for(let i = 0, j = people.length - 1; i <= j; ++i) {
        if(people[i] + people[j] <= limit) j--;
        result++;
    }
    return result;
}