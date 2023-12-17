
var arrSoNhap = [];
var tongDiem = 0;
function getNumberFromUser() {
    var soNhap = document.getElementById('soNhap').value * 1;
    arrSoNhap.push(soNhap);
    document.getElementById('kq1').innerHTML = arrSoNhap;
}
document.getElementById('btn1').onclick = getNumberFromUser;
function sum() {
    for (var i = 0; i < arrSoNhap.length; i++) {
        tongDiem += arrSoNhap[i];
    }
    document.getElementById('kq2').innerHTML = tongDiem;
    return tongDiem
}
document.getElementById('btn2').onclick = sum;

