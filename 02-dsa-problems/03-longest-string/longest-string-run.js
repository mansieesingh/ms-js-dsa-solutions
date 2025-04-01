const { longestStringBruteForce, longestStringHashSet } = require('./longest-string');

const checkString = 'pwwkew'; // 'bbbbb'; //'abcabcbb'; //'pwwkew';
// const { length, longestString } = longestStringBruteForce(checkString);
// console.log({ length, longestString })


const { length, longestString } = longestStringHashSet(checkString);
console.log({ length, longestString })