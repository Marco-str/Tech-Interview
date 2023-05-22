function BinaryToDecimal(binary) {
  // "101"
  // Your code here:
  let sum = 0;
  var index = 0;
  var pow = binary.length - 1;
  while (pow >= 0) { // (index < binary.length) {
    sum += Math.pow(2, pow) * binary[index];
    pow--;
    index++;
  }
  return sum;
}
// O(n)

/*
1.
2.
3.
4.¿?
5.
​
6. pseudo
*/

console.log(BinaryToDecimal("10")); // .to.equal(2)
console.log(BinaryToDecimal("111")); // .to.equal(7)
console.log(BinaryToDecimal("11010")); // .to.equal(26)

module.exports = BinaryToDecimal;

//
// for i=0 binary   j=length -1 = 2
//
// 1 * 2**2 +  0 * 2**1 + 1 * 2**0
// 4 + 0 + 1 = 5
// i++ j--