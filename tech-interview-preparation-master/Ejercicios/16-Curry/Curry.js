

function curry (fn) {
  // Your code here:

  const args = [];

  return function henry (currentArg) {
    args.push(currentArg);
    if (args.length === fn.length) return fn(...args);
    return (nextArg) => henry(nextArg);


  }
  

}

module.exports = curry

const one = (a, b, c, e) => a + b + c+ e;


const curried = curry(one);
const curried2 = curried(10);
const curried3 = curried2(5);
const curried4 = curried3(2);
const curried5 = curried4(3);
const result = curried5(5);
console.log(result);