// 判斷迴文OK
function isReversable(str) {
  let strReverse = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    strReverse += str[i];
  }
  return strReverse;
}

function solve(lines) {
  const input = lines[0];
  if (isReversable(input) === input) {
    console.log('True');
  } else {
    console.log('False');
  }
}

solve(['aba']);
