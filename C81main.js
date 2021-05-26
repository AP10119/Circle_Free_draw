var canvas2=document.getElementById("canvas10");
var twod_drawing=canvas2.getContext("2d");
var colorline="Black";
var widthline=5;
var mouseevents="empty";
var lastx,lasty;
var currentx,currenty;
canvas2.addEventListener("mousedown",select)
function select(e){
    colorline=document.getElementById("text_input").value;
    widthline=document.getElementById("text_input2").value;
    mouseevents="mousedown";
}
canvas2.addEventListener("mousemove",draw)
function draw(e){
    currentx=e.clientX-canvas2.offsetLeft;
    currenty=e.clientY-canvas2.offsetTop;
    if(mouseevents=="mousedown"){
        twod_drawing.beginPath();
    twod_drawing.strokeStyle=colorline;
    twod_drawing.lineWidth=widthline;
    twod_drawing.moveTo(lastx,lasty);
    twod_drawing.arc(currentx,currenty,40,0,2*Math.PI);
    twod_drawing.stroke();
    console.log(currentx)
    console.log(currenty)
    }
    lastx=currentx;
    lasty=currenty;
}
canvas2.addEventListener("mouseleave",stop)
function stop(e){
    mouseevents="mouseleave";
}
canvas2.addEventListener("mouseup",stop1)
function stop1(e){
    mouseevents="mouseup";
}
function Clear(){
    twod_drawing.clearRect(0,0,canvas2.width,canvas2.height)
}