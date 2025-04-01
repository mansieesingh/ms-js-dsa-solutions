function twoSumBruteForce(list, target) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === target) {
                return [i, j]
            }
        }
    }
}

function twoSumHashMap(list, target) {
    const map = new Map();

    // Using a for loop instead of forEach because forEach does not allow early returns.
    // forEach does not respect return statements the way for loops do.
    // When you use return inside a forEach callback, it only exits that iteration
    // And it does not return a value from the outer function.

    for (let i = 0; i < list.length; i++) {
        const complement = target - list[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(list[i], i)
    }

}

module.exports = { twoSumBruteForce, twoSumHashMap };