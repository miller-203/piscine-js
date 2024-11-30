function filterEntries(obj, filter) {
    const filtered = {}
    for (const key in obj) {
        if (filter([key, obj[key]]) && obj.hasOwnProperty(key)) {
            filtered[key] = (key, obj[key])
        }
    }
    return filtered
}
function mapEntries(obj, func) {
    let obj1 = {};
    for (let [key, val] of Object.entries(obj)) {
        const [newKey, newVal] = func([key, val]);
        obj1[newKey] = newVal;
    }
    return obj1;
}
function reduceEntries(obj, reduce, init) {
    let result = ""
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result = reduce(result, [key, obj[key]])
        }
    }
    return result + init
}

function totalCalories(obj) {
    let result = 0
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += (obj[key] / 100) * (nutritionDB[key].calories)

        }
    }
    return parseFloat(result.toFixed(2))
}
function lowCarbs(obj) {
    let result = {}
    for (const key in obj) {
        if (((obj[key] / 100) * (nutritionDB[key].carbs)) < 50) {
            result[key] = (obj[key])
        }
    }
    return result
}
function cartTotal(obj) {
    const filtered = {};
    
    for (const key in obj) {
        if (nutritionDB[key]) { 
            const quantity = obj[key];
            
            if (!filtered[key]) {
                filtered[key] = { calories: 0, carbs: 0, fat: 0, fiber: 0, protein: 0, sugar: 0 };
            }

            filtered[key].calories += parseFloat(((nutritionDB[key].calories * quantity)/100).toFixed(3));
            filtered[key].carbs += parseFloat(((nutritionDB[key].carbs * quantity)/100).toFixed(3));
            filtered[key].fat += parseFloat(((nutritionDB[key].fat * quantity)/100).toFixed(3));
            filtered[key].fiber += parseFloat(((nutritionDB[key].fiber * quantity)/100).toFixed(3));
            filtered[key].protein += parseFloat(((nutritionDB[key].protein * quantity)/100).toFixed(3));
            filtered[key].sugar += parseFloat(((nutritionDB[key].sugar * quantity)/100).toFixed(3));
        }
    }

    return filtered;
}

// const nutritionDB = {
//     tomato: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
//     vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
//     oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
//     onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
//     garlic: { calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5 },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89 },
//     sugar: { calories: 387, protein: 0, carbs: 100, sugar: 100, fiber: 0, fat: 0 },
//     orange: { calories: 49, protein: 0.9, carbs: 13, sugar: 9, fiber: 0.2, fat: 0.1 },
// }

// const groceriesCart = { orange: 500, onion: 20, sugar: 480 }


// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))
