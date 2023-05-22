
      
                            //        i j
function SumArray (arr, n) { //[1,2,3,4,5]
  // Your code here:

for (let index = 0; index < arr.length - 1; index++) {

  for (let j = index + 1; j < arr.length; j++) {

    if(n === arr[index] + arr[j]){

      return true;

    }
  }
}
return false;

}

/*
otraforma menos eficiente ( no sirve si esta desordenado)
//    i j                              j
//                              i
function SumArray (arr, n) { //[1,2,3,4,5]
  // Your code here:

let izq = 0;
let der = arr.length - 1;

while(izq < der){

  if(n === arr[izq] + arr[der]){
    return true;
  }else if(n > arr[izq] + arr[der]){
    izq++;
  }else{
    der--;
  }
}


return false;

}
/*
[2,3,4,5,9], 9

i + d = 11  > 9  d--
i + d = 7 < 9 i++
i + d = 9 = 9 return true


 */













console.log(SumArray([1,2,3,4,5], 3)); //true

console.log(SumArray([1,2,3,4,5], 7)); // true

/*
Existen dos valores
arreglo: [2,4,5,9]
número: 9
return: true
No existen dos valores
arreglo: [2,4,5,9]
número: 12
return: false
*/

module.exports = SumArray
