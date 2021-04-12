let birthday = localStorage.getItem("birth");
birthday = birthday.split(" ");

function changeColor() {
  $("#start_button").css("color", "black");
}
function changeColorBack() {
  $("#start_button").css("color", "gray");
}

let life = parseInt(localStorage.getItem("life"), 10);
var myVar = setInterval(() => {
  update_life();
}, 100000); //每1秒(1000)消耗一格生命

function update_life() {
  life -= 25;
  //更新生命值圖片
  $("#life").attr("src", "images/life" + life + ".png");
  //生命值<0
  if (life == -25) {
    clearTimeout(myVar);
    document.location.href = "game_over.html";
  }
  localStorage.setItem("life", life);
}

let beginx_m = [10, 320, 630];

let SetMinute = parseInt(localStorage.getItem("age_second"), 10);
function Check_Time() {
  SetMinute += 1;
  let Check_i = document.getElementById("Check_i");

  let Cal_Hour = Math.floor(SetMinute / 3600);
  let Cal_Minute = Math.floor(Math.floor(SetMinute % 3600) / 60);

  Check_i.innerHTML = Cal_Hour + ":" + Cal_Minute;
  localStorage.setItem("age_second", SetMinute);
}
window.setInterval("Check_Time()", 1000); //每秒把年齡加一秒

$(document).ready(() => {
  ctx = $("#home")[0].getContext("2d"); //畫筆

  imgCat = new Image();
  food = new Image();
  let cat_name = localStorage.getItem("type");
  imgCat.src = "images/" + cat_name + ".jpg";

  imgCat.onload = function () {
    let beginx = 0; //裁減圖片的x軸座標，由左往右遞增
    setInterval(() => {
      ctx.clearRect(60, 50, 150, 150);
      //console.log("draw cat");
      ctx.drawImage(imgCat, beginx_m[beginx], 10, 300, 300, 60, 50, 150, 150);
      beginx++;
      beginx %= 3;
    }, 500);
  };
  $("#name").text(localStorage.getItem("name"));

  life = parseInt(localStorage.getItem("life"), 10);
  $("#life").attr("src", "images/life" + life + ".png");

  $("#birthday").text(birthday.slice(1, 3));

  //應該要寫上重新打開畫面時可以讀到他的年齡

  $("#only_button").click(() => {
    if (life >= 100) {
      //console.log("我飽了!");
    } else {
      life += 25;
      localStorage.setItem("life", life);
      //console.log("feed");
      //console.log(life);
      //食物圖
      let randomChildNumber = Math.floor(Math.random() * 3);
      if (randomChildNumber == 0) {
        food.src = "images/fish.png";
      } else if (randomChildNumber == 1) {
        food.src = "images/can.png";
      } else {
        food.src = "images/milk.png";
      }
      //console.log("draw food:", food);
      food.onload = function () {
        ctx.drawImage(food, 0, 0, 300, 300, 220, 148, 100, 100);
      };

      setTimeout(function () {
        $("#life").attr("src", "images/life" + life + ".png");
        ctx.clearRect(220, 148, 100, 100);
      }, 3000);
    }
  });
});
