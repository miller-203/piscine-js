function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait);
    }
}
function opDebounce(func, wait, option = {}) {
    let timeout;
    let check = false;
    return function (...args) {
        const x = option.leading && !check
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            check = false
            if (!option.leading) {
                func(...args)
            }
        }, wait);
        if (x) {
            check = true;
            func(...args)
        }
    }
}