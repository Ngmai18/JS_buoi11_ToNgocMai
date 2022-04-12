/*
Mô hình 3 lớp:
Đầu vào:
+ Chiều dài hcn: 10
+ Chiều rộng hcn: 6
Xử lý: 
+ Diện tích = chiều dài * chiều rộng
+ Chu vi = (chiều dài + chiều rộng)*2
Đầu ra
+ Diện tích = ?
+ Chu vi = ?
*/ 
var chieuDai = 10;
var chieuRong = 6;

var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) *2;

document.getElementById("rectangle_dienTich").innerHTML = "Dien tich hinh chu nhat: " + dienTich;
document.getElementById("rectangle_chuVi").innerHTML = "Chu vi hinh chu nhat: " + chuVi;
