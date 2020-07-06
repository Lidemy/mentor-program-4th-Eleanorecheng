// 判斷質數
function isPrime(n) {
  const input = Number(n);
  if (input === 1) return false;
  for (let i = 2; i <= input - 1; i += 1) {
    if (input % i === 0) {
      return false;
    }
  }
  return true;
}

function solve(lines) {
  for (let i = 1; i <= lines.length - 1; i += 1) {
    if (isPrime(lines[i])) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
}


solve(['5', '1', '2', '3', '4', '5']);
