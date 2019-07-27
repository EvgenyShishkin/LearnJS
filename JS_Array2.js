// function log(element) {
//   console.log("Элемент -", element);
// }

// function forEach(nums, func) {
//   for (let i = 0; i < nums.length; i++) {
//       func(nums[i]);
//   }
// }

// forEach([1,2,3], log);

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

function FilterMTF (nums, func) {
  for (let i; i < nums.length; i++){
    func(nums[i])
  }
}

function MoreThenFive (num) {
  if (i < num) {
    return i;
  }
}