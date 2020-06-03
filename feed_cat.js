let today = new Date();
let birthday = new Date;
function setBirthday(){
    birthday.setMonth(birthday.getMonth());
    birthday.setDate(birthday.getDate()-1);
    birthday.setHours(birthday.getHours());
    birthday.setMinutes(birthday.getMinutes());
}

function changeColor(){$("#start_button").css("color", "black");}
function changeColorBack(){$("#start_button").css("color", "gray");}

let life = 100;
var myVar=setInterval(function(){update_life()},5000);
function update_life(){
    life-=25;
    console.log(life);
    //更新生命值圖片
    $("#life").attr("src","images/life"+life+".png");
    if(life==-25){
        clearTimeout(myVar);
        document.location.href="game_over.html";
    }
}

let beginx_m = [10, 320, 630];

$(document).ready(function(){
    let mycamvas = document.getElementById("home");
    ctx = $("#home")[0].getContext("2d");

    imgCat = new Image();
	imgCat.src = "images/"+font+".jpg"; /////////////////////////
    console.log(make_name);
    
    imgCat.onload = function(){
        let beginx=0; //裁減圖片的x軸座標，由左往右遞增
        setInterval(() => {
            ctx.clearRect(0,0,300,200);
            ctx.drawImage(imgCat, beginx_m[beginx], 10, 300, 300, 60, 50, 150, 150);
            beginx++;
            beginx%=3;
        }, 500);
    }
    $("#birthday").text(birthday.toLocaleDateString().slice(5));

    $("#only_button").click(function(){
        if(life<100){
            life+=25;
            $("#life").attr("src","images/life"+life+".png");
            console.log("feed");
            console.log(life);
        }else{
            console.log("我飽了!");
        }
    });
});

