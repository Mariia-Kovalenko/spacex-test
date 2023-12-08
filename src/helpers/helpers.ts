export const chunck = (arr: any[], n: number) => {
    if (arr.length <= n) {
        return arr;
    }
    const result: any[] = [];
    arr.reduce((acc, curr, i) => {
        if (acc.length < n) {
            if (i === arr.length - 1) {
                result.push([...acc, curr]);
            }
            return [...acc, curr];
        } else {
            result.push(acc);
            if (i === arr.length - 1) {
                result.push([curr]);
            }
            return [curr];
        }
    }, []);
    return result;
};