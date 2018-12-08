function ajoutMenu()
{
    let conteneur = document.getElementById("conteneurClone");
    let clone = document.getElementsByClassName("monClone")[0].cloneNode(true);
    conteneur.appendChild(clone);
}


function supprimerMenu()
{
    let suppTab = document.querySelectorAll("input[type=checkbox]");
    suppTab.forEach(
        elt=>
        {
            if(elt.checked)
                elt.parentNode.remove();
        });
}

function siteNameCheck()
{
    console.log("kokivide");
}