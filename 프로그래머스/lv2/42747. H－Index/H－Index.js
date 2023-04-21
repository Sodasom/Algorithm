function solution(citations) {
    // 내림차순 정렬
    const sortCitations = citations.sort((a, b) => b - a);
    // f가 위치보다 크거나 같은 마지막 위치 ..?
    for(let i = 0; i < sortCitations.length; ++i) {
        if(sortCitations[i] <= i) return i;
    }
    return sortCitations.length;
}