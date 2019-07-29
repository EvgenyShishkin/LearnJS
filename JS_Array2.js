function log(element) {
  console.log("Элемент -", element);
}

// function forEach(nums, func) {
//   for (let i = 0; i < nums.length; i++) {
//       func(nums[i]);
//   }
// }

// 

// Функция, которая принимает массив элементов и другую функцию. 
// Берем массив, фильтруем и возвращаем в новый массив элемент массива с теми элементами, которые прошли проверку

var NumbersArr = [];

function getRandomInt(min = 0, max = 10)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
  NumbersArr.push(getRandomInt());
}

function filter (arr, func) {
  let tempArr =[];
  for (let i = 0;i<arr.length;i++) {
    if (func(arr[i]) ) {
      tempArr.push (arr[i]);
    }
  
  }
  return tempArr;
}
function more (item) {
  return item>=5 && item <=7 ;
}
console.log (NumbersArr)
console.log (filter(NumbersArr, more ))



