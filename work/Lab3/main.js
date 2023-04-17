$(function () {
   alert("目前，PDP系統更已成為世界500強企業，無論是在領導特質分析，以及人才運用上的最佳管理工具，此系統將領導者分為五大類型，並巧妙以老虎、孔雀、無尾熊、貓頭鷹與變色龍5種動物作為隱喻。"); 
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
                        alert("假若你有某一項分遠遠高於其他四項，你就是典型的這種屬性，假若你有某兩項分大大超過其他三項，你是這兩種動物的綜合；假若你各項分數都比較接近，恭喜你，你是一個面面俱到近似完美性格的人；假若你有某一項分數特別偏低的話，想提高自己就需要在那一種動物屬性的加強上下工夫了。我們就來逐一分析一下各種迥然不同的“動物”吧！");
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