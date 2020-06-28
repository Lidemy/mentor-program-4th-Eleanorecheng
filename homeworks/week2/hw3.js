function reverse(str) {
	var reverseAns = ''
	for(var i=str.length-1; i >=0; i--){
		reverseAns += str.charAt(i)
  }
  return reverseAns
  
}

console.log(reverse('hello'));
