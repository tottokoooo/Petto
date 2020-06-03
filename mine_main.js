let name="test name";
let font;

$(document).ready(function(){
    $("#only_button").hide();
    let currentQuiz=null;
    $("#startButton").click(function(){
        if(currentQuiz==null){
            currentQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(let x=0; x<questions[0].answers.length;x++){
                $("#options").append(
                    "<input name='options' type='radio' value="+
                    x+
                    "<label>"+questions[0].answers[x][0]+
                    "</label><br><br>"
                );
            }
            //將按鈕文字換成next
            $("#startButton").attr("value","Next"); //attr: 更動它的屬性
        }else{
            //尋訪每個選項是否有被選取
            $.each(
                $(":radio"),function(i,val){
                    if(val.checked){
                        if(isNaN(questions[currentQuiz].answers[i][1])){
                            let finalResult = questions[currentQuiz].answers[i][1];
                            $("#question").text("name   ");
                            $("#question").append("<input type='text' id='name' name='n' value='"+finalAnswers[finalResult][0]+"'>");
                            font = finalAnswers[finalResult][0];
                            name = finalAnswers[finalResult][1];
                            $("#font").hide();
                            $("#options").empty();
                            $("#options").append('<img src=images/'+finalAnswers[finalResult][1]+'_single.jpg><br><br>');
                            currentQuiz=null;
                            $("#startButton").hide();
                            //放出餵養牠的按鈕!!!
                            $("#only_button").show();
                        }else{
                            currentQuiz = questions[currentQuiz].answers[i][1]-1;
                            $("#question").text(questions[currentQuiz].question);
                            $("#options").empty();
                            for(let x=0;x<questions[currentQuiz].answers.length;x++){
                                $("#options").append(
                                    "<input name='options' type='radio' value"+
                                    x+
                                    "<label>"+questions[currentQuiz].answers[x][0]+
                                    "</label><br><br>"
                                );
                            }
                        }
                        return false;
                    }
                }
            );
        }
    });
});

function changeColor(){$("#start_button").css("color", "black");}
function changeColorBack(){$("#start_button").css("color", "gray");}