``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 
0. 函式接收參數: 陣列[3, 5, 8, 13, 22, 35]，指定給變數 arr 
1. 執行第一行，宣告變數 i 為 0，判斷 i 是否小於陣列的長度(arr.length = 6)
2. 執行第二行，若 index = i 的值小於等於零，回傳 'invalid'
3. 第一圈迴圈結束，跑回第一行，i++，重複迴圈直到 i 等於 5，都沒有的話就繼續往下
4. 執行第三行，宣告變數 i 為 2，判斷 i 是否小於陣列的長度(arr.length = 6)
5. 執行第四行，如果 index = 2 的值不等於 index = 1 加上 index = 0 的值，回傳 'invalid'
6. 第一圈迴圈結束，跑回第一行，i++，重複迴圈直到 i 等於 5 ，都沒有的話就繼續往下
7. 回傳 'invalid'


