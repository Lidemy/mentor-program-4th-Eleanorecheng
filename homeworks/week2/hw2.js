//給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

function capitalize(str){
	var ans = ''
	var code = str.charCodeAt(0) //first letter code
	var firstletter = str.charAt(0)
	if (code >=97 && code <=122){ // small
		firstletter = String.fromCharCode(code - 32)
		ans = firstletter+str.slice(1)
	}else{
		ans = firstletter+str.slice(1)
	}
	return ans
}
  

console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));

