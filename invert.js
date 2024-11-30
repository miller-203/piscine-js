function invert(obj) {
    let result = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];
            result[value] = key;
        }
    }
    return result;
}

// console.log(invert({ f: 5, __proto__: { d: 6 } }), { 5: 'f' });