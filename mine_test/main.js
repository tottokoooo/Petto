$(document).ready(() => {
  $("#only_button").hide();
  let currentQuiz = null; //建立currentQuiz，儲存目前做達到第幾題
  $("#startButton").click(() => {
    //還沒開始作答，從此開始
    if (currentQuiz == null) {
      currentQuiz = 0;
      //顯示題目
      $("#question").text(questions[0].question); //放上第一題(questions[0])的題目(.question)
      $("#options").empty(); //清空選項區域
      //加入選項
      for (let x = 0; x < questions[0].answers.length; x++) {
        $("#options").append(
          "<label><input name='options' type='radio' value=" +
            x +
            ">" +
            questions[0].answers[x][0] +
            "</label><br><br>"
        );
      }
      //將按鈕文字換成next
      $("#startButton").attr("value", "Next"); //attr: 更動它的屬性
    } else {
      //若已經開始作答，則從此開始
      //尋訪每個選項是否有被選取
      $.each($(":radio"), (i, val) => {
        console.log(i);
        console.log(val);
        //使否產了最後結果
        if (val.checked) {
          //.checked 用來返回checkbox是否被選中
          if (isNaN(questions[currentQuiz].answers[i][1])) {
            let finalResult = questions[currentQuiz].answers[i][1];
            $("#question").text("幫她取個名字吧:");
            $("#options").empty();
            $("#question_cat_img img").attr(
              "src",
              "../images/" + finalAnswers[finalResult][1] + "_single.jpg"
            ); //放上對應的貓咪圖
            $("#question").append(
              "<input type='text' id='cat_name' class='textContent' name='cat_name' value='" +
                finalAnswers[finalResult][1] +
                "'>"
            ); //放取名字框框
            currentQuiz = null; //將目前答題數清空
            $("#startButton").hide();
            $("#only_button").show(); //放出餵養牠的按鈕

            localStorage.setItem("type", finalAnswers[finalResult][1]); //紀錄種類
            localStorage.setItem("life", "100"); //初始生命值:滿血
            localStorage.setItem("age_second", "0"); //初始年紀:0秒
            let birthday = new Date(); //取今天的日期
            localStorage.setItem("birth", birthday); //存他的生日
          } else {
            //換下一題
            currentQuiz++;
            $("#question").text(questions[currentQuiz].question);
            $("#options").empty();
            for (let x = 0; x < questions[currentQuiz].answers.length; x++) {
              $("#options").append(
                "<label><input name='options' type='radio' value" +
                  x +
                  ">" +
                  questions[currentQuiz].answers[x][0] +
                  "</label><br><br>"
              );
            }
          }
          return false; //完成後即可跳離迴圈
        }
      });
    }
  });
  $("#only_button").click(() => {
    localStorage.setItem("name", document.querySelector(".textContent").value); //紀錄名字
  });
});
