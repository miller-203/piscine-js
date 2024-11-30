function groupPrice(str) {
    const regex = /(\$|USD)(\d+)\.(\d+)/g;
    const matches = [];
    let match;

    while ((match = regex.exec(str)) !== null) {
        matches.push([match[0], match[2], match[3]]);
    }

    return matches;
}