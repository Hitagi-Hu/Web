var time1 = new Date(2018, 3, 18, 11, 41); //1-12月 对应0-11(^-^)


var time2 = new Date("April 18,2018").toLocaleDateString();


var time3 = new Date(Date.now()).toLocaleString();
var time4 = new Date(Date.now()).toLocaleDateString();
var time5 = new Date(Date.now()).toString();
var time6 = new Date(Date.now());
var value = time6.valueOf();
alert(
    "new Date(2018, 3, 18, 11, 41)= " + time1 + "\n" +
    "new Date(\"April 18,2018\").toLocaleDateString()= " + time2 + "\n" +
    "time3= " + time3 + "\n" +
    "time4= " + time4 + "\n" +
    "time5= " + time5 + "\n" +
    "time6= " + time6 + "\n" +
    "value= " + value
);
