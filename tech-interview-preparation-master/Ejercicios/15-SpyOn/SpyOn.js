

function spyOn(fn) {

  let callCount = 0;
  const CalledWith = new Map
  const returnedMap = new Map

  const spy = (...args) => {
    callCount++;
    args.forEach(element => CalledWith.set(element, true));
    const result = fn(...args)
    returnedMap.set(result, "algo")
    return result
  }

  spy.getCallCount = () => callCount
  spy.wasCalledWith = (val) => !!CalledWith.get(val)
  spy.returned = (val) => !!returnedMap.get(val)
  
  return spy

}

module.exports = spyOn

// const adder = (n1, n2) => { // <-------- fn()
//   return n1 + n2 // <--- 2+3=5
// }

// adderSpy = spyOn(adder)

//  adderSpy(2, 3)
//  adderSpy(2, 4)
//  adderSpy(10, 5)
//  console.log(adderSpy.returned(5)) // (true)
//  console.log(adderSpy.returned(6)) // (true)
//  console.log(adderSpy.returned(15)) // (true)
//  console.log(adderSpy.returned(8)) // (false)
//  console.log(adderSpy.returned(7)) // (false)