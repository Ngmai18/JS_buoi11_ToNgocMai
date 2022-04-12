/*
Mô hình 3 lớp:
Đầu vào:
+ Giá USD hiện nay: oneUSD = 23.500 VND
+ Số tiền đổi từ USD -> VND: soVnd = 2 USD
Xử lý:
+ Số tiền sau khi quy đổi VND: moneyChange = oneUSD * soVnd
Đầu ra:
+ Số tiền sau khi quy đổi = ?
*/

var oneUSD = 23.500;
var soVnd = 2;

var moneyChange = oneUSD * soVnd;

var currentFormat = new Intl.NumberFormat("vn-VN");

var ketQua = "Số tiền quy đổi là: " + currentFormat.format(moneyChange);
document.getElementById("moneyChange").innerHTML = "Số tiền sau khi quy đổi VND: " + moneyChange;

console.log(ketQua);
