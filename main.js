canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
mouseEvent="Empty";


canvas.addEventListener("mousedown",my_md);

function my_md(e){
    color=document.getElementById("color").value;
    line_width=document.getElementById("line_width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
} 

canvas.addEventListener("mouseleave",my_ml)

function my_ml(e){
    mouseEvent="mouseleave";
} 

canvas.addEventListener("mouseup",my_mu)

function my_mu(e){
    mouseEvent="mouseUP";
} 

canvas.addEventListener("mousemove",my_move)

function my_move(e){
 current_position_x=e.clientX- canvas.offsetLeft;
 current_position_y=e.clientY- canvas.offsetTop;

 if(mouseEvent=="mouseDown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=line_width;

 ctx.arc(current_position_x,current_position_y,radius,0,2* Math.PI)
 ctx.stroke()
 }

 last_position_y=current_position_y;
 last_position_x=current_position_x;
 
} 

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
