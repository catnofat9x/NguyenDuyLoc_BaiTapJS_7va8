var arrNum = []
document.getElementById('themSo').onclick = function (a) {
    a.preventDefault()
    //input:so:Number
    var so = Number(document.getElementById('inputNum').value);
    //output stringHTML
    var ketQua = '';
    //progress
    arrNum.push(so);
    ketQua = '[' + arrNum + ']';
    //in mảng ra giao diện
    document.getElementById('txtArray').innerHTML = ketQua;
};
//Bài tập 1
document.getElementById('tinhTong').onclick = function (a) {
    a.preventDefault()
    n = 0, r = 0;
    for (r = 0; r <= arrNum.length; r++) {
        if (arrNum[r] > 0) {
            n += arrNum[r];
        }
    }
    document.getElementById('txtSum').innerHTML = 'Tổng số dương:' + n;
}
//Bài Tập 2
document.getElementById('demSo').onclick = function (a) {
    a.preventDefault()
    n = 0, r = 0;
    for (r = 0; r < arrNum.length; r++) {
        if (arrNum[r] > 0 && n++) {
            n = arrNum[r]
        }
    }
    document.getElementById('txtCount').innerHTML = 'Số Dương: ' + n;
};

//Bài Tập 3
document.getElementById('timSoNhoNhat').onclick = function (a) {
    a.preventDefault()
    n = arrNum[0],
        r = 1
    for (r = 1; r < arrNum.length; r++) {
        if (arrNum[r] < n) {
            n = arrNum[r]

        }
    };
    document.getElementById('txtMin').innerHTML = 'Số nhỏ nhất :' + n;
}

//Bài tập 4
document.getElementById('timDuongNhoNhat').onclick = function (a) {
    a.preventDefault()
    n = [], r = 0
    for (r = 0; r < arrNum.length; r++) {
        if (arrNum[r] > 0) {
            n.push(arrNum[r]);
        }
    }
    for (a = 0; a < n.length; a++) {
        r = n[0];
        if (n[a] < r) {
            r = n[a]
        }
    }
    document.getElementById('txtMinPos').innerHTML = 'Số dương nhỏ nhất là' + r;
}

//Bài tập 5
document.getElementById('timSoChan').onclick = function (a) {
    a.preventDefault()
    n = 0, r = 0;
    for (r = 0; r < arrNum.length; r++) {
        if (arrNum[r] % 2 == 0) {
            n = arrNum[r]
        }
    };
    document.getElementById('txtEven').innerHTML = 'Số chẵn cuối cùng :' + n;
}

// Bài Tập 6
document.getElementById('doiCho').onclick = function (c) {
    c.preventDefault()
    a = Number(document.getElementById('inputIndex1').value);
    b = Number(document.getElementById('inputIndex2').value);
    var e = arrNum[a];
    arrNum[a] = arrNum[b], arrNum[b] = e;
    document.getElementById('txtChangePos').innerHTML = 'Mảng sau khi đổi :' + arrNum;
};

// Bài Tập 7
document.getElementById('timSoNguyenTo').onclick = function (a) {
    a.preventDefault()
    arrNum.sort((a, b) => a - b);
    document.getElementById('txtIncrease').innerHTML = 'Dãy sau khi sắp xếp' + arrNum;
}

//Bài Tập 8
document.getElementById('timSoDauTien').onclick = function (a) {
    a.preventDefault()
    //input: arrNum
    //outut : Số nguyên đầu tiên
    var a = 0
    var b = []
    //progress
    for (a = 0; a < arrNum.length; a++) {
        kiemTra = checkSNT(arrNum[a]);
        if (kiemTra === true && arrNum[a] >= 2) {
            b.push(arrNum[a]);
        }
    }
    // in ra giao diện
    if (b.length == 0) {
        a = -1;
    } else {
        a = b[0];
    }
    document.getElementById('txtPrime').innerHTML = 'Số nguyên tố đầu tiên là :' + a;
}
function checkSNT(so) {
    var kiemTra = true;

    for (var uoc = 2; uoc <= so / 2; uoc++) {
        if (so % uoc === 0) {
            kiemTra = false;
            break;
        }
    }
    return kiemTra;
}

//Bài tập 9
document.getElementById('btnThemSo_9').onclick = function(a){a.preventDefault()
    var numInput = +document.getElementById('#nhapSo_9').value;

    arrNumber.push(numInput);
    // console.log(arrNumber);

    document.getElementById('soNguyen').innerHTML = 'Mảng số hiện tại là: [' + arrNumber+ ']';
}
document.getElementById('demSoNguyen').onclick = function (a) {
    a.preventDefault()
    var n = [];
    var m = 0;
    for (index = 0; index < arrNum.length; index++) {
        if (Number.isInteger(arrNum[index]) === true) {
            n.push(arrNum[index])
        }
    }
    console.log(n);
    m = n.length;
    document.getElementById('txtInt').innerHTML = 'Có :' + m + 'Số Nguyen.[' + n + ']';
};

//Bài Tập 10
document.getElementById('soSanh').onclick = function (a){a.preventDefault()
    soAm = [], soDuong = [] , ketQuaSS = '';
    for(var index = 0 ;index < arrNum.length ;index++){
        if(arrNum[index] > 0 ){
            soDuong.push(arrNum[index]);
        }else if (arrNum[index] < 0 ){
            soAm.push(arrNum[index]);
        }
    }

    if(soAm.length > soDuong.length){
        ketQuaSS = 'Số âm > Số Dương' 
    }else if(soAm.length < soDuong.length){
        ketQuaSS = 'Số Dương > Số Âm'
    }
    document.getElementById('txtCompare').innerHTML = ketQuaSS
}
