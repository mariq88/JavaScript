var myimage = document.getElementById("picture");

var imageArr = ["pictures/29.jpg","pictures/29_1.jpg","pictures/29_2.jpg","pictures/29_3.jpg","pictures/29_4.jpg","pictures/29_5.jpg","pictures/29_6.jpg","pictures/29_7.jpg"];
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
