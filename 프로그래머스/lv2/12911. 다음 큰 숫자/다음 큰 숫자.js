function solution(n) {
    const binaryN = n.toString(2).match(/1/g).length;
    while(n++) {
        const binaryNplus = n.toString(2).match(/1/g).length;
        if(binaryN === binaryNplus) return n;
    }
}