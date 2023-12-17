var arrSoNhap= [];
var tongDiem = 0;
function getNumberFromUser(){
    var soNhap = document.getElementById('soNhap').value*1
    arrSoNhap.push(soNhap)
    document.getElementById('kq1').innerHTML=arrSoNhap
    for(var i=0; i < arrSoNhap.length;i++){
        tongDiem += arrSoNhap[i]
    }
    return tongDiem

}
console.log(arrSoNhap)
console.log(tongDiem)
document.getElementById('btn1').onclick = getNumberFromUser
//câu 1 Tổng số dương