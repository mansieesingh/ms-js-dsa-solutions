// Brute Force Approach
// We generate all possible substrings using two loops:
// 1. The outer loop (`i`) picks the starting character of the substring.
// 2. The inner loop (`j`) expands the substring and checks for duplicates.
// If a duplicate is found within the substring, we break out of the inner loop and move to the next starting position.
// For each valid substring (without duplicates), we update the maximum length if necessary.
// This approach checks all substrings, resulting in O(n²) time complexity due to nested loops.


function longestStringBruteForce(s) {
    let maxLength = 0;
    let longestString = ''

    for (let left = 0; left < s.length; left++) {
        const longestStringSet = new Set();
        for (let right = left; right < s.length; right++) {
            // Found duplicate, shift the left pointer towards right
            if (longestStringSet.has(s[right])) break;

            longestStringSet.add(s[right]);
            if (maxLength < right - left + 1) {
                longestString = [...longestStringSet].join('')
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }
    }
    return { length: maxLength, longestString };
}

// Sliding Window Approach
// Instead of starting a new loop for every index, we use a Set and a while loop inside a single pass (O(n)):

// The 'right' pointer expands the window by adding characters.
// If a duplicate is found, the 'left' pointer shrinks the window until the duplicate is removed.
// This way, we efficiently adjust the window without resetting everything.
// This replaces the outer loop from Brute Force by dynamically adjusting the window on the go. 🚀

function longestStringHashSet(s) {
    const longestStringSet = new Set();
    let longestString = '';
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {

        while (longestStringSet.has(s[right])) {
            longestStringSet.delete(s[left]);
            left++;
        }
        longestStringSet.add(s[right]);
        if (maxLength < right - left + 1) {
            longestString = [...longestStringSet].join('')
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return { length: maxLength, longestString };
}

module.exports = { longestStringBruteForce, longestStringHashSet }