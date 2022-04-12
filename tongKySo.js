/**
 * Gia su:
 * n = 245 => 2 + 4 + 5 => 11?
 *
 * - Đầu vào
 *      + n = 245
 * - Xử lý
 *      + Tách lấy hàng trăm: Math.floor(n / 100)
 *      + Tách lấy hàng chục: Math.floor(n % 100 / 10)
 *      + Tách lấy hàng dv: n % 10
 *      + hang tram + hang chuc + hang dv
 * - Đầu ra: show ket qua
 */
var n = 245;

var hangTram = Math.floor(n / 100);
var hangChuc = Math.floor((n % 100) / 10);
var hangDV = n % 10;

var tongKySo = hangTram + hangChuc + hangDV;
console.log("Tong 3 ky so la: " + tongKySo);
