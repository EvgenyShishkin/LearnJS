var name = "aasalldlfkfddskkkkkkkkfffuuuggg";

function rle (a) {
  var result = "",
      letter = a[0],
      count  = 1;
  for (let i = 1; i < a.length; i++) {
    if (letter === a[i]) {
      count ++;
    } else {
      result = result + (count === 1 ? '' : count) + letter;
      letter = a[i];
      count = 1;
    }
     
  }
  return result + (count === 1 ? '' : count) + letter;
}
console.log (rle(name));