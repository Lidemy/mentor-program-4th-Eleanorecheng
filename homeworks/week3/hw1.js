function printStars(n) {
  let result = '';
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= i; j += 1) {
      result += '*';
    }
    result += '\n';
  }
  return result;
}

function solve(lines) {
  const n = Number(lines[0]);
  console.log(printStars(n));
}

solve(['5']);
