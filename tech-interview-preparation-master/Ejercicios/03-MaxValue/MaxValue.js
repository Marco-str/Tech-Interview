

// [4, 3, 2, 5, 11]
//comprando en 2 y vendiendo en 11
// 11 - 2 = 9 mayor ganancia obtenida

function MaxValue (shares) {
  // Your code here:

let difMax = 0
//------------------------------------------------------------
// for (let i = 0; i < shares.length - 1; i++)
// for ( let j= i+length; j < shares.length; j++)
// if (shares[i]< shares[j]){
//   const newDif = shares[j] - shares[i]
//   difMax = newDif > difMax ? newDif : difMax
// }

// //------------------------------------------------------------
for (let i = 0; i < shares.length; i++) {
  for (let j = i+1; j < shares.length; j++) {
    if (shares[j] - shares[i] > difMax) {
      difMax = shares[j] - shares[i]
    }
  }
}
// //------------------------------------------------------------

// minValue= shares[0]
// for (let i = 1; i < shares.length; i++) {
//   if(shares[i] - minValue > difMax){
//     difMax = arr[i] - minValue

//     }
//       if(shares[i] < minValue){
//         minValue = shares[i]
//         }
//     }
return difMax
}

module.exports = MaxValue
