function filterValues (obj, filter) {
  const filtered = {}
  for (const key in obj) {
    if (filter(obj[key]) && obj.hasOwnProperty(key)) {
      filtered[key] = obj[key]
    }
  }
  return filtered
}

function mapValues (obj, map) {
  let result = {}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = map(obj[key])
    }
  }
  return result
}

function reduceValues (obj, reduce, init = 0) {
  let result = 0
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result = reduce(result, obj[key])
    }
  }
  return result + init
}

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(reduceValues({ a: 1, b: 2, c: 3 }, (acc, cr) => acc + cr, 3))
