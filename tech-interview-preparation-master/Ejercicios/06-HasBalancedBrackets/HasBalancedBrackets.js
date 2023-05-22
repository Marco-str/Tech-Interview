


function HasBalancedBrackets (string) {


  // Your code here:

const stackSolution = [];

for (let i = 0; i < string.length; i++) {
if (string[i] === "{") stackSolution.push ( "}")
else if (string[i] === "[") stackSolution.push ("]")
else if (string[i] === "(") stackSolution.push (")")
else if (stackSolution.pop() !== string[i]) return false;


}
return !stackSolution.length//<---nos devuleve true si eesta vacio y si tieene algo, false



}

module.exports = HasBalancedBrackets
