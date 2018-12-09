function ajoutMenu()
{
    let conteneur = document.getElementById("conteneurCloneMenu");
    let clone = document.getElementsByClassName("monCloneMenu")[0].cloneNode(true);
    conteneur.appendChild(clone);
}

function ajoutCatégorie()
{
    let conteneur = document.getElementById("conteneurCloneCat");
    let clone = document.getElementsByClassName("monCloneCat")[0].cloneNode(true);
    conteneur.appendChild(clone);
}

function ajoutArticle()
{
    let conteneur = document.getElementById("conteneurCloneArticle");
    let clone = document.getElementsByClassName("monCloneArticle")[0].cloneNode(true);
    conteneur.appendChild(clone);
}

function supprimer()
{
    let suppTab = document.querySelectorAll("input[type=checkbox]");
    suppTab.forEach(
        elt=>
        {
            if(elt.checked)
                elt.parentNode.parentNode.parentNode.remove();
        });
}