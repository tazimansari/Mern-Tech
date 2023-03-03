let n= 6
function reverseHollowTriangle(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = n; j > i; j--) {
      row += " ";
    }
    for (let k = 1; k <= (2 * i) - 1; k++) {
      if (i === n || k === 1 || k === (2 * i) - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

reverseHollowTriangle(6);