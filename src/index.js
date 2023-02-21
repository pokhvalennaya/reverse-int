module.exports = function reverse(n) {
    if (n < 0) {
        n = -n;
    }
    let array = Array.from(n.toString(), Number);
    let result = +array.reverse().join("");
    return result;
};
