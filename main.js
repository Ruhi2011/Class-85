canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
nasamarsimagearray=["mars1.jfif","mars2.jfif","mars3.jpg","mars4.jfif"];
randomnumber=Math.floor(Math.random()*4);
console.log(randomnumber);
roverwidth=100
roverheight=90
backgroundimage=nasamarsimagearray[randomnumber]
roverimage="rover.png"
rover_x=10
rover_y=10
function add() {
    backgroundimgTag=new Image();
    backgroundimgTag.onload=uploadBackground;
    backgroundimgTag.src=backgroundimage;
    roverimgTag=new Image();
    roverimgTag.onload=uploadrover;
   roverimgTag.src=roverimage;
}
function uploadBackground() {
    ctx.drawImage(backgroundimgTag,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(roverimgTag,rover_x,rover_y,roverwidth,roverheight);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=='38') {
        uploadBackground();
        console.log("up");
    }
    if (keyPressed=='40') {
        down();
        console.log("down")
    }
    if (keyPressed=='37') {
        left();
        console.log("left")
    }
    if (keyPressed=='39') {
        right();
        console.log("right")
    }
}
function up() {
    if(rover_y>=0) {
        rover_y-=10;
        console.log("When up arrow is pressed, x ="+rover_x+"|y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down() {
    if(rover_y<=500) {
        rover_y+=10;
        console.log("When down arrow is pressed, x ="+rover_x+"|y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left() {
    if(rover_x>=0) {
        rover_x-=10;
        console.log("When left arrow is pressed, x="+rover_x+"|y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right() {
    if(rover_x<=700) {
        rover_x+=10;
        console.log("When right arrow is pressed, x ="+rover_x+"|y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}