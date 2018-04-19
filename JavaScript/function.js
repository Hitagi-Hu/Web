function factorial(num) {
    if (num <= 1){return 1;}
    else {return num * factorial(num - 1);}
}

// alert(factorial(5));

var anotherFactorial = factorial;
//因为递归函数定义里调用了函数自身，如果把factorial = null或者改变其定义，另一引用anotherFactorial将随之改变
factorial = function(){return 0;};
alert(factorial(5)); //0
alert(anotherFactorial(5)); //0 ，0乘以0的结果


/*//分离递归中函数名
function factorial(num) {
    if (num <= 1) {return 1;}
    else {return num * arguments.callee(num - 1);}
}
var anotherFactorial = factorial;
factorial = function(){return 0;};
alert(factorial(5));  //0
alert(anotherFactorial(5)); //120,仍然可以使用*/
