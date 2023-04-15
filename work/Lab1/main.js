let imageURL_Array = {
    "拉麵":["https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg"],
    "滷肉飯":["https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg"],
    "水餃":["https://pic03.eapple.com.tw/siangnong/xn_i_img02.png"],
    "披薩":["https://tokyo-kitchen.icook.network/uploads/recipe/cover/372073/60ad2eda9638fa38.jpg"]
};

function Get_RandomNumber(numberOfListItem){
	var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
	return randomChildNumber;
}

var last_number = -1;

$(function(){
	$("input").on("click",function(){
		var numberOfListItem = $("li").length;
		var randomChildNumber = Get_RandomNumber(numberOfListItem);
		while(last_number == randomChildNumber)
		{
			randomChildNumber = Get_RandomNumber(numberOfListItem);
		}
		last_number=randomChildNumber;
		$("h1").text($("li").eq(randomChildNumber).text());
		$("img").attr("src",imageURL_Array[$("h1").text()]);
	});
});
