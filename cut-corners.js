function toInt(x) {
    if (x > 68719476735 || x < -68719476735) {
        let num = 0;
        if (x < 0) {
            while (x < -68719476735) {
                x += 68719476735;
                num -= 68719476735;
            }
            while (x < 0) {
                x += 1;
                num--;
            }
        } else {
            while (x > 68719476735) {
                x -= 68719476735;
                num += 68719476735;
            }
            while (x >= 1) {
                x -= 1;
                num++;
            }
        }
        return num;
    }

    if (x < 0 && x > -1) {
        return 0;
    }

    let neg = false;
    if (x < 0) {
        neg = true;
        x = -x;
    }

    let num = 0;
    while (x >= 1) {
        x -= 1;
        num++;
    }

    return neg ? -num : num;
}

function round(x) {
    if (x === 0) return 0;

    let neg = false;
    if (x < 0) {
        x = -x;
        neg = true;
    }

    const int = toInt(x);
    if (x - int < 0.5) {
        return neg ? -int : int;
    }
    return neg ? -(int + 1) : int + 1;
}

function floor(x) {
    if (x < 0) {
        const int = toInt(x);
        return x === int ? int : int - 1;
    }
    return toInt(x);
}

function trunc(x) {
    return toInt(x);
}

function ceil(x) {
    if (x === 0) return 0;

    if (x < 0) {
        return toInt(x);
    }

    const int = toInt(x);
    return x === int ? int : int + 1;
}
