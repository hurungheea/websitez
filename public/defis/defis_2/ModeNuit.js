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
    ButonLancement.id = "onOFF";
    ButonLancement.type = "button";
    ButonLancement.className = "btn btn-outline-dark btn-lg";
//    ButonLancement.style.border="none";
//    ButonLancement.style.padding="4px";
//    ButonLancement.style.borderRadius="6px";
//    ButonLancement.style.background="white"
    ButonLancement.innerHTML = "Mode Nuit";
    document.getElementById("BoutonModeNuit").appendChild(ButonLancement);

    //Par ce qu'il est a moi.
    var MonDiv = document.createElement("div");
    document.body.appendChild;
    MonDiv.id = "classDiv";
    MonDiv.className = "border border-dark rounded shadow-lg p-3 mb-5 bg-white rounded";
    MonDiv.style.display = "none";
    
    document.getElementById("BoutonModeNuit").appendChild(MonDiv);

    //Il est 00h00 je créer la premiere fonction.
    ButonLancement.addEventListener("click", function()
    {
        if(MonDiv.style.display == "none")
        {
          document.dispatchEvent(new Event("jour"));
          MonDiv.style.display = "inherit";
        }
        else if(MonDiv.style.display == "inherit")
        {
          document.dispatchEvent(new Event("nuit"));
          MonDiv.style.display = "none";
        }
    }
    );  
    
    //Et du texte blabla
    var BlackWhite = document.createElement("p");
    BlackWhite.className = "text-center h5";
    BlackWhite.innerHTML = "Contraste";
    document.getElementById("classDiv").appendChild(BlackWhite);
    
    //J'ai menti j'écris tout les commentaires a la fin, comme tout le monde.
    var Group = document.createElement("div");
    document.body.appendChild;
    Group.id = "group"
    Group.className = "input-group";
    document.getElementById("classDiv").appendChild(Group);
    
    //Y'a décidemment beaucoup de variables dans ce code.
    //Et un slider et un !
    var Slider = document.createElement("input");
    Slider.disabled = true;
    Slider.type = "range";
    Slider.className = "form-control";
    Slider.min = 0;
    Slider.max = 255;
    document.getElementById("group").appendChild(Slider);
    
    //Ouai ouai des groupes, on est là...
    var Group_1 = document.createElement("div");
    Group_1.id = "group_1";
    Group_1.className = "input-group-append";
    document.getElementById("group").appendChild(Group_1);
    
    var Span = document.createElement("span");
    Span.id = "span";
    Span.className = "input-group-text";
    document.getElementById("group_1").appendChild(Span);
    
    //J'ai capté que y avait 124 participants sur ce défi, M D R, on est mal.
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "input-group-text";
    checkBox.checked = false;
    document.getElementById("span").appendChild(checkBox);

    // !!Spoiler ALERT!! : Y aura aussi un br3 !
    var br2 = document.createElement("br");
    document.getElementById("classDiv").appendChild(br2);

    //Si vous regardez bien c'est pas trop en face on a essayer Ooopacité et Opacitée ca a pas plus marché.
    var Opacity = document.createElement("p");
    Opacity.className = "text-center h5";
    Opacity.innerHTML = "Opacité";
    document.getElementById("classDiv").appendChild(Opacity);
    
    //DU - DU - DU - DUEL !
    var Group2 = document.createElement("div");
    document.body.appendChild;
    Group2.id = "group2";
    Group2.className = "input-group";
    document.getElementById("classDiv").appendChild(Group2);
    
    //Mais y aura pas de Slider3
    var Slider2 = document.createElement("input");
    Slider2.disabled = true;
    Slider2.type = "range";
    Slider2.className = "form-control";
    Slider2.min = 0.2;
    Slider2.max = 1;
    Slider2.step = 0.1;
    Slider2.value = 1.0;
    document.getElementById("group2").appendChild(Slider2);
    
    //Ouai ouai des groupes 12, c'est dégueulasse...
    var Group_12 = document.createElement("div");
    Group_12.id = "group_12";
    Group_12.className = "input-group-append";
    document.getElementById("group2").appendChild(Group_12);
    
    //Beurk
    var Span2 = document.createElement("span");
    Span2.id = "span2";
    Span2.className = "input-group-text";
    document.getElementById("group_12").appendChild(Span2);

    //Le Retour de la checkbox.
    var checkBox2 = document.createElement("input");
    checkBox2.type = "checkbox";
    checkBox2.className = "input-group-text";
    checkBox2.checked = false;
    document.getElementById("span2").appendChild(checkBox2);

    //J'l'avais dis en vrai.
    var br3 = document.createElement("br");
    document.getElementById("classDiv").appendChild(br3);

    //La fonction reset, elle reset.
    var reset = document.createElement("button");
    reset.type = "button";
    reset.className = "btn btn-outline-danger btn-lg";
    reset.innerHTML = "Reset";
    document.getElementById("classDiv").appendChild(reset);
    
    //Vous la fermez! Pas la bouche, la fenêtre...
    var close = document.createElement("button");
    close.type = "button";
    close.className = "btn btn-outline-dark btn-lg";
    close.ariaLabel = "close";
    close.innerHTML = 'Fermer';
    document.getElementById("classDiv").appendChild(close);

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
        document.body.style.opacity = Slider2.value;
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
        document.body.style.backgroundColor = saveBackgroundColor;
        document.body.style.color = saveTextColor;
    });
    
    close.addEventListener("click", function()
    {
        if(MonDiv.style.display == "none")
        {
          document.dispatchEvent(new Event("jour"));
          MonDiv.style.display = "inherit";
        }
        else if(MonDiv.style.display == "inherit")
        {
          document.dispatchEvent(new Event("nuit"));
          MonDiv.style.display = "none";
        }
    }
    );

    //Laisser un petit Salut dans la console ca se fait ou pas ?
    console.log("salut");

});
