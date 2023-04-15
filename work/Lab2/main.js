$(function(){
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