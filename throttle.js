function throttle(func, wait) {
    let lastTime;

    return (...args) => {
        const now = new Date().getTime();
        if (now - lastTime < wait) return;
        lastTime = now;
        return func(...args);
    }
}
/////////////////////////////////////////////////

function opThrottle(func,  wait,  options = {}) {
    let lastTime = false;

    return (...args) => {
        if (lastTime) return

        lastTime = true
        if (options?.leading) {
            func(...args)
        }
        setTimeout(() => {
            if  (!options?.leading && options?.trailing) {
            return func(...args);
            }
            lastTime = false;
        },  wait)
    }
}