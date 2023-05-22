

function FindNeedle (haystack, needle) {
  // Your code here:

// let index= 6;

// let firstLetter = needle[0];
// let sizeNeedle = needle.length;

//   for (let i = 0; i < haystack.length; i++) {
        
//     if(firstLetter === haystack[i]){ //&& sizeNeedle<= haystack.length-i){

//       for (let j = 1; j < needle; j++) {
// //"e" !== "e"
//         if(needle[j] !== haystack[i+j]){
//           break; // corta la escalda del for j

          
//         }
//         if(needle.length -1 === j){
//           return i

//         }
//       }
//     }
//   }
// return -1;
//-----------------------------------------------------------------------------------------

let firstLetter = needle[0];
 let sizeNeedle = needle.length;

  for (let i = 0; i < haystack.length; i++) {
      
    if(firstLetter === haystack[i] && sizeNeedle<= haystack.length-i){

      if(haystack.slice(i, i+ sizeNeedle) === needle) {
        return i
    
            }
        }
    }
return -1; 
}


/*
1.Leer la consigna en el archivo README.md
2.Determinar la entrada y salida
3. Remarcar que no se puede usar
  - indexOf
  - includes
4. Hacer reflexion previa al problema y penasr la posible resolucion
5. Hacer Preguntas
6. 


Fuerza Bruta <--- buscar d emanera rapida la soucion, y luego optimizar, limpiar


par ala entrada react-redux, redux
tenemso el str1 para ver si se encuentra dentro del str2

 str1 = redux
length -> 5
r

 str2 = react-redux
str2.length

 r === str2[i]

 str1.length   -> 6

 


 redux


espera ---> 6

*/  
module.exports = FindNeedle
