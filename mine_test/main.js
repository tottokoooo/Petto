$(document).ready(() => {
  $("#only_button").hide();
  let currentQuiz = null;

  //當按鈕被按下時
  $("#startButton").click(() => {
    //還未開始答題
    if (currentQuiz == null) {
      //放上題目跟選項
      currentQuiz = 0;
      $("#question").text(questions[0].question);
      $("options").empty();
      for (let x = 0; x < questions[0].answers.length; x++) {
        $("#options").append(
          "<lable><input name='options' type='radio' value=" +
            x +
            ">" +
            questions[0].answers[x][0] +
            "</lable><br><br>"
        );
      }
      $("startButton").attr("value", "next");
    } else {
      $.each($(":radio"), function (i, val) {
        if (val.checked) {
          finalAnswers[questions[currentQuiz].answers[i][1]].score++;
          if (currentQuiz != questions.length - 1) {
            currentQuiz++;
            $("#question").text(questions[currentQuiz].question);
            $("#options").empty();
            for (let x = 0; x < questions[currentQuiz].answers.length; x++) {
              $("#options").append(
                "<lable><input name='options' type='radio' value=" +
                  x +
                  ">" +
                  questions[currentQuiz].answers[x][0] +
                  "</lable><br><br>"
              );
            }
          } else {
            currentQuiz = null;
            $("#question").text("幫她取個名字吧:");
            $("#options").empty();
            $("#startButton").hide();
            $("#only_button").show();

            // sort by value
            finalAnswers.sort(function (a, b) {
              return b.score - a.score;
            });
            $("#question_cat_img img").attr(
              "src",
              "../images/" + finalAnswers[0].en + "_single.jpg"
            ); //放上對應的貓咪圖
            $("#question").append(
              "<input type='text' id='cat_name' class='textContent' name='cat_name' value='cat_name'>"
            ); //放取名字框框

            localStorage.setItem("type", finalAnswers[0].en); //紀錄種類
            localStorage.setItem("life", "100"); //初始生命值:滿血
            localStorage.setItem("age_second", "0"); //初始年紀:0秒
            let birthday = new Date(); //取今天的日期
            localStorage.setItem("birth", birthday); //存他的生日
          }
          return false;
        }
      });
    }
  });
  $("#only_button").click(() => {
    localStorage.setItem("name", document.querySelector(".textContent").value); //紀錄名字
  });
});
