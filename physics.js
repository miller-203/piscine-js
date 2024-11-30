function getAcceleration(object) {
    const { f, m, Δv, Δt, t, d } = object;
    if (f && m) {
      return f / m;
    } else if (Δv && Δt) {
      return Δv / Δt;
    } else if (d && t) {
      return 2 * d / (t * t);
    }    return "impossible"
}