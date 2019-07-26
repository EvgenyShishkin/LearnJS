var NumbersArr = [];

function getRandomInt(min = 0, max = 100)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 1000; i++) {
  NumbersArr.push(getRandomInt());
}
let i = 0, min = i, max = i;
while (i < 1000) {
  if (NumbersArr[i] > NumbersArr[max]) {
    max = i;
  } 
  if (NumbersArr[i] < NumbersArr[min]) {
    min = i;
  }
  i++;
  
}
console.log (max, NumbersArr[max]);
console.log (min, NumbersArr[min]);

var n = NumbersArr[max];
NumbersArr[max] = NumbersArr[min];
NumbersArr[min] = n;

console.log (max, NumbersArr[max]);
console.log (min, NumbersArr[min]);


// Бляяяя. Это надо переделать11!