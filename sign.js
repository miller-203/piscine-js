function sign(nbr) {
    if (nbr > 0) {
        return 1;
    } else if (nbr < 0) {
        return -1;
    }
    return 0;
}
function sameSign(a, b) {
    return sign(a) === sign(b);
}