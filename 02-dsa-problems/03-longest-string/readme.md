# Longest Substring Without Repeating Characters

## Problem Statement
Given a string `s`, find the length of the longest substring without duplicate characters.

## Examples

### Example 1:
**Input:**
```plaintext
s = "abcabcbb"
```
**Output:**
```plaintext
3
```
**Explanation:**
The answer is "abc", with the length of 3.

---

### Example 2:
**Input:**
```plaintext
s = "bbbbb"
```
**Output:**
```plaintext
1
```
**Explanation:**
The answer is "b", with the length of 1.

---

### Example 3:
**Input:**
```plaintext
s = "pwwkew"
```
**Output:**
```plaintext
3
```
**Explanation:**
The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

---

## Constraints
- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols, and spaces.

## Approach
To solve this problem efficiently, we can use the **Sliding Window** technique with a **HashSet** or **Map** to keep track of unique characters in the substring.

### Algorithm
1. Initialize two pointers (`left` and `right`) and a **Set** to store characters.
2. Expand the `right` pointer until a duplicate character is found.
3. Remove characters from the left side until the duplicate is removed.
4. Keep track of the maximum length found.
5. Return the maximum length.

### Complexity Analysis
- **Time Complexity:** `O(n)`, where `n` is the length of the string.
- **Space Complexity:** `O(min(n, 128))` (as there are at most 128 ASCII characters).


