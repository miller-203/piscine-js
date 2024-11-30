function flat(arr, x = 1) {
    if (x === 0) {
        return arr;
    }
    
    const result = [];
    for (const elem of arr) {
        if (Array.isArray(elem)) {
            result.push(...flat(elem, x - 1));
        } else {
            result.push(elem);
        }
    }
    return result;
}
