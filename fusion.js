function fusion(obj1, obj2) {
    let result = {};

    function mergeValues(value1, value2) {
        if (Array.isArray(value1) && Array.isArray(value2)) {
            return value1.concat(value2);
        } else if (typeof value1 === 'string' && typeof value2 === 'string') {
            return value1 + ' ' + value2;
        } else if (typeof value1 === 'number' && typeof value2 === 'number') {
            return value1 + value2;
        } else if (typeof value1 === 'object' && typeof value2 === 'object') {
            return fusion(value1, value2);
        } else {
            return value2;
        }
    }

    for (let key in obj1) {
        result[key] = key in obj2 ? mergeValues(obj1[key], obj2[key]) : obj1[key];
    }
    
    for (let key in obj2) {
        if (!(key in result)) {
            result[key] = obj2[key];
        }
    }

    return result;
}

// console.log(fusion({ a: "hello", b: [] }, { a: 4 }));