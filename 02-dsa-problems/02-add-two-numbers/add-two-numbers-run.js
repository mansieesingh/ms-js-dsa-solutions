const { ListNode, addTwoNumbers, printLinkedList, linkedListFromArray, arrayFromLinkedList } = require('./add-two-numbers');

const ll_1 = linkedListFromArray([1, 2, 3]);
const ll_2 = linkedListFromArray([4, 5, 6]);


const sum_ll = addTwoNumbers(ll_1, ll_2);
printLinkedList(sum_ll);





const sum_arr = arrayFromLinkedList(sum_ll);
console.log(sum_arr)