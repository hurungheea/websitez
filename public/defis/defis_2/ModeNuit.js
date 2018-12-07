'use strict'

window.addEventListener("load", function()
{
  //On creer des variables aux nom sympathique, j'crois.
  var saveBackgroundColor = document.body.style.backgroundColor;
  var saveTextColor=document.body.style.color;

  //Une var Br qui est un br, c'est du code évident
  var br = document.createElement("br");
  document.body.appendChild(br);

//Attention dans ce code ya beaucoup de variables
  var ButonLancement = document.createElement("button");
  ButonLancement.id="onOFF";
  ButonLancement.style.border="none";
  ButonLancement.style.padding="4px";
  ButonLancement.style.borderRadius="6px";
  ButonLancement.style.background="white"
  ButonLancement.innerHTML="Mode Nuit";
  document.getElementById("BoutonModeNuit").appendChild(ButonLancement);

//Par ce qu'il est a moi.
  var MonDiv=document.createElement("div");
  document.body.appendChild;
  MonDiv.id="classDiv";
  MonDiv.style.display="none";
  MonDiv.style.border="solid black";
  MonDiv.style.borderRadius="6px";
  MonDiv.style.width="300px";
  document.getElementById("BoutonModeNuit").appendChild(MonDiv);

//Il est 00h00 je créer la premiere fonction.
  ButonLancement.addEventListener("click", function()
  {

      if(MonDiv.style.display=="none")
      {
        document.dispatchEvent(new Event("jour"));
        MonDiv.style.display="inherit";
      }
      else if(MonDiv.style.display=="inherit")
      {
        document.dispatchEvent(new Event("nuit"));
        MonDiv.style.display="none";
      }
  }
  );
//J'ai menti j'écrit tout les commentaires a la fin, comme tout le monde.
  var BlackWhite=document.createElement("text");
  BlackWhite.innerHTML="Contraste";
  document.getElementById("classDiv").appendChild(BlackWhite);

//Ya décidemment beaucoup de variables dans ce code.
  var Slider = document.createElement("input");
  Slider.disabled=true;
  Slider.type="range";
  Slider.min=0;
  Slider.max=255;
  document.getElementById("classDiv").appendChild(Slider);

//J'ai capté que y avait 124 participants sur ce défi, M D R, on est mal.
  var checkBox = document.createElement("input");
  checkBox.type="checkbox";
  checkBox.checked=false;
  document.getElementById("classDiv").appendChild(checkBox);

// !!Spoiler ALERT!! : Y aura aussi un br3 !
  var br2 = document.createElement("br")
  document.getElementById("classDiv").appendChild(br2);

//Si vous regardez bien c'est pas trop en face on a essayer Ooopacité et Opacitée ca a pas plus marché.
  var Opacity=document.createElement("text");
  Opacity.innerHTML="Opacité";
  document.getElementById("classDiv").appendChild(Opacity);

//Mais y aura pas de Slider3
  var Slider2 = document.createElement("input");
  Slider2.disabled=true;
  Slider2.type="range";
  Slider2.min=0.2;
  Slider2.max=1;
  Slider2.step=0.1;
  Slider2.value=1.0;
  document.getElementById("classDiv").appendChild(Slider2);

//Le Retour de la checkbox.
  var checkBox2 = document.createElement("input");
  checkBox2.type="checkbox";
  checkBox2.checked=false;
  document.getElementById("classDiv").appendChild(checkBox2);

//J'l'avais dis en vrai.
  var br3 = document.createElement("br")
  document.getElementById("classDiv").appendChild(br3);

//La fonction reset, elle reset.
  var reset = document.createElement("button");
  reset.innerHTML="Reset";
  reset.style.border="none";
  reset.style.padding="4px";
  reset.style.borderRadius="6px";
  reset.style.background="white"
  document.getElementById("classDiv").appendChild(reset);

//Attention c'est la fonction la plus compliquée..
  Slider.addEventListener("change", function(){
    var Valeur=Slider.value;
    var Valeur2=Slider2.value;
    document.body.style.backgroundColor= "rgba("+Valeur+","+Valeur+","+Valeur+","+Valeur2+")";
      if(Slider.value<=127)
      {
          document.body.style.color="white";
          ButonLancement.style.backgroundColor="white";
          ButonLancement.style.color="Black";
          reset.style.backgroundColor="white";
          reset.style.color="Black";
      }
      else
      {
        document.body.style.color="black";
        ButonLancement.style.backgroundColor="black";
        ButonLancement.style.color="white";
        reset.style.backgroundColor="black";
        reset.style.color="White";
      }
});


//Cette phrase est fausse. Du coup c'est faux, du coup c'est vrai, du coup c'est faux du coup.. vous avez compris, oui ca n'a rien avoir avec la fonction, je m'en fous je fais ce que je veux, et oui ce commentaire commence a être un peu long mais bon pour toute reclamation, se référer a la phrase précédente.
    Slider2.addEventListener("change", function(){
      console.log(Slider2.value);
      document.body.style.opacity=Slider2.value;
  });



//La seule blague c'est le concept, par ce qu'on est ici pour bosser, bordel.
    checkBox.addEventListener("change", function(){
      if (checkBox.checked==false)
      {
        Slider.disabled=true;
      }
      else
      {
        Slider.disabled=false;
      };

      });

//C'est l'histoire d'un défi fait a la derniére minute, le mec est la, cherche l'inspi et paf ca fait des chocapik. <-- degrés 0 de l'humour, il est 7h, j'ai pas dormi, j'suis excusé.
    checkBox2.addEventListener("change", function(){
      if (checkBox2.checked==false)
      {
         Slider2.disabled=true;
      }
      else
      {
        Slider2.disabled=false;
      };

      });

      reset.addEventListener("click", function(){
      document.body.style.backgroundColor=saveBackgroundColor;
      document.body.style.color=saveTextColor;
      })

//Laisser un petit Salut dans la console ca se fait ou pas ?
  console.log("salut");

});
