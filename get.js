function get(src, path) {
    const pathParts = path.split('.');
    for (const part of pathParts) {
        if (!src[part]) {
            return undefined
        }
        src = src[part];
    }
    return src;
}
