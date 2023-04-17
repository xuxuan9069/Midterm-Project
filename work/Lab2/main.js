$(function(){
	alert("新增功能 : 1.砍掉年份\n\n"+
	"                  2.可以設定第一天的日期(可重複更改)\n\n"+
	"                  3.遇到停課，那一列灰色\n\n"+
	"                  4.單數與雙數列不同顏色\n\n"+
	"                  5.可新增活動");
	$("#buttonenterdate").on("click",function(){
		
		var firsttime = $("#enterdate").val().split("/");
		var monthtime = firsttime[0];
		var datetime = firsttime[1];
		setMonthAndDay(firsttime[0],firsttime[1]);
		$("#enterdate").empty();
		addtable();
	});
	
	$("#buttonenterevent").on("click",function(){
		var topicCount = topic.length;
		topic[topicCount]=$("#enterevent").val();
		$("#enterevent").empty();
		addtable();
	});
	
	function addtable(){
		$("#courseTable").empty();
		$("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
		
		var topicCount = topic.length;
		let millisecsPerDay = 24*60*60*1000;
		
		for(var x=0;x<topicCount;x++){
			var time = (new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().split("/");
			var finaltime = time[1]+"/"+time[2];
			$("#courseTable").append(
				"<tr>"+
				`<td>${x+1}</td>`+
				"<td>"+ finaltime +"</td>"+
				`<td>${topic[x]}</td>`+
				"</tr>");
			if(x==0 || x==1)
			{
				$("tr").eq(x+1).css({"color" : "gray"});
			}
			else if(x %2 == 0)
			{
				$("tr").eq(x+1).css({"color" : "steelblue"});
			}
			else if(x %2 == 1)
			{
				$("tr").eq(x+1).css({"color" : "cadetblue"});
			}
		}
	};
});