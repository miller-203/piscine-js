function citiesOnly(arr) {
    let res = [];
        arr.map((x) => {
        if (typeof x === 'object' && !Array.isArray(x)) {
            for (const key in x) {
                if (key === 'city') {
                    res.push(x[key]);
                }
            }
        } else {
            res.push(x);
        }
    });
    return res;
}

function upperCasingStates(arr) {
    let res = [];
    arr.map((x) => {
        res.push(capitalize(x));
    });
    return res;
}

function capitalize(str) {
    let cap = str.split(' ')
    for  (let i = 0; i < cap.length; i++) {
        cap[i] = cap[i].charAt(0).toUpperCase() + cap[i].slice(1)
    }
    return cap.join(' ');
}

function fahrenheitToCelsius(arr) {
    let res = [];
    arr.map((x) => {
        res.push((Math.floor(((parseInt(x) - 32) * 5) / 9)) + "°C")
    });
    return res;
}

function trimTemp(arr) {
    arr.map((x) => {
        for (const key in x) {
            if (key === 'temperature') {
                x[key] = x[key].trim(' ').split(' ').join('')
            }
        }
    });
    return arr;
}

function tempForecasts(arr) {
    let res = [];
    arr.map((x) => {
        for (const key in x) {
            if (key === 'temperature') {
                res.push((Math.floor(((parseInt(x[key]) - 32) * 5) / 9)) + "°Celsius in " + x.city + ", " + capitalize(x.state))
            }
        }
    });
    return res;
}

// console.log(tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//   ]))