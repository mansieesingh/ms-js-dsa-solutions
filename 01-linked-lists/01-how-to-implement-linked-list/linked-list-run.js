const { Node, LinkedList } = require('./linked-list');


const ll = new LinkedList();

ll.insertAtHead(100);
ll.insertAtHead(200);
ll.insertAtHead(300);
ll.insertAtHead(400);
ll.insertAtHead(500);

ll.print();

const middleOne = ll.findMiddleNode();
console.log("Middle Node : ", middleOne)

ll.insertAtEnd(6600)
ll.insertAt(2222, 2);
ll.removeFrom(4);
// ll.print();

