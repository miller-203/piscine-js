function forEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}

// function double(str) {
//     return str * 2;
// }

// console.log(forEach([1, 2, 3, 4], double))