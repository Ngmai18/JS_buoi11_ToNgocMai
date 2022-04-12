/*
Mô hình 3 khối
đầu vào:
+ Số thực 1: 6
+ Số thực 2: 5.3
+ Số thực 3: 4.7
+ Số thực 4: 2
+ Số thực 5: 10

Xử lý:
+ average = (số thực 1 + số thực 2 + số thực 3 + số thực 4 + số thực 5) / 5

Đầu ra:
+ Giá trị trung bình = ?
*/ 

var st1 = 6;
var st2 = 5.3;
var st3 = 4.7;
var st4 = 2;
var st5 = 10;

var average = (st1 + st2 + st3 + st4 + st5) /5;

var result = "Trung binh 5 so thuc la: " + average;

document.getElementById("divAverage").innerHTML = "Trung binh 5 so thuc la: " + average;
