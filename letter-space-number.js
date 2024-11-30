function letterSpaceNumber(str) {
    const regex = /[a-zA-Z]\s[0-9](?![a-zA-Z0-9])/g;
    return str.match(regex) || [];
}
