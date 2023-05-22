
// El reloj es de 12 horas
function clockMinuteAdder(time, minutesToAdd) {
  // ("11:20", 50)
  // Your code here:
  // separamos la hora y los minutos pasados por el str time
  const [hour, min] = time.split(":");
  const totalMin = minutesToAdd + Number(min); // totalMin = 70
  const totalHour = Math.floor(totalMin / 60) + Number(hour); // totalHour = 1 + 9 = 10
  const newMin = totalMin % 60; // 70 % 60 --> 10
  const newHour = ((totalHour - 1) % 12) + 1; // (12-1 % 12)+1 -> 12
  // let newHour = totalHour % 12 // if(newHour===0) newHour = 12
  // 9:9
  const fHour = newHour < 10 ? `0${newHour}` : newHour;
  const fMin = newMin < 10 ? `0${newMin}` : newMin;
  return `${fHour}:${fMin}`;
}

console.log(clockMinuteAdder("11:20", 50)); //.to.equal('12:10'))
console.log(clockMinuteAdder("09:00", 20)); //.to.equal('09:20'))
console.log(clockMinuteAdder("01:30", 30)); // .to.equal('02:00'))
console.log(clockMinuteAdder("12:05", 100)); //.to.equal('01:45'))
console.log(clockMinuteAdder("06:30", 90)); //.to.equal('08:00'))

module.exports = clockMinuteAdder;

function clockMinuteAdder2(time, minutesToAdd) {
  // ("11:20", 50)
  // Your code here:
  // separamos la hora y los minutos pasados por el str time
  const hour = time.slice(0, 2);
  // console.log(hour)
  const min = time.slice(3);
  // console.log(min)
  // const totalMin = minutesToAdd + (min * 1); // totalMin = 70
  const totalMin = minutesToAdd + parseInt(min);
  const totalHour = Math.floor(totalMin / 60) + Number(hour); // totalHour = 1 + 9 = 10
  const newMin = totalMin % 60; // 70 % 60 --> 10
  let newHour = totalHour % 24; // en este caso estamos trabajando con el uso horario en 24 horas
  // if (newHour === 0) newHour = 24; // esta línea es por si en vez de que diga 00:00 queremos que muestre 24:00
  // 9:9
  const fHour = newHour < 10 ? `0${newHour}` : newHour;
  const fMin = newMin < 10 ? `0${newMin}` : newMin;
  return `${fHour}:${fMin}`;
}

console.log(clockMinuteAdder2("11:20", 50)); //.to.equal('12:10'))
console.log(clockMinuteAdder2("09:00", 20)); //.to.equal('09:20'))
console.log(clockMinuteAdder2("01:30", 30)); // .to.equal('02:00'))
console.log(clockMinuteAdder2("12:05", 100)); //.to.equal('01:45'))
console.log(clockMinuteAdder2("06:30", 90)); //.to.equal('08:00'))