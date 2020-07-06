function whoWin(arr) {
  const temp = arr.split(' ');
  let A = temp[0];
  let B = temp[1];
  const rule = Number(temp[2]);
  if (A === B) return 'DRAW';
  // 四種結果，比大A贏，比大B贏，比小A贏，比小B贏；比小的時候A跟B對調
  if (rule === -1) {
    const k = A;
    A = B;
    B = k;
  }
  const lengthA = A.length;
  const lengthB = B.length;
  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'A' : 'B';
  }
  return A > B ? 'A' : 'B';
}

function solve(lines) {
  for (let i = 1; i < lines.length; i += 1) {
    console.log(whoWin(lines[i]));
  }
}
solve(['3', '1 2 1', '1 2 -1', '2 2 1']);
