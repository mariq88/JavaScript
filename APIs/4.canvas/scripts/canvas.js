(function () {
	  var ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
	
	ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

  //bycicle
   ctx.fillStyle="#8fcb0e";
    ctx.arc(55, 400, 50, 0, 2 * Math.PI, false);
     ctx.fill();
    ctx.moveTo(55, 400);
    ctx.lineTo(115, 350);
    ctx.lineTo(215,330);
    ctx.lineTo(135,400);
    ctx.lineTo(55,400);
  ctx.stroke();

//wheel
ctx.beginPath();
ctx.fillStyle="#8fcb0e";
     ctx.arc(245, 400, 50, 0, 2 * Math.PI, false);
     ctx.fill();
      ctx.moveTo(245, 400);
     ctx.lineTo(205, 280);
     ctx.lineTo(215,250);
     ctx.moveTo(205,280);
     ctx.lineTo(145,270);
  ctx.stroke();

//pedals
        ctx.lineWidth = 2;
    ctx.beginPath();
     
     ctx.arc(135,400,15,0,2*Math.PI,false);
 ctx.moveTo(122,390);
 ctx.lineTo(105,385);
 ctx.moveTo(148,405);
 ctx.lineTo(165,415);

     //seat
     ctx.moveTo(135,400);
     ctx.lineTo(105,320);
     ctx.moveTo(85,320);
     ctx.lineTo(125,320);
    ctx.stroke();

//head
    ctx.beginPath();
    ctx.strokeStyle = "#08a7bc";
    ctx.fillStyle="#fdefa1";
    ctx.lineWidth = 3;
ctx.arc(100, 200, 60, 0, Math.PI * 2, false);
ctx.fill();
ctx.stroke();

//hat
  ctx.save();
    ctx.scale(1, 0.2);
    ctx.beginPath();
    ctx.arc(100, 700, 70, 0, Math.PI * 2, false);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.restore();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#f00";
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
 ctx.save();
 
     ctx.beginPath();
    ctx.moveTo(55, 40);
    ctx.lineTo(55, 130);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000";
    ctx.fillStyle="#000"
    ctx.lineTo(145,40)
    ctx.lineTo(145, 130);
    ctx.fillRect(56, 45, 89, 85);
    ctx.stroke();
   
    //hat top
    ctx.scale(1, 0.35);
    ctx.beginPath();
    ctx.arc(100, 110, 45, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.restore();
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
    ctx.closePath();

//left eye
 ctx.save();
    ctx.scale(1, 0.65);
    ctx.beginPath();
    ctx.arc(58, 265, 13, 0, Math.PI * 2, false);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.restore();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#1c4d58";
    ctx.stroke();
    ctx.restore();
    ctx.closePath();

 ctx.save();
    ctx.scale(0.6, 1);
    ctx.beginPath();
    ctx.arc(88, 172, 7, 0, Math.PI * 2, false);
    ctx.fillStyle = "#08a7bc";
    ctx.fill();
    ctx.restore();
    ctx.closePath();

    //right eye

     ctx.save();
    ctx.scale(1, 0.65);
    ctx.beginPath();
    ctx.arc(115, 265, 13, 0, Math.PI * 2, false);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.restore();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000";
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
 
    // inner part of right eye
    ctx.save();
    ctx.scale(0.6, 1);
    ctx.beginPath();
    ctx.arc(183, 172, 7, 0, Math.PI * 2, false);
    ctx.fillStyle = "#08a7bc";
    ctx.fill();
    ctx.restore();
    ctx.closePath();
 
    // nose
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#1c4d58";
    ctx.moveTo(85, 175);
    ctx.lineTo(70, 205);
    ctx.lineTo(83, 205);
    ctx.stroke();
    ctx.closePath();
 
    // mouth
    ctx.save();
    ctx.beginPath();
    ctx.setTransform(1, 0.1, 0, 0.3, 0, 0);
    ctx.arc(85, 758, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = "#f17a58";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#f15d33";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

//house
     // walls
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = "#fdefa1";
    ctx.strokeStyle = "#000000";
    ctx.fillRect(400, 270, 305, 230);
    ctx.strokeRect(400, 270, 305, 230);
    ctx.closePath();
 
    // roof
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.moveTo(400, 270);
    ctx.lineTo(552, 105);
    ctx.lineTo(703, 270);
    ctx.lineTo(700, 270);
    ctx.stroke();
    ctx.fillStyle = "#f00";
    ctx.fill();
    ctx.closePath();
 
    // windows
    ctx.beginPath();
    ctx.fillStyle = "#7ac0d8";
    ctx.strokeStyle = "#fdefa1";
    ctx.lineWidth = 4;
    ctx.fillRect(420, 295, 105, 70);
    ctx.moveTo(472, 295);
    ctx.lineTo(472, 365);
    ctx.moveTo(420, 330);
    ctx.lineTo(525, 330);
    ctx.stroke();
    ctx.closePath();
 
    ctx.beginPath();
    ctx.fillRect(570, 295, 105, 70);
    ctx.moveTo(622, 295);
    ctx.lineTo(622, 365);
    ctx.moveTo(570, 330);
    ctx.lineTo(675, 330);
    ctx.stroke();
    ctx.closePath();
 
    ctx.beginPath();
    ctx.fillRect(570, 395, 105, 70);
    ctx.moveTo(622, 395);
    ctx.lineTo(622, 465);
    ctx.moveTo(570, 430);
    ctx.lineTo(675, 430);
    ctx.stroke();
    ctx.closePath();
 
    // door
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.save();
    ctx.scale(1, 0.6);
    ctx.arc(473, 696, 40, Math.PI + 0.1, Math.PI * 2 - 0.1, false);
    ctx.restore();
    ctx.moveTo(433, 415);
    ctx.lineTo(433, 501);
    ctx.moveTo(513, 415);
    ctx.lineTo(513, 501);
    ctx.moveTo(473, 395);
    ctx.lineTo(473, 501);
    ctx.stroke();
    ctx.closePath();
 
    // doorknobs
    ctx.beginPath();
    ctx.arc(460, 465, 5, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.moveTo(485,465);
    ctx.arc(485, 465, 5, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    // chimney
    ctx.fillStyle = "#f00";
    ctx.fillRect(625, 150, 30, 85);

    ctx.fill();
    ctx.moveTo(625, 149);
    ctx.lineTo(625, 235);
    ctx.moveTo(655, 149);
    ctx.lineTo(655, 235);
    ctx.save();
    ctx.scale(1, 0.3);
    ctx.arc(640, 491, 15, 0, Math.PI * 2, false);
    ctx.restore();
    ctx.fill();
    ctx.stroke();
}());