
function countDigits(input) {
  let n = input;
  if (n === 0) return 1; // 如果是零，回傳一位數
  let count = 0;
  while (n !== 0) {
    n = Math.floor(n / 10);
    count += 1;
  }
  return count;
}

function isNarcissistic(n) {
  const digit = countDigits(n);
  let number = n;// 原始數字
  let calculation = 0;// 計算出來的水仙花數
  while (number !== 0) {
    const num = number % 10;// 拿餘數1234 % 10...4
    calculation += num ** digit;// 水仙花計算公式
    number = Math.floor(number / 10);// 除以十作為後續取餘數的母數
  }
  if (n === calculation) {
    return true;
  }
  return false;
}

function solve(lines) {
  const temp = lines[0].split(' ');
  const topN = Number(temp[0]);
  const botN = Number(temp[1]);
  for (let i = topN; i <= botN; i += 1) {
    if (isNarcissistic(i)) {
      console.log(i);
    }
  }
}

solve(['5 200']);
