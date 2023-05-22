// Dada una suma objetiva, 'target' y un arreglo de números positivos:
// Devolvé true si cualquier combinación de números en el arreglo suma el target.
// Devolvé false si los números no pueden ser usados para sumar el target
​
// ### Primer Alternativa
//          [1, 10, 5, 3] , 9
function subsetSum(nums, target) {
  // Your code here:         [ 0, 1, 10,     5,            3 ]
  // nums [1, 10, 5, 3] -> [0, 1, 10, 11, 5, 6, 15, 16, 3, 4, 13, 14, 8, 9, 18, 19]
  const sums = [0]; //[ 0, 1, 10, 11, 5, 6, 15, 16, 3, 4, 13, 14, 8 ]   num
  return nums.some((num) => {
    // .some() es un iterador <- [1, 10, 5, 3]
    const copySums = [...sums]; // [ 0, 1, 10, 11, 5, 6, 15, 16 ]
    for (let sum of copySums) {
      const newSum = sum + num; // 9
      if (target === newSum) return true;
      // sums.push(newSum)
      if (newSum < target) sums.push(newSum);
    }
    // some return -> [false, false, false, false, false, false, false, false, false, true ]
    // -> true
  });
}
​
console.log(subsetSum([1, 10, 5, 3], 9)); // true
console.log(subsetSum([1, 10, 5, 3], 19)); // true
console.log(subsetSum([1, 10, 5, 3], 2)); // false
console.log(subsetSum([1, 10, 5, 3], 10)); // true
​
// ### Primer Alternativa Mejorada para que no se dupliquen los sum en el array sums
function subsetSumSet(nums, target) {
  const sums = new Set([0]);
  return nums.some((num) => {
    const copySums = [...sums];
    for (let sum of copySums) {
      const newSum = sum + num;
      if (target === newSum) return true;
      if (newSum < target) sums.add(newSum);
    }
  });
}
​
console.log(subsetSumSet([1, 10, 5, 3], 9)); // true
console.log(subsetSumSet([1, 10, 5, 3], 19)); // true
console.log(subsetSumSet([1, 10, 5, 3], 2)); // false
console.log(subsetSumSet([1, 10, 5, 3], 10)); // true
​
// ### Primer Alternativa Mejorada para dos for
function subsetSumSetDobleFor(nums, target) {
  const sums = new Set([0]);
  for (let num of nums) {
    const copySums = [...sums];
    for (let sum of copySums) {
      const newSum = sum + num;
      if (target === newSum) return true;
      if (newSum < target) sums.add(newSum);
    }
  }
  return false;
}
​
console.log(subsetSumSetDobleFor([1, 10, 5, 3], 9)); // true
console.log(subsetSumSetDobleFor([1, 10, 5, 3], 19)); // true
console.log(subsetSumSetDobleFor([1, 10, 5, 3], 2)); // false
console.log(subsetSumSetDobleFor([1, 10, 5, 3], 10)); // true
​
// ### Segunda Alternativa
function subsetSumMemoHash(nums, target) {
  const memoHash = { 0: true };
  for (let num of nums) {
    const copySums = { ...memoHash };
    for (let sum of Object.keys(copySums)) {
      // ["0", "1", ...]
      sum = Number(sum);
      const newSum = sum + num;
      if (target === newSum) return true;
      if (newSum < target) memoHash[newSum] = true;
      // console.log(memoHash);
    }
  }
  return false;
}
​
console.log(subsetSumMemoHash([1, 10, 5, 3], 9)); // true
console.log(subsetSumMemoHash([1, 10, 5, 3], 19)); // true
console.log(subsetSumMemoHash([1, 10, 5, 3], 2)); // false
console.log(subsetSumMemoHash([1, 10, 5, 3], 10)); // true
​
// ### Tercer Alternativa <- versión recursiva
​
// ### Extra ver si existe la posibilidad de que este algoritmo sea en complejidad O(n) ¿??
module.exports = subsetSum;
​
/*
nums.some((num)=> {
    if(num>5) return true
    // undefined -> false
  }) // [false, true, false, false, false] -> OR || -> true 
  // // [false, false, false, false, false] -> OR || -> false 
*/