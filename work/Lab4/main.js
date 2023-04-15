let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
const gridLength = 50;

function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
        numImages++;
    }
    for (var src in sources) {
        images[src] = new Image();
        images[src].onload = function () {
            if (++loadedImages >= numImages) {
                callback(images);
            }
        };
        images[src].src = sources[src];
    }
}

//initial
$(function(){
	$("#startbutton").on("click",function(){
		ctx = $("#myCanvas")[0].getContext("2d");
		ctx.clearRect(0,0,800,800);
		
		// 0 : available, 1 : Mountain, 2 : pudding, 3 : Enemy, 4 : Money, 5 : Sword, 6 : Meat, 7 : Big Boss, 8 : Final Stop		
		mapArray = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]
		];
		
		for(var i =0;i<16;i++)
		{
			for(var j =0;j<16;j++)
			{
				if((i!=0||j!=0)&&(i!=0||j!=1)&&(i!=1||j!=0)&&(i!=1||j!=1)&&(i!=14||j!=15)&&(i!=15||j!=14)&&(i!=14||j!=14)&&(i!=15||j!=15))
				{
					var randomChildNumber = Math.floor(Math.random()* 9);
					console.log(randomChildNumber);
					mapArray[i][j]=randomChildNumber;
				}
			}
		}

		imgMain = new Image();
		imgMain.src = "images/spriteSheet.png";
		currentImgMain = {
			x:0,
			y:0
		};

		imgMain.onload = function(){
			ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x, currentImgMain.y, gridLength,gridLength);
			// ctx.drawImage(imgMain, 360, 0, 80, 130, 200,0, gridLength, gridLength*3);
		};


		let sources = {
			mountain: "images/material.png",
			enemy: "images/Enemy.png"
		};

		loadImages(sources, function(images){
			for (let x in mapArray) {
				for (let y in mapArray[x]) {
					if (mapArray[x][y] == 1) //Mountain
					{
						ctx.drawImage(images.mountain, 32, 193, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
					} 
					else if (mapArray[x][y] == 3) // Enemy
					{
						ctx.drawImage(images.enemy, 350, 40, 70, 135, y * gridLength, x * gridLength, gridLength, gridLength);
					}
					else if (mapArray[x][y] == 4) //Money
					{
						ctx.drawImage(images.mountain, 160, 33, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
					}
					else if (mapArray[x][y] == 5) // Sword
					{
						ctx.drawImage(images.mountain, 288, 1, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
					}
					else if (mapArray[x][y] == 6) // Meat
					{
						ctx.drawImage(images.mountain, 32, 129, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
					}
					else if (mapArray[x][y] == 7) // Big Boss
					{
						ctx.drawImage(images.enemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
					}
					else if (mapArray[x][y] == 2) // pudding
					{
						ctx.drawImage(images.mountain, 0, 97, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
					}
					else if (mapArray[x][y] == 8) // star
					{
						ctx.drawImage(images.mountain, 224, 31, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
					}
				}
			}
		});
		$("input").attr("value","ReStart");
	});
});

//Click Event
$(document).on("keydown", function(event){
    console.log(event.code);
    let targetImg, targetBlock, cutImagePositionX;
    targetImg = {
        x:-1,
        y:-1
    };
    targetBlock = {
        x:-1,
        y:-1
    };
	
	let doubletargetImg, doubletargetBlock;
	doubletargetImg = {
        x:-1,
        y:-1
    };
	doubletargetBlock = {
        x:-1,
        y:-1
    };
	
    event.preventDefault();
    switch(event.code){
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
			doubletargetImg.x = currentImgMain.x - gridLength - gridLength;
			doubletargetImg.y = currentImgMain.y;
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength;
			doubletargetImg.x = currentImgMain.x;
			doubletargetImg.y = currentImgMain.y - gridLength - gridLength;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
			doubletargetImg.x = currentImgMain.x + gridLength + gridLength;
			doubletargetImg.y = currentImgMain.y;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength;
			doubletargetImg.x = currentImgMain.x;
			doubletargetImg.y = currentImgMain.y + gridLength + gridLength;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }

    if(targetImg.x <= 750 && targetImg.x >=0 && targetImg.y <= 750 && targetImg.y >=0){
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x / gridLength;
    }else{
        targetBlock.x = -1;
        targetBlock.y = -1;
    }

	if(doubletargetImg.x <= 750 && doubletargetImg.x >=0 && doubletargetImg.y <= 750 && doubletargetImg.y >=0){
        doubletargetBlock.x = doubletargetImg.y / gridLength;
        doubletargetBlock.y = doubletargetImg.x / gridLength;
    }else{
        doubletargetBlock.x = -1;
        doubletargetBlock.y = -1;
    }

    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);

    if(targetBlock.x != -1 && targetBlock.y != -1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0:
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1:
				alert("MEET Mountain!");
                break;
            case 9: // Final Stop
				alert("抵達終點");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 3: //Enemy
				alert("MEET Enemy!");
                break;
			case 4: //Money
				currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
				ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
				mapArray[targetBlock.x][targetBlock.y] = 0;
                break;
			case 5: //Sword
				currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
				ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
				mapArray[targetBlock.x][targetBlock.y] = 0;
                break;
			case 6: //Meat
				currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
				ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
				mapArray[targetBlock.x][targetBlock.y] = 0;
                break;	
			case 7: //Big Boss
				alert("MEET Big Boss!");
                break;
			case 2: //pudding
				currentImgMain.x = targetImg.x;
				currentImgMain.y = targetImg.y;
				ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
				mapArray[targetBlock.x][targetBlock.y] = 0;
                break;	
			case 8: //star
				if(doubletargetBlock.x != -1 && doubletargetBlock.y != -1)
				{
					currentImgMain.x = doubletargetImg.x;
					currentImgMain.y = doubletargetImg.y;
					ctx.clearRect(targetImg.x, targetImg.y, gridLength, gridLength);
					ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
					mapArray[targetBlock.x][targetBlock.y] = 0;
					mapArray[doubletargetBlock.x][doubletargetBlock.y] = 0;
				}
				else
				{
					alert("邊界");
					currentImgMain.x = targetImg.x;
					currentImgMain.y = targetImg.y;
					ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);
					mapArray[targetBlock.x][targetBlock.y] = 0;
				}
                break;
        }
    }else{
		alert("邊界");
    }

    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);

});
