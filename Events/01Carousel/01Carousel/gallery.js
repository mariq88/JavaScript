var myimage = document.getElementById("picture");

var imageArr = ["pictures/29.jpg","pictures/29_1.jpg","pictures/29_2.jpg","pictures/29_3.jpg","pictures/29_4.jpg","pictures/29_5.jpg",
"pictures/29_6.jpg","pictures/29_7.jpg"];
var counter = 1;

function changeImage() {
	myimage.setAttribute("src", imageArr[counter]);
	counter++;
	if(counter >= imageArr.length){
		counter = 0;
	}
}

function changeImageBack() {
	myimage.setAttribute("src", imageArr[counter]);
	counter--;
	if(counter <= 0){
		counter = imageArr.length-1;
	}
}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       changeImageBack();
    }
    else if (e.keyCode == '39') {
        changeImage();
    }
}

document.onkeydown = checkKey;
/*var intervalHandler = setInterval(changeImage, 2000);*/

/*myimage.onclick = function(){
	clearInterval(intervalHandler);
};*/