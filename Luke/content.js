// 數量增加減鍵
function insc() {
    var count = document.getElementById("count").innerHTML;
    document.getElementById("count").innerHTML = parseInt(count) + 1;
}
function dec() {
    var count = document.getElementById("count").innerHTML;
    if (parseInt(count) > 0) {
        document.getElementById("count").innerHTML = parseInt(count) - 1;
    };
}

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



// 

