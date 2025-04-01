class Node {
    constructor(data = 0, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert a new node at the head (beginning) of the list
    insertAtHead(data) {
        /*
        Before:  [head] → A → B → C
        Insert:  [new] → [head] → A → B → C
        */
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert a new node at the end of the list
    insertAtEnd(data) {
        /*
        Before:  [head] → A → B → C → null
        Insert:  [head] → A → B → C → [new] → null
        */
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // Insert a new node at a specific index
    insertAt(data, index) {
        /*
        Before:  [head] → A → B → C → D → null
        Insert at index 2:
        After:   [head] → A → B → [new] → C → D → null
        */
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }

        if (index === 0) {
            this.insertAtHead(data);
        } else {
            let previous, current = this.head;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            const node = new Node(data, current);
            previous.next = node;
            this.size++;
        }
    }

    // Remove a node from a specific index
    removeFrom(index) {
        /*
        Before:  [head] → A → B → C → D → null
        Remove at index 2:
        After:   [head] → A → B ------> D → null
        */
        if (index < 0 || index >= this.size || !this.head) {
            console.log("Invalid index");
            return;
        }

        let current = this.head;

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let previous;
            let count = 0;

            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // Print the linked list
    print() {
        /*
        Example:
        [head] → 500 → 400 → 300 → 2222 → 200 → 100 → 6600 → null
        */
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


module.exports = { Node, LinkedList };
