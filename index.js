
var arrSoNhap = [];
var tongDiem = 0;
function getNumberFromUser() {
    var soNhap = document.getElementById('soNhap').value * 1;
    arrSoNhap.push(soNhap);
    document.getElementById('kq1').innerHTML = arrSoNhap;
}
//---- Câu 1
document.getElementById('btn1').onclick = getNumberFromUser;
function sum() {
    for (var i = 0; i < arrSoNhap.length; i++) {
        tongDiem += arrSoNhap[i];
    }
    document.getElementById('kq2').innerHTML = tongDiem;
    return tongDiem
}
document.getElementById('btn2').onclick = sum;
//--- Câu 2
var soDuong 
function demSo(){
  soDuong = arrSoNhap.length
  document.getElementById('kq3').innerHTML=soDuong
}

document.getElementById('btn3').onclick=demSo
// Câu 3
function soNhoNhat(){
var min = arrSoNhap[0]
for(var i=1;i<arrSoNhap.length;i++){
    if(min > arrSoNhap[i]){
        min = arrSoNhap[i]
    }
}
document.getElementById('kq4').innerHTML=min
}
document.getElementById('btn4').onclick=soNhoNhat
//Câu 4
function soDuongNho(){
var soDuongNhoNhat = -1
 for(var i =0;i<arrSoNhap.length;i++){
    if((soDuongNhoNhat == -1||soDuongNhoNhat>arrSoNhap[i])&&arrSoNhap[i]>0){
        soDuongNhoNhat =arrSoNhap[i]
    }
    // return soDuongNhoNhat
 }
 document.getElementById('kq5').innerHTML=soDuongNhoNhat
}
document.getElementById('btn5').onclick=soDuongNho
//----------Câu 5-------
function soChanCuoiCung(){
    var soChanCuoi = 0
    for(var i=0;i<arrSoNhap.length;i++){
       if(arrSoNhap[i] % 2 == 0){
        soChanCuoi = arrSoNhap[i]
       }
    document.getElementById('kq6').innerHTML=soChanCuoi
 }
}
document.getElementById('btn6').onclick=soChanCuoiCung
//-------Câu 6
function convert(){
    var soA =document.getElementById('soA').value*1
    var soB = document.getElementById('soB').value*1
    var trungGian = arrSoNhap[soA]
    arrSoNhap[soA]=arrSoNhap[soB]
    arrSoNhap[soB]=trungGian
    document.getElementById('kq7').innerHTML=arrSoNhap
}
document.getElementById('btn7').onclick=convert

//---- Câu 7
function tangDan(){
    var newArrSoNhap = arrSoNhap.sort(function(a,b){
        return a-b
    })
    document.getElementById('kq8').innerHTML=newArrSoNhap
}
document.getElementById('btn8').onclick=tangDan