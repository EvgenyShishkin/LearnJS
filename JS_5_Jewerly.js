// Даны две строки строчных латинских символов: строка J и строка S. 
// Символы, входящие в строку J, — «драгоценности», входящие в строку S — «камни». 
// Нужно определить, какое количество символов из S одновременно являются «драгоценностями». 
// Проще говоря, нужно проверить, какое количество символов из S входит в J.

var j = "c",
    s = "aaaabbbbbfffjdjjdjdjdjdjdjdjdj";

function filter (j,s) {
  var result = 0;
  for (let i = 0; i < j.length;i++ ) {
    for (let n = 0; n < s.length;n++) {
      if (j[i] === s[n]) {
        result ++;
        break;
      }
    }
  }
return result;
}

console.log (filter(j,s));