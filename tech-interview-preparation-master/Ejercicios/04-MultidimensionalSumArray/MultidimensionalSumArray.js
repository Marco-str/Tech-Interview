


function mdArraySum (arr) {
  // Your code here:

  let result = 0

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])){
      result += mdArraySum(arr[i])
    } else {
      result += arr[i];
    }
    
  }
/*****************************************************************
 */

let result = 0

let queue = [...arr]

while (queue.length > 0) {
let current = queue.shift()  // queue= [] current = [[2,4], 3, [1]]
for (let i = 0; i < current.length; i++) {
  if(Array.isArray(current[i])){
    queue.push(current[i]) // queue = [[2,4]]
  }else {
    result = result + current[i] // result = 0 + 3|
  }; 
 }
}
return result

}
//console.log(mdArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
module.exports = mdArraySum


// [[2,4],5,8,4,[5,6,7,[8,9,[10,11,12]]]]
// 2+4+5+8+4+5+6+7+8+9+10+11+12
// 91
