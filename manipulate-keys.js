function filterKeys (obj, filter) {
    const filtered = {}
    for (const key in obj) {
      if (filter(key) && obj.hasOwnProperty(key)) {
        filtered[key] = obj[key]
      }
    }
    return filtered
  }
  
  function mapKeys (obj, map) {
    let result = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[map(key)] = obj[key]
      }
    }
    return result
  }
  
  function reduceKeys(obj, callback, initialValue) {
    let undef = false;
    if (initialValue === undefined) {
        initialValue = "";
        undef = true;
    }
    let res = Object.keys(obj).reduce((acc, curr) => {
        return callback(acc, curr, initialValue);
    }, initialValue);
    if (typeof res !== "number") {
        if (res.slice(0, 2) === ", ") res = res.slice(2);
        if (undef && res[0] === ":") res = res.slice(1);
    }
    return res;
}
  
// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
// console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
  