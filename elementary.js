function multiply(a, b) {
    let x = 0;
    if (a < 0 && b < 0) {
        a = -a;
        b = -b;
    } else if (a < 0 && b > 0) {
            a = -a;
            for (let i = 0; i < b; i++) {
            x += a;
        }
        return -x;
    } else if (a > 0 && b < 0){
        for (let i = 0; i < -b; i++) {
            x += a;
        }
        return -x;
    }
    for (let i = 0; i < b; i++) {
        x += a;
    }
    return x;
}
function divide(a, b) {
    if (b != 0) {
        let x = 0;
        if (a < 0 && b < 0) {
            a = -a;
            b = -b;
        } else if (a < 0 && b > 0) {
            a = -a;
            for (let i = b; i <= a; i+=b) {
                x++;
            }
            return -x;
        } else if (a > 0 && b < 0){
            b = -b
            for (let i = b; i <= a; i+=b) {
                x++;
            }
            return -x;
        }
        for (let i = b; i <= a; i+=b) {
            x++;
        }
        return x;
    }
    return "NAN";
}
function modulo(a, b) {
    if (b != 0) {
        let x = 0;
        if (a < 0 && b < 0) {
            a = -a;
            b = -b;
            for (let i = b; i <= a; i+=b) {
                x++;
            }
            return -(a-(multiply(x, b)));
        } else if (a < 0 && b > 0) {
            a = -a;
            for (let i = b; i <= a; i+=b) {
                x++;
            }
            return (a-(multiply(x, b)));
        } else if (a > 0 && b < 0){
            b = -b
            for (let i = b; i <= a; i+=b) {
                x++;
            }
            return (a-(multiply(x, b)));
        }
        for (let i = b; i <= a; i+=b) {
            x++;
        }
        return a-(multiply(x, b));
    }
    return "NAN";
}