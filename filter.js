function filter(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function reject(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function partition(arr, func) {
    let trueArr = [];
    let falseArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            trueArr.push(arr[i]);
        } else {
            falseArr.push(arr[i]);
        }
    }
    return [trueArr, falseArr];
}

