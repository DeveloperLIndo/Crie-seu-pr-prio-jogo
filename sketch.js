var bg,bgImg;
var player, shooterImg, shooter_shooting;
var backgroundmusic;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  
  backgroundmusic = loadSound("assets/backgroundmusic.mp3");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.8
  

  //criando o sprite do jogador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.5
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)


  //criar duas linhas tortas para colocar um limite na estrada

  //um limite para a horizontal da estrada
  //depois é só você colocar essas linhas no visible = false



}

function draw() {
  background(0); 

  if (!backgroundmusic.isPlaying()) { 
    backgroundmusic.play(); 
    backgroundmusic.setVolume(0.1); 
  }

  //movendao o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-15
  player.scale=player.scale -0.005;
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+15
 player.scale=player.scale+0.005;
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+15
 }
 if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-15
 }


//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
if(keyWentDown("space")){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= bullet.y-20
  player.addImage(shooter_shooting)
  bullet.scale=0.12
  bullet.velocityX= 7

}

//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
else if(keyWentUp("space")){
  player.addImage(shooterImg)

}


  

drawSprites();

}


//dicazin :3 crie uma função de tiro aqui