function filterShortStateName(arr) {
    return arr.filter((x) => x.length < 7);
}

function filterStartVowel(arr) {
    let res = [];
    arr.filter((x) => {
        if (/^[auoieAOUIE]/.test(x[0])) {
            res.push(x);
        }
    });
    return res;
}

function filter5Vowels(arr) {
    let res = [];
    let cont = 0;
    arr.filter((x) => {
        for (let i = 0; i < x.length; i++) {
            if (/[auoieAOUIE]/.test(x[i])) {
                cont++;
            }
        }
        if (cont >= 5) {
            res.push(x);
        }
        cont = 0;
    });
    return res;
}

function filter1DistinctVowel(arr) {
    let res = [];
    let cmp = [];
    let check = true;
    arr.filter((x) => {
        for (let i = 0; i < x.length; i++) {
            if (/[auoieAOUIE]/.test(x[i])) {
                cmp.push(x[i].toLowerCase())
            }
        }
        for (let i = 1; i < cmp.length; i++) {
            if (cmp[i] === cmp[i - 1]) {
                check = true;
            } else {
                check = false;
                break;
            }
        }
        if (check) {
            res.push(x);
        }
        cmp.length = 0;
    });
    return res;
}

function multiFilter(arr) {
    let res = [];
    arr.filter((x) => {
        if (checkLength(x.capital) && !checkVowelFirst(x.name) && checkVowel(x.tag) && x.region !== "South") {
            res.push(x);
        }
    });
    return res;
}

function checkLength(str) {
    return str.length >= 8;
}

function checkVowelFirst(str) {
    if (/[auoieAOUIE]/.test(str[0])) {
        return true;
    }
    return false;
}

function checkVowel(str) {
    for (let i = 0; i < str.length; i++) {
        if (/[auoieAOUIE]/.test(str[i])) {
            return true;
        }
    }
    return false;
}

// console.log(multiFilter([
//     { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
//     { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
//     {
//       tag: 'MO',
//       name: 'Missouri',
//       capital: 'Jefferson City',
//       region: 'Midwest',
//     },
//     {
//       tag: 'PA',
//       name: 'Pennsylvania',
//       capital: 'Harrisburg',
//       region: 'Northeast',
//     },
//     {
//       tag: 'RI',
//       name: 'Rhode Island',
//       capital: 'Providence',
//       region: 'Northeast',
//     },
//     {
//         tag: 'SC',
//         name: 'South Carolina',
//         capital: 'Col',
//         region: 'South',
//     }
//   ]))