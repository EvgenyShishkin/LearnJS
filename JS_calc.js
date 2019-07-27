
var num1 = 2,
    num2 = 3,
    answer = 0,
    again = true,
    userVersion = 0;

while (again === true) {
function getRandomInt(min = 0, max = 10)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
num1 = getRandomInt();
num2 = getRandomInt();
answer = num1*num2;
userVersion = +prompt("Сколько будет " + num1 + "*" + num2 + "?");

if (userVersion == answer) {
  alert ("Это верно!");
  } else {
  alert("Не верно! Правильный ответ " + answer);
}
again = confirm("Еще задачку?");
}