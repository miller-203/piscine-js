function interpolation(obj) {
    let start = 0
    let interval = setInterval(() => {

        let d = obj.start + start * (obj.end - obj.start) / obj.step
        let t = (start + 1) * obj.duration / obj.step
        obj.callback([d, t])

        start++
        if (start === obj.step) clearInterval(interval)
    }, obj.duration / obj.step)
}