function DecimalToBynary(num) {
  // Your code here:
  let binary = "";
  while (num) {
    // 7  3  1  0
    binary = (num % 2) + binary; //  "1"+"00"
    num = Math.floor(num / 2);
  }
  return binary;
}

console.log("----num % 2---->", 1 % 2); // el resto entre 1 % 2 -> es 1
console.log("----Math.floor(1 / 2)---->", Math.floor(1 / 2)); // es 0 y se corta la recursión
console.log(DecimalToBynary(4)); // .to.equal('100')
console.log(DecimalToBynary(7)); // .to.equal('111')

function DecimalToBynaryRec(num) {//  7  3   1   0
  // Your code here:             
  let binary = "";       
  if (num) {  
    binary = binary + DecimalToBynaryRec(Math.floor(num / 2)) + (num % 2);
  }
  return binary;
}

console.log(DecimalToBynaryRec(4)); // .to.equal('100')
console.log(DecimalToBynaryRec(7)); // .to.equal('111')

module.exports = DecimalToBynary;