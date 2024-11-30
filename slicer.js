function slice(input, start, end) {
    let result = [];
    if (typeof input === 'string') {
        if (end === undefined) {
            end = input.length;
        }
        if (start < 0) {
            start = input.length + start;
        }
        if (end < 0) {
            end = input.length + end;
        }
        for (let i = start; i < end; i++) {
            if (i >= 0 && i < input.length) {
                result.push(input[i]);
            }
        }
        return result.join('');
    }

    if (Array.isArray(input)) {
        if (end === undefined) {
            end = input.length;
        }
        if (start < 0) {
            start = input.length + start;
        }
        if (end < 0) {
            end = input.length + end;
        }
        for (let i = start; i < end; i++) {
            if (i >= 0 && i < input.length) {
                result.push(input[i]);
            }
        }
        return result;
    }
    return [];
}