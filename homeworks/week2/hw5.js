function join(arr, concatStr) {
	var ans = ''
	for (var i=0; i<= arr.length-1; i++){
		if (i === arr.length-1){
			ans += arr[i]
		}else{
			ans += arr[i]+concatStr
		}
	}
	return ans
}

function repeat(str, times) {
	var ans = ''
	for (var i=0; i<= times-1; i++){
		ans += str
	}
	return ans
}

console.log(join(['a','b','c'], '!'));
console.log(repeat('ayoyoyo', 5));
