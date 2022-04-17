function promiseReduce(asyncFunctions, reduce, initialValue) {
    let memo = initialValue;

    return (async () => {
        for (let f of asyncFunctions) {
            let res = await f();
            memo = reduce(memo, res);
        }
    })()
        .then(() => memo);
}
