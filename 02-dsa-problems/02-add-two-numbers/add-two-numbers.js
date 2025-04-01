/**
 * Represents a single node in a linked list.
 * Each node contains:
 *  - `data`: The value stored in the node.
 *  - `next`: A reference to the next node in the list.
 * 
 * Example:
 *  let node1 = new ListNode(5);
 *  let node2 = new ListNode(10);
 *  node1.next = node2;
 * 
 *  Graphically:
 *     [5] -> [10] -> null
 */
class ListNode {
    constructor(data = 0, next = null) {
        this.data = data;
        this.next = next;
    }
}

/**
 * Converts an array into a linked list.
 * Example: [1, 2, 3] -> 1 -> 2 -> 3 -> null
 * 
 * Steps:
 * 1. Create a dummy head node to simplify the logic.
 * 2. Iterate through the array and create new nodes.
 * 3. Link the nodes together to form a linked list.
 * 4. Return the head of the list (ignoring the dummy head).
 */
function linkedListFromArray(arr) {
    let dummyHead = new ListNode(); // Dummy node to simplify list construction
    let current = dummyHead;

    arr.forEach((item) => {
        current.next = new ListNode(item); // Create new node and link it
        current = current.next; // Move to the newly created node
    });

    return dummyHead.next; // Return the first actual node
}

/**
 * Prints the linked list in a readable format.
 * Example:
 *  Input: 1 -> 2 -> 3 -> null
 *  Output: 1 -> 2 -> 3 ->
 * 
 * Steps:
 * 1. Start from the head node.
 * 2. Iterate through the list and print each node's data.
 * 3. Move to the next node until reaching null.
 */
function printLinkedList(node) {
    let current = node;
    let result = "";
    while (current) {
        result += current.data + ' -> '
        current = current.next; // Move to next node
    }
    console.log(result + "null")
}

/**
 * Converts a linked list back into an array.
 * Example: 1 -> 2 -> 3 -> null  =>  [1, 2, 3]
 * 
 * Steps:
 * 1. Create an empty array.
 * 2. Traverse the linked list and push each node's value into the array.
 * 3. Return the array.
 */
function arrayFromLinkedList(node) {
    const arr = [];

    while (node) {
        arr.push(node.data); // Store node data in array
        node = node.next; // Move to next node
    }

    return arr;
}

function addTwoNumbers(l1, l2) {
    let resultListHead = new ListNode();
    let current = resultListHead;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = carry;

        if (l1) {
            sum += l1.data;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.data;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        current.next = new ListNode(digit);
        current = current.next
    }
    return resultListHead.next;
}


// Export functions for external usage
module.exports = { ListNode, addTwoNumbers, linkedListFromArray, printLinkedList, arrayFromLinkedList };
