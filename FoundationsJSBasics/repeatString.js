// Checking if += operator works with strings ... it does!
function repeatString(str, n) {
    let output = str;
    for (let i = 1; i < n; i++) {
        output += str;
    }
    return output;
}

console.log(repeatString('hey', 6))
