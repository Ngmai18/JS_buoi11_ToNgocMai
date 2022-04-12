/**
 * Mo hinh 3 khoi:
 * - Dau vao:
 *  + Lương 1 ngày: 100.000
 *  + Số ngày làm: 30 
 *
 * - Xu ly:
 *  + salary = lương 1 ngày * số ngày làm
 *
 * - Dau ra:
 *  + Tiền lương
 */

var name = "A";
var luongMotNgay = 100000;
var soNgayLam = 30;

var salary = luongMotNgay * soNgayLam;

var currentFormat = new Intl.NumberFormat("vn-VN");

var ketQua = "Tien luong la: " + currentFormat.format(salary);

console.log(ketQua);

