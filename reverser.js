function reverse(str) {
    if (Array.isArray(str)) {
        let n = 0;
        let m = str.length - 1;
        while (n <= m) {
            let temp = str[n];
            str[n] = str[m];
            str[m] = temp;
            n++;
            m--;
        }
        return str;
    }
    if (typeof str === 'string') {
        let result = "";
        for (let i = str.length-1; i >= 0; i--) {
            result += str[i];
        }
        return result;
    }
}

console.log(reverse("hello"));