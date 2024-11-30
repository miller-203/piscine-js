function pick(obj, arr) {
    let res = {};
    if (typeof arr === 'string') {
        arr = [arr];
    }
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            res[arr[i]] = obj[arr[i]];
        }
    }
    return res;
}

function omit(obj, arr) {
    let res = {};
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && !arr.includes(key)) {
            res[key] = obj[key];
        }
    }
    
    return res;
}
