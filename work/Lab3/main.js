$(function () {
   let currentQuiz = null;
    $("#startButton").on("click",function(){
        if(currentQuiz == null)
		{
            currentQuiz = 0;
            $("#question").text(questions[0].question);
            $("#options").empty();
			$("#resultTable").empty();
            questions[0].answers.forEach(function(element, index, array){
                $("#options").append(
                    `<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`
                );
            });
            $("#startButton").attr("value","下一題");
        }
		else
		{
            $.each($(":radio"),function(i, val){
                //console.log(i + " : " + val.checked);
                if(val.checked)
				{
					select_answer[currentQuiz] = questions[currentQuiz].answers[i][1];
                    if(currentQuiz == 29)
					{
						finalAnswers[0][2] = select_answer[4]+select_answer[9]+select_answer[13]+select_answer[17]+select_answer[23]+select_answer[29];
						finalAnswers[1][2] = select_answer[2]+select_answer[5]+select_answer[12]+select_answer[19]+select_answer[21]+select_answer[28];
						finalAnswers[2][2] = select_answer[1]+select_answer[7]+select_answer[14]+select_answer[16]+select_answer[24]+select_answer[27];
						finalAnswers[3][2] = select_answer[0]+select_answer[6]+select_answer[10]+select_answer[15]+select_answer[20]+select_answer[25];
						finalAnswers[4][2] = select_answer[3]+select_answer[8]+select_answer[11]+select_answer[18]+select_answer[22]+select_answer[26];
                        
                        $("#question").text("測驗結果");
                        $("#options").empty();
						$("#resultTable").append("<tr><th>動物</th><th>特質</th><th>得分</th></tr>");
                        for(var x=0;x<5;x++){
							$("#resultTable").append(
									"<tr>"+
									"<td><img src =\"images/" + finalAnswers[x][0] + ".jpg\"></td>"+
									"<td>"+finalAnswers[x][1]+"</td>"+
									"<td>"+finalAnswers[x][2]+"</td>"+
									"</tr>");
						}
                        currentQuiz = null;
                        $("#startButton").attr("value", "重新開始");
                    }
					else
					{
                        //go to questions[x]
                        currentQuiz = currentQuiz + 1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function (element, index, array) {
                            $("#options").append(
                                `<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`
                            );
                        });
                    }
                    return false;
                }
            });
        }
    });
});