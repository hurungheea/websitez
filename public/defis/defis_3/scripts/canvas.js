'use strict';

class Sprite
{
  constructor(src, percentWidth, percentHeight)
  {
    this.image=new Image();
    this.image.src=src;
    this.widthPercent=percentWidth;
    this.heightPercent=percentHeight;
    this.width=0;
    this.height=0;
  }
}

var width;
var height;
var context;

var ok = true;
var nbEtoiles;
var etoiles=[];
var compteur=99;
var stimerId;

var intervalles=[];

var animationIds=[];

var police=new Object()
police.size=14;
police.type="Helvetica";


//Fullscreen
var fullscreen=new Sprite("./images/fullscreen.svg",0.05,0.05);
fullscreen.enabled=true;
var fullscreenAnimationId;
var fullscreenBool=false;

//Anim
var backgroundJour=new Sprite("./images/dessin_demarrage_jour.svg",1,1);
var backgroundNuit=new Sprite("./images/dessin_demarrage_nuit.svg",1,1);
var chouette = new Sprite("./images/dessin_hiboux_face_dodo.svg",0.25,0.25);
chouette.marginBottom=0.01;
chouette.marginTop=0.3;
var chouetteWalkSpritesIndex=0;
var chouetteWalkSprites=[];
chouetteWalkSprites[0]="./images/dessin_hiboux_profil_droit.svg";
chouetteWalkSprites[1]="./images/dessin_hiboux_marche_droite_1.svg";
chouetteWalkSprites[2]="./images/dessin_hiboux_marche_droite_2.svg";
var zzzBool=true;
var zzz=new Sprite("./images/dessin_zzz_1.svg",0.3,0.1);
zzz.marginTop=0.03;
zzz.marginLeft=0.134;
var frameCount;

var gameMode;
var chouetteDab;

var buttonStart=new Object();

var labelScore=new Object();
labelScore.widthPercent=0.1;
labelScore.heightPercent=0.07;
labelScore.topMargin=0.02;
labelScore.text="0";

buttonStart.widthPercent=0.3;
buttonStart.heightPercent=0.1;
buttonStart.text="Jouer!";
buttonStart.exec=function()
{
  buttonStart.enabled=false;
  cancelAnimations();
  frameCount=0;
  animationIds[0]=window.requestAnimationFrame(drawBlackScreen);
}


var fusee = new Sprite("./images/dessin_fusee_entiere.svg",0.33,0.65);
fusee.bottomMargin=0.2;

function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function cancelAnimations()
{
  for(let i=0; i<animationIds.length; i++)
  {
    window.cancelAnimationFrame(animationIds[i]);
  }
}

function randomEtoiles()
{
  for (let i= 0;i<300;i++)
  {
    var coorx = Math.random() * width;
    var coory = Math.random() * height;
    var size = getRandom(1,4);
    etoiles[i]={x:coorx,y:coory,s:size};
  }
}

/*function genInters()
{
  for (let i=0;i<50;i++)
  {
    intervalles[i]=setInterval(drawletter, 10);
  }
}

function safeArea()
{
  //todo
}

function drawLetters()
{

}*/

function drawFullscreenIcon()
{
  fullscreen.width=width*fullscreen.widthPercent;
  fullscreen.height=height*fullscreen.heightPercent;
  fullscreen.x=width-fullscreen.width;
  fullscreen.y=height-fullscreen.height;
  context.drawImage(fullscreen.image, fullscreen.x, fullscreen.y, fullscreen.width, fullscreen.height);
  fullscreenAnimationId=window.requestAnimationFrame(drawFullscreenIcon);
}

function drawMapDay()
{


  context.drawImage(backgroundJour.image, 0, 0, width, height);
  chouette.image.src="./images/dessin_hiboux_face_dodo.svg";
  chouette.width=width*chouette.widthPercent;
  chouette.height=height*chouette.heightPercent;
  chouette.x=0;
  chouette.y=height-(chouette.marginBottom*height)-chouette.height;
  context.drawImage(chouette.image, chouette.x, chouette.y, chouette.width, chouette.height);
  frameCount++;
  if(frameCount==35)
  {
    if(zzzBool)
    {
      zzz.image.src="./images/dessin_zzz_1.svg";
      zzzBool=false;
    }
    else
    {
      zzz.image.src="./images/dessin_zzz_2.svg";
      zzzBool=true;
    }

    frameCount=0;
  }
  context.drawImage(zzz.image,chouette.x+width*zzz.marginLeft, chouette.y+width*zzz.marginTop, width*zzz.widthPercent, height*zzz.heightPercent);
  animationIds[0]=window.requestAnimationFrame(drawMapDay);
}

function drawAnim()
{
  if(frameCount==11)
  {
    context.drawImage(backgroundNuit.image,0,0,width,height);
    frameCount=0;
    if (chouetteWalkSpritesIndex<3)
    {
      chouette.image.src=chouetteWalkSprites[chouetteWalkSpritesIndex];
      chouetteWalkSpritesIndex++;
    }
    else
    {
      chouetteWalkSpritesIndex=1;
    }
    chouette.x+=chouette.width/4;
    context.drawImage(chouette.image, chouette.x, chouette.y, chouette.width, chouette.height);
    animationIds[0]=window.requestAnimationFrame(drawAnim);
  }
  else if(chouette.x<width*0.44)
  {
    frameCount++;
    animationIds[0]=window.requestAnimationFrame(drawAnim);
  }
  else
  {
    context.drawImage(backgroundNuit.image,0,0,width,height);
    chouette.image.src="./images/dessin_hiboux_face.svg";
    chouette.image.onload=function(){    context.drawImage(chouette.image, chouette.x, chouette.y, chouette.width, chouette.height);};

    animationIds[0]=window.requestAnimationFrame(drawStartButton);
  }
}

function drawBlackScreen()
{

  if(frameCount<=20)
  {
    context.globalAlpha=(frameCount*5)/100;
    context.fillStyle="black";
    context.fillRect(0,0,width,height);
    frameCount++;
    animationIds[0]=window.requestAnimationFrame(drawBlackScreen);
  }
  else
  {
    context.globalAlpha=1;
    startGame();
  }

}

function startGame()
{
  animationIds[0]=window.requestAnimationFrame(drawMapNight);
  animationIds[1]=window.requestAnimationFrame(drawFusee);
  animationIds[2]=window.requestAnimationFrame(drawScoreLabel);
  fullscreenAnimationId=window.requestAnimationFrame(drawFullscreenIcon);
  fullscreen.enabled=true;
  startScore();
  gameMode=true;
  chouetteDab=true;
}

function drawMapNight()
{
  width=canvas.width;
  height=canvas.height;
  compteur++;
  if(compteur>100)
  {
    compteur=0;
    ok = true;
  }
  if (compteur>=99&&compteur<=100)
  {
    context.fillStyle="black";
    context.fillRect(0,0,width, height);
  }
  else if(ok==true){
    for(let i=0;i<300;i++){
      //context.fillStyle="white";

      var colorrange = [0,60,240];
      var hue = colorrange[getRandom(0,colorrange.length - 1)];
      var sat = getRandom(50,100);
      context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";

      context.fillRect(etoiles[i].x,etoiles[i].y,etoiles[i].s,etoiles[i].s);
      ok = false;
    }
  }
  animationIds[0]=window.requestAnimationFrame(drawMapNight);
}

function drawFusee()
{
  fusee.width=width*fusee.widthPercent;
  fusee.height=height*fusee.heightPercent;
  context.drawImage(fusee.image, (width/2)-(fusee.width/2), height-(fusee.height*fusee.bottomMargin)-fusee.height, fusee.width,fusee.height);
  chouette.width=width*chouette.widthPercent;
  chouette.height=height*chouette.heightPercent;
  chouette.x=(width/2)-(chouette.width/2);
  chouette.y=(height/2)-(chouette.height/2)-(chouette.height*chouette.marginTop);
  context.drawImage(chouette.image, chouette.x, chouette.y, chouette.width,chouette.height);

  animationIds[1]=window.requestAnimationFrame(drawFusee);
}

function drawStartButton()
{
  //Dessin du bouton
  buttonStart.width=width*buttonStart.widthPercent;
  buttonStart.height=height*buttonStart.heightPercent;
  buttonStart.x=(width/2)-(buttonStart.width/2),
  buttonStart.y=height/2-(buttonStart.height/2);
  buttonStart.enabled=true;
  context.fillStyle="green";
  context.fillRect(buttonStart.x, buttonStart.y, buttonStart.width, buttonStart.height);

  //Ecriture du texte
  context.font = police.size+"px "+police.type;
  context.fillStyle="white";
  let textSize=new Object();
  textSize.width=context.measureText(buttonStart.text).width;
  textSize.height=police.size;
  context.fillText(buttonStart.text, buttonStart.x+(buttonStart.width/2)-(textSize.width/2), buttonStart.y+(buttonStart.height/2)+(textSize.height/2));
  animationIds[2]=window.requestAnimationFrame(drawStartButton);
}

function drawScoreLabel()
{
  //Dessin du bouton
  labelScore.width=width*labelScore.widthPercent;
  labelScore.height=height*labelScore.heightPercent;
  labelScore.x=(width/2)-(labelScore.width/2),
  labelScore.y=height*labelScore.topMargin;
  context.fillStyle="grey";
  context.fillRect(labelScore.x, labelScore.y, labelScore.width, labelScore.height);

  //Ecriture du texte
  context.font = police.size+"px "+police.type;
  context.fillStyle="white";
  let textSize=new Object();
  textSize.width=context.measureText(labelScore.text).width;
  textSize.height=police.size;
  context.fillText(labelScore.text, labelScore.x+(labelScore.width/2)-(textSize.width/2), labelScore.y+(labelScore.height/2)+(textSize.height/2));
  animationIds[2]=window.requestAnimationFrame(drawScoreLabel);
}

window.addEventListener("load", function()
{
  //Recupération canvas/contexte
  let canvas=document.getElementById("canvas");
  context=canvas.getContext('2d');
  width=canvas.width;
  height=canvas.height;

  nbEtoiles = 200;
  randomEtoiles();
  stimerId = setInterval(randomEtoiles,500);

  frameCount=0;

  animationIds[0]=window.requestAnimationFrame(drawMapDay);
  fullscreenAnimationId=window.requestAnimationFrame(drawFullscreenIcon);

  document.addEventListener("jour", function()
  {
    buttonStart.enabled=false;
    fullscreen.enabled=true;
        gameMode=false;
    cancelAnimations();
    resetScore();
    frameCount=0;
    animationIds[0]=window.requestAnimationFrame(drawMapDay);
    fullscreenAnimationId=window.requestAnimationFrame(drawFullscreenIcon);
  });
  document.addEventListener("nuit", function()
  {
    cancelAnimations();
    resetScore();
    gameMode=false;
    frameCount=0;
    chouette.x=0;
    chouette.y=height-(chouette.marginBottom*height)-chouette.height;
    fullscreen.enabled=false;
    animationIds[0]=window.requestAnimationFrame(drawAnim);
    window.cancelAnimationFrame(fullscreenAnimationId);

  });

  canvas.addEventListener("click",function(event)
  {
    let rect = canvas.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    if(mouseX>buttonStart.x && mouseX<(buttonStart.x+buttonStart.width) && mouseY > buttonStart.y && mouseY<(buttonStart.y+buttonStart.height) && buttonStart.enabled)
    {
      buttonStart.exec()

    }
    else if(mouseX>fullscreen.x && mouseX<(fullscreen.x+fullscreen.width) && mouseY > fullscreen.y && mouseY<(fullscreen.y+fullscreen.height) && fullscreen.enabled)
    {
      if(fullscreenBool)
      {
        fullscreenBool=false;
        canvas.height=240;
        canvas.width=320;
        police.size=(police.size/1.3);
      }
      else
      {
        fullscreenBool=true;
        canvas.height=600;
        canvas.width=800;
        police.size=(police.size*1.3);

      }
      width=canvas.width;
      height=canvas.height;
    }
    else if(gameMode)
    {
        if(chouetteDab)
        {
          chouette.image.src="./images/dessin_hiboux_doite_dab.svg"
          chouetteDab=false;
        }
        else
        {
          chouette.image.src="./images/dessin_hiboux_gauche_dab.svg"
          chouetteDab=true;
        }
    }
  });

  //// TEMP:
  let boutonJour=document.getElementById('jour');
  boutonJour.addEventListener("click", function()
  {
    document.dispatchEvent(new Event("jour"));
  });
  let boutonNuit=document.getElementById('nuit');
  boutonNuit.addEventListener("click", function()
  {
    document.dispatchEvent(new Event("nuit"));
  });
});
