/*
* 创建正则表达式：var expression = / pattern / flags;
* pattern部分为正则表达式，flags标明正则表达式行为，支持三个标志（可以同时使用）：
* g：表示全局（global）模式，将被应用于所有字符串，而非在发现第一个匹配项时立即停止
* i: 表示不区分大小写（ignoreCase）模式
* m：表示多行（multiline）模式
*/
/*
/!*
* 匹配所有"bat"或"cat"，不区分大小写
*!/
var pattern1 = /[bc]at/gi; //或者使用构造函数创建 var pattern1 = new RegExp("[bc]at","i");

/!*
* 匹配所有以"at"结尾的3个字符的组合
*!/
var pattern2 = /.at/gi;

/!*
* 匹配所有"[bc]at",不区分大小写
*!/
var pattern3 = /\[bc\]at/gi;
*/
// var pattern3 = new RegExp("\\[bc\\]at","gi"); 双重转义

var str = "this cat is a black cat";
var pattern = /(.)a[tc]/g;
while (pattern.test(str)) {
    alert(RegExp.input);
    alert(RegExp.$_);
    alert(RegExp.leftContext);
    alert(RegExp["$`"]);
    alert(RegExp.rightContext);
    alert(RegExp.lastMatch);
    alert(RegExp.lastParen);
    alert(RegExp["$+"]);
    alert(RegExp.multiline);
};

