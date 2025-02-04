function deepCopy(input) {
    if (Array.isArray(input)) {
        var output = [];
        for (var i = 0; i < input.length; i++) {
            output[i] = deepCopy(input[i]);
        }
        return output;
    } else if (typeof input === "object" &&
        !(typeof input === "function") &&
        !Array.isArray(input) &&
        input !== null &&
        !(input instanceof RegExp)) {
        var output = {};
        for (var key in input) {
            output[key] = deepCopy(input[key]);
        }
        return output;
    } else {
        return input;
    }
}
