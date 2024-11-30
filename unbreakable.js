function split(x, sp) {
    let res = [];
    let word = "";
    for (let i = 0; i < x.length; i++) {
        if (sp === '') {
            res.push(x[i]);
            continue;
        }
        if (x.slice(i, i + sp.length).includes(sp)) {
            res.push(word);
            word = "";
            i += sp.length - 1;
            continue;
        }
        word += x[i];
    }

    if (word !== "") {
        res.push(word);
    }

    if (x.slice(x.length - sp.length).includes(sp) && sp !== '') {
        res.push('');
    }

    if (res.length === 0) {
        res.push('');
    }

    return res;
}

function join(str, sp) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (i < str.length - 1) {
            result += sp;
        }
    }
    return result;
}
