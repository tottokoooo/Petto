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
var myVar=setInterval(function(){update_life()},10000);
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

let SetMinute = 0;
function Check_Time() {
    SetMinute += 1;
    let Check_i = document.getElementById("Check_i");

    let Cal_Hour = Math.floor(SetMinute / 3600);
    let Cal_Minute = Math.floor(Math.floor(SetMinute % 3600) / 60);

    Check_i.innerHTML = Cal_Hour + ":" + Cal_Minute;
}
let mm = window.setInterval("Check_Time()", 1000);

$(document).ready(function(){
    ctx = $("#home")[0].getContext("2d");

    imgCat = new Image();
    food = new Image();
    let cat_name;
    let githubURL = new URL(location.href);
    //alert('location.search: '+location.search);
    let params = githubURL.searchParams;
    for (let pair of params.entries()) {
        cat_name = `${pair[1]}`;
    }

	imgCat.src = "images/"+cat_name+".jpg";

    imgCat.onload = function(){
        let beginx=0; //裁減圖片的x軸座標，由左往右遞增
        setInterval(() => {
            ctx.clearRect(60,50,150,150);
            console.log("draw cat");
            ctx.drawImage(imgCat, beginx_m[beginx], 10, 300, 300, 60, 50, 150, 150);
            beginx++;
            beginx%=3;
        }, 500);
    }

    $("#birthday").text(birthday.toLocaleDateString().slice(5));

    $("#only_button").click(function(){
        if(life>=100){
            console.log("我飽了!");
        }
        else{
            life+=25;
            console.log("feed");
            console.log(life);
            //食物圖
            let randomChildNumber = Math.floor(Math.random()*3);
            if(randomChildNumber==0){food.src = "images/fish.png";}
            else if(randomChildNumber==1){food.src = "images/can.png";}
            else{food.src = "images/milk.png";}
            console.log("draw food:",food);
            food.onload = function(){ctx.drawImage(food, 0, 0, 300, 300, 220, 148, 100, 100);}

            setTimeout(function(){
                $("#life").attr("src","images/life"+life+".png");
                ctx.clearRect(220,148,100,100);
            },3000);
        }

    });
});

