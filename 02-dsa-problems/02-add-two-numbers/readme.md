# Add Two Numbers

## Problem Description

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Your task is to add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Problem Description (In-Depth Explanation)

Imagine you have two numbers, but instead of writing them down in the usual way, you write each digit down separately, in reverse order, and then link all these digits together into a chain where each link is a single digit. These chains are what we call linked lists in computer science, and each digit lives in its own node, a little container with the number and a pointer to the next digit in the list.

Now, let's say someone gives you two of these chains, both representing non-negative integers, and asks you to add these numbers together just like you would on a piece of paper. But here's the twist: the result should be presented in the same reversed chain format.


### Example 1:

**Input:**
```plaintext
l1 = [2, 4, 3]
l2 = [5, 6, 4]
```

**Output:**
```plaintext
 [7, 0, 8]
```
### Example 2:

**Input:**
```plaintext
l1 = [0]
l2 = [0]
```

**Output:**
```plaintext
 [0]
```

### Example 3:

**Input:**
```plaintext
l1 = [9, 9, 9, 9, 9, 9, 9]
l2 = [9, 9, 9, 9]
```

**Output:**
```plaintext
 [8, 9, 9, 9, 0, 0, 0, 1]
 ```