var canvas= new fabric.Canvas('myCanvas');

block_height=40;
block_width= 40;

player_x= 10;
player_y= 10;

player_object="";
block_image="";

function player_update(){
fabric.Image.fromURL("player.png", function (Img){
player_object= Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(150);
player_object.set({
top: player_y,
left: player_x
});
canvas.add(player_object);
});
}


function new_image(get_image){
fabric.Image.fromURL(get_image, function (Img)   
{
var block_image=Img;
block_image.scaleToWidth(block_width);
block_image.scaleToHeight(block_height);
block_image.set({
top: player_y,
left: player_x
});
canvas.add(block_image);});}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPress=e.keyCode;
    console.log(keyPress);
    
if (e.shiftKey==true && keyPress=='80'){
console.log("P and Shift are pressed together");
block_width=block_width+10;
block_height=block_height+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}
if (e.shiftKey==true && keyPress=='77'){
console.log("M and Shift are pressed together");
block_width=block_width-10;
block_height=block_height-10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
    }

if (keyPress=='70'){
new_image("spiderman_face.png");
console.log("f");}

if (keyPress=='66'){
new_image("ironman_body.png");
console.log("b");}

if (keyPress=='76'){
new_image("hulk_legs.png");
console.log("l");}

if (keyPress=='82'){
new_image("thor_right_hand.png");
console.log("r");}
        
if (keyPress=='72'){
new_image("captain_america_left_hand.png");
console.log("h");}

if (keyPress=='38'){
up();
console.log("Up");}
                    
if (keyPress=='40'){
 down();
 console.log("Down");}
                        
if (keyPress=='37'){
left();
console.log("Left");}
                    
if (keyPress=='39'){
     right();
console.log("Right");}}



function up(){
if (player_y>=0){
player_y= player_y-10;
console.log("X= "+ player_x+ " Y= "+player_y);
canvas.remove(player_object);
player_update();}}

function down(){
if (player_y<=550){
player_y=player_y+10;
console.log("X= "+ player_x+ " Y= "+player_y);
canvas.remove(player_object);
player_update();}}

function left(){
if (player_x>=0){
player_x= player_x-10;
console.log("X= "+ player_x+ " Y= "+player_y);
canvas.remove(player_object);
player_update();}}

function right(){
if (player_x<=950){
player_x= player_x+10;
console.log("X= "+ player_x+ " Y= "+player_y);
canvas.remove(player_object);
player_update();}}


