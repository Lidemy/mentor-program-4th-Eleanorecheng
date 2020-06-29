//給定一個數字 n，因數就是所有小於等於 n 又可以被 n 整除的數，
//所以最明顯的例子就是 1 跟 n，這兩個數一定是 n 的因數。現在請寫出一個函式來「印出」所有的因數

function printFactor(n) {
  for (var i=0; i<=n; i++){
	  if (n % i === 0){
		  console.log(i)
	  }
  }
}

printFactor(100);
