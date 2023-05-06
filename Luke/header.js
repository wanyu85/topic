// 回到頂部
window.onscroll = scrollFunction; //每當畫面捲動觸發一次

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}//網頁捲動超過200pixel就會跑出來 display設定成block 跑回上面就隱藏。

// 重置scrollTop這個變數的值
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// 時間倒數
function countdown() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();


    let h = 24 - hour;
    if (min > 0 || sec > 0) {
        h -= 1
    }

    let m = 60 - min;
    if (sec > 0) {
        m -= 1
    }

    if (m == 60) {
        m = 0
    }

    let s = 60 - sec;
    if (s == 60) {
        s = 0
    }

    h = h.toString();
    m = m.toString();
    s = s.toString();
    if (h.length == 1) {
        h == '0' + h
    }
    if (m.length == 1) {
        m = '0' + m
    }
    if (s.length == 1)
        s = '0' + s
    result = h + ':' + m + ":" + s
    return result

}

setInterval(function () {
    time.innerHTML = countdown();
}, 1000)

// 
// 圖片

function init() {
    window.setTimeout(showAD, 2000)
}

function showAD() {
    var ad = document.getElementById("ad");
    ad.style.display = "block";
}

function closeAd() {
    var ad = document.getElementById("ad");
    ad.style.display = "none";
}



// function init() {
//     time = setInterval("clock(),3000")
// }



