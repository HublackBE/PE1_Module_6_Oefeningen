function fib(max) {
    let fibList = [0, 1];

    for(let i = 0; fibList.length < max; i++) {
        fibList.push(fibList[i] + fibList[i+1]);
    }
    return fibList;
}

console.log(fib(10))