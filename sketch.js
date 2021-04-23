var canvas, backgroundImage;

var Steve
var Craftingtable
var Pickaxe
var Sword
var Shovel
var Axe
var Stone
var Diamond
var obsidian
var netherportal
var netherfort
var blaze
var blazerod
var blazepowder
var enderman
var enderpearl
var endereye
var endportalframe
var endportal
var endstone
var enderdragon
var wood
var form, player, game;
var dirt

function preload(){
bg=loadImage("images/background.png");
SteveImage=loadAnimation("images/0.png","images/1.png","images/2.png","images/3.png","images/4.png");
CraftingtableImage=loadImage("images/craftingtable.png")
DirtImage=loadImage("images/dirt block.png")
stoneImage=loadImage("images/Stone.png")
woodImage=loadImage("images/wood.png")
leavesImage=loadImage("images/leaves.jpg")
BedrockImage=loadImage("images/Bedrock.png")
ironoreImage=loadImage("images/iron ore.png")
endermanImage=loadImage("images/Enderman.png")
InventoryImage=loadImage("images/inventory.png")
heartImage=loadImage("images/heart.png")
foodlevelImage=loadImage("images/food level.png")
obsidianImage=loadImage("images/obsidian.jpg")
portalImage=loadImage("images/portal.png")
}
function setup(){
  canvas = createCanvas(displayWidth*4,displayHeight);
Steve=createSprite(800,800)
Steve.addAnimation("walking",SteveImage);
Steve.scale=0.7;
dirtGroup=new Group()

Craftingtable=createSprite(500,668)
Craftingtable.addImage(CraftingtableImage);
Craftingtable.scale=0.12;

ground=createSprite(740,800,1900,185)
ground.visible=false
ground.x = ground.width /2;

wood=createSprite(displayWidth-220,displayHeight-400,55)
wood.addImage(woodImage)
wood.scale=0.14

wood2=createSprite(displayWidth-220,displayHeight-450,55)
wood2.addImage(woodImage)
wood2.scale=0.14

wood3=createSprite(displayWidth-220,displayHeight-500,55)
wood3.addImage(woodImage)
wood3.scale=0.14

leaves=createSprite(displayWidth-220,displayHeight-550,55)
leaves.addImage(leavesImage)
leaves.scale=0.26

leaves2=createSprite(displayWidth-220,displayHeight-600,55)
leaves2.addImage(leavesImage)
leaves2.scale=0.26

leaves3=createSprite(displayWidth-220,displayHeight-650,55)
leaves3.addImage(leavesImage)
leaves3.scale=0.26

leaves4=createSprite(displayWidth-270,displayHeight-550,55)
leaves4.addImage(leavesImage)
leaves4.scale=0.26

leaves5=createSprite(displayWidth-270,displayHeight-600,55)
leaves5.addImage(leavesImage)
leaves5.scale=0.26

leaves6=createSprite(displayWidth-320,displayHeight-550,55)
leaves6.addImage(leavesImage)
leaves6.scale=0.26

leaves7=createSprite(displayWidth-170,displayHeight-550,55)
leaves7.addImage(leavesImage)
leaves7.scale=0.26

leaves8=createSprite(displayWidth-170,displayHeight-600,55)
leaves8.addImage(leavesImage)
leaves8.scale=0.26

leaves9=createSprite(displayWidth-114,displayHeight-550,55)
leaves9.addImage(leavesImage)
leaves9.scale=0.26

ironore=createSprite(500,600)
ironore.addImage(ironoreImage)
ironore.scale=0.12

for(var i=0; i<displayWidth*5;i=i+50){
dirtSprite=createSprite(i-displayWidth*2,displayHeight-360,50,50);
dirtSprite.addImage(DirtImage)
dirtSprite.scale=0.15
dirtGroup.add(dirtSprite)
if(mousePressedOver(dirtGroup)){
dirtGroup.destoryEach()
}


Stone=createSprite(i-displayWidth*2,displayHeight-300,55,55)
Stone.addImage(stoneImage)
Stone.scale=0.15

Stone1=createSprite(i-displayWidth*2,displayHeight-250,55,55)
Stone1.addImage(stoneImage)
Stone1.scale=0.15

Stone2=createSprite(i-displayWidth*2,displayHeight-160,55,55)
Stone2.addImage(stoneImage)
Stone2.scale=0.15

Stone3=createSprite(i-displayWidth*2,displayHeight-100,55,55)
Stone3.addImage(stoneImage)
Stone3.scale=0.15

Stone4=createSprite(i-displayWidth*2,displayHeight-200,55,55)
Stone4.addImage(stoneImage)
Stone4.scale=0.15

Stone5=createSprite(i-displayWidth*2,displayHeight-40,55,55)
Stone5.addImage(stoneImage)
Stone5.scale=0.15

Bedrock=createSprite(i-displayWidth*2,displayHeight-20,55,55)
Bedrock.addImage(BedrockImage)
Bedrock.scale=0.15

obsidian=createSprite(displayWidth-512,displayHeight-552,55)
obsidian.addImage(obsidianImage)
obsidian.scale=0.11

obsidian1=createSprite(displayWidth-512,displayHeight-462,55)
obsidian1.addImage(obsidianImage)
obsidian1.scale=0.11

obsidian2=createSprite(displayWidth-512,displayHeight-502,55)
obsidian2.addImage(obsidianImage)
obsidian2.scale=0.11

obsidian3=createSprite(displayWidth-512,displayHeight-502,55)
obsidian3.addImage(obsidianImage)
obsidian3.scale=0.11

obsidian4=createSprite(displayWidth-562,displayHeight-602,55)
obsidian4.addImage(obsidianImage)
obsidian4.scale=0.11

obsidian5=createSprite(displayWidth-562,displayHeight-412,55)
obsidian5.addImage(obsidianImage)
obsidian5.scale=0.11

obsidian6=createSprite(displayWidth-614,displayHeight-412,55)
obsidian6.addImage(obsidianImage)
obsidian6.scale=0.11

obsidian7=createSprite(displayWidth-614,displayHeight-602,55)
obsidian7.addImage(obsidianImage)
obsidian7.scale=0.11

obsidian8=createSprite(displayWidth-666,displayHeight-552,55)
obsidian8.addImage(obsidianImage)
obsidian8.scale=0.11

obsidian9=createSprite(displayWidth-666,displayHeight-502,55)
obsidian9.addImage(obsidianImage)
obsidian9.scale=0.11

obsidian10=createSprite(displayWidth-666,displayHeight-461,55)
obsidian10.addImage(obsidianImage)
obsidian10.scale=0.11

portal=createSprite(displayWidth-562,displayHeight-502,55)
portal.addImage(portalImage)
portal.scale=0.265

portal2=createSprite(displayWidth-562,displayHeight-550,55)
portal2.addImage(portalImage)
portal2.scale=0.265

portal3=createSprite(displayWidth-562,displayHeight-460,55)
portal3.addImage(portalImage)
portal3.scale=0.265

portal4=createSprite(displayWidth-615,displayHeight-502,55)
portal4.addImage(portalImage)
portal4.scale=0.265

portal5=createSprite(displayWidth-615,displayHeight-550,55)
portal5.addImage(portalImage)
portal5.scale=0.265

portal6=createSprite(displayWidth-615,displayHeight-460,55)
portal6.addImage(portalImage)
portal6.scale=0.265

enderman=createSprite(450,629)
enderman.addImage(endermanImage);
enderman.scale=0.3;
}
for(var i=600; i<displayWidth-600; i=i+60){
  inventorySprite=createSprite(i-displayWidth,displayHeight-100,50,50);
  inventorySprite.addImage(InventoryImage)
  inventorySprite.scale=0.8
}
for(var i=0; i<10;i++){
  heartSprite=createSprite(600+35*i,displayHeight-150,20,20);
  heartSprite.addImage(heartImage)
  heartSprite.scale=0.08
}
for(var i=0; i<10;i++){
  foodlevelSprite=createSprite(1000+30*i,displayHeight-150,20,20);
  foodlevelSprite.addImage(foodlevelImage)
  foodlevelSprite.scale=0.2}
}
function draw(){
  background(bg);
  //if(keyDown("w")){
  //Steve.y=Steve.y-3
  //}
  if(keyDown("s")){
  Steve.y=Steve.y+7
  }
  if(keyDown("D")){
    Steve.x=Steve.x+7
    }
    if(keyDown("a")){
      Steve.x=Steve.x-7;
    }
    Steve.collide(ground);
    ground.collide(Craftingtable)
 camera.position.x=Steve.x
 camera.position.y=displayHeight/2

  drawSprites()
}
function mouseClicked(){
}