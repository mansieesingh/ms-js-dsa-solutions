# Two Sum Problem

## Problem Statement
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

### Constraints:
- Each input will have **exactly one solution**.
- You may not use the same element twice.
- You can return the answer in any order.

## Examples

### Example 1
**Input:**
```plaintext
nums = [2,7,11,15], target = 9
```
**Output:**
```plaintext
[0,1]
```
**Explanation:** Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

### Example 2
**Input:**
```plaintext
nums = [3,2,4], target = 6
```
**Output:**
```plaintext
[1,2]
```

### Example 3
**Input:**
```plaintext
nums = [3,3], target = 6
```
**Output:**
```plaintext
[0,1]
```

## Constraints
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only **one valid answer** exists.

## Optimization
The brute force approach of checking all pairs results in **O(n²)** time complexity. A more optimal approach is to use a **hash map**, which allows achieving **O(n)** time complexity.

