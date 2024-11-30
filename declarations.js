const escapeStr = "`,\\/\"'";
const arr  = [4, '2'];
const obj = {
    str: "Hello",
    num: 42,
    bool: true,
    undef: undefined,
};
const nested = {
    arr: ([4, undefined, '2']),
    obj: ({
        str: "Nested String",
        num: 100,
        bool: false
    })
};
Object.freeze(nested,nested.obj,nested.arr);