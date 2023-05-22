


function intersection (arr1, arr2) {
  // Your code here:


const newArr = []

arr1.forEach(num1 =>{
  arr2.forEach(num2 => {
    if (num1 === num2){
      newArr.push(num1)
    }
  })
})
return newArr;


/******************************************************************** */

}

module.exports = intersection


function intersection2 (arr1, arr2){

  const newArr = []

let index1 = 0
let index2 = 0

while(index1 < arr1.length && index2 < arr2.length){

  if(arr1[index1] === arr2[index2]){
    newArr.push(arr1[index1])
    index1++
    index2++
}
else if (arr1[index1] < arr2[index2]){
  index1++
}
else{
  index2++

}
}

  return newArr;
}





function intersection3 (arr1, arr2){

  const hashDictionary = {}

  arr1.forEach(num => {
    hashDictionary[num] = true
  })
  console.log(hashDictionary[3]);// { '1': true, '3': true, '5': true, '7': true, '10': true }

  return arr2.filter(num2 => hashDictionary[num2]) // filter devuelve un array con los elementos que cumplan la condicion
// [10, 6, 20, 3, 2, 8] => [10, 3]

}
/* 
1 leer
2 definir inouts y outputs
3 consologear
4 ver los test y hardocdear
5 hacer las preguntas
 */