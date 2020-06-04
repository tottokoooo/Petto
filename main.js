let beginx_m = [10, 320, 630];

$(document).ready(function(){
    let mycamvas = document.getElementById("home");
    ctx = $("#home")[0].getContext("2d"); //在極少數jquary取得canvas的情況下需要[0]

    imgCat = new Image();
    imgCat.src = "images/gray.jpg"; //http://www.lizibuluo.com/8bit/#import-save
    
    imgCat.onload = function(){
        let beginx=0; //裁減圖片的x軸座標，由左往右遞增
        setInterval(() => {
            ctx.clearRect(0,0,300,120);
            ctx.drawImage(imgCat, beginx_m[beginx], 10, 300, 300, 90, 0, 130, 130);
            beginx++;
            beginx%=3;
        }, 500);
    }
});

function changeColor(){$("#start_button").css("color", "black");}
function changeColorBack(){$("#start_button").css("color", "gray");}