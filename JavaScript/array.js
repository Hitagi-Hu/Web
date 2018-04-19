var numbers = [1,2,3,4,5,4,3,2,1];
var mapResult = numbers.map(function (item) {
    return item * 2;
});

var everyResult = numbers.every(function (item) {
    return item > 2;
});

var someResult = numbers.some(function (item) {
    return item > 2;

});

var filterResult = numbers.filter(function (item) {
    return item > 2;
});
//forEach（） has no return value
numbers.forEach(function (item) {
    //do something
});

var sum = numbers.reduce(function (prev, cur) { //function函数返回的值会传给下一次迭代时的第一项（即prev参数）
   return prev + cur;
});

var anotherSum = numbers.reduceRight(function (prev, cur) {
    return prev + cur;
});


alert(
    "numbers= " + numbers + "\n" +
    "mapResult= " + mapResult + "\n" +
    "filterResult= " + filterResult + "\n" +
    "everyResult= " + everyResult + "\n" +
    "someResult= " + someResult + "\n" +
    "sum= " + sum + "\n" +
    "anotherSum= " + anotherSum
);
