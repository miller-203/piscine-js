function arrToStr(arr) {
    return arr.join('');
}
function setToArr(set) {
    return [...set];
}
function strToArr(str) {
    return str.split('');
}
function setToStr(set) {
    return [...set].join('');
}
function arrToSet(arr) {
    return new Set(arr);
}
function strToSet(str) {
    return new Set(str);
}
function mapToObj(map) {
    return Object.fromEntries(map);
}
function objToArr(obj) {
    return Object.values(obj);
}
function objToMap(obj) {
    return new Map(Object.entries(obj));
}
function arrToObj(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i];
    }

    return obj;
}
function strToObj(str) {
    const charArray = str.split('');
    const obj = {};
    for (let i = 0; i < charArray.length; i++) {
        obj[i] = charArray[i];
    }

    return obj;
}
function superTypeOf(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    
    if (value instanceof Map) return 'Map';
    if (value instanceof Set) return 'Set';
    if (Array.isArray(value)) return 'Array';
    if (value instanceof String) return 'String';
    if (value instanceof Number) return 'Number';
    if (value instanceof Boolean) return 'Boolean';
    if (typeof value === 'function') return 'Function';
    
    const typeOfValue = typeof value;
    if (typeOfValue === 'object') return 'Object';
    
    return typeOfValue.charAt(0).toUpperCase() + typeOfValue.slice(1);
  }