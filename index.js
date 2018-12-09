var express = require('express');
const app = express();
const fs = require('fs');
const config = require("./config");
const glob = require('glob');
const bodyParser = require('body-parser');
const qr = require('qr-encode');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(global.port,function()
{
    console.log("écoute sur le port 8080");
});

app.get('/',function(req,res)
{
    res.sendFile('index.html',{root:'../../public/index.html'});
});

app.post("/create",function(req,res)
{
    client = req.body
    createFiles(client.siteName);
});

function createFiles(fileName)
{
    fs.open(fileName+".html","w",function(err,file)
    {
        if(err)
            throw err;
            generateMyWebsite(file);
    });
}

function generateMyWebsite(file)
{
    injectionHeader(file);
    injectionBody(file);
    injectionDebNav(file);
    injectionNavA(file);
    injectionFinNav(file);
    injectionDebBodyCatElmts(file);
    injectionFinBodyCatElmts(file);
    injectionDebBodyItemShopElmts(file);
    //injectionFinBodyItemShopElmts(file);
    injectionDebBodyPrixItemShopElmts(file);
    injectionDebFinPrixItemShopElmts(file);
    injectionBodyElts(file);
    injectionFooter(file);
    injectionSocialMedias(file);
    injectionEndDoc(file);
}

//Création du site client
function injectionHeader(file)
{
    let myHeader =
`<!doctype html>
<html lang="fr">
<head>
    <title> ${client.siteName} </title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="by - Code Save The Code">
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"/>
    
    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="./public/css/style.css"/>
`;
    fs.appendFile(file,myHeader,err =>{if(err) throw err});
}

function injectionBody(file)
{
    let myBody =
`</head>
<body>
`;

fs.appendFile(file,myBody,err =>{if(err) throw err});
}

function injectionDebNav(file)
{
    let myNav = 
`   <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Made by Code Save The Queen</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
`;
    fs.appendFile(file,myNav,err =>{if(err) throw err});
}

//Injection des menus de naviguation saisi par l'utilisateur
function injectionNavA(file)
{
    let myNav= "";
    for(let i = 0; i < client.nav.length; i++)
    {
        myNav += 
`                       <a class="nav-link" href="#">${client.nav[i]}</a>
`;
    }
    fs.appendFile(file,myNav,err =>{if(err) throw err});
}

//Fin du nav
function injectionFinNav(file)
{
    let myFinNav = 
`                  </li>
                </ul>
            </div>
        </div>
    </nav>
`;
    fs.appendFile(file,myFinNav,err =>{if(err) throw err});
}

//injection des catégories saisis par l'utilisateur
function injectionDebBodyCatElmts(file)
{
    let myCatElts = "";
    for(let i = 0; i < client.bodyCatElts.length; i++)
    {
        myCatElts +=
`   <div class="container">
      <div class="row">
        <div class="col-lg-3">
            <h1 class="my-4">Catégories</h1>
            <div class="list-group">
                <a href="#" class="list-group-item"> ${bodyCatElts[i]}</a>
`;
    }
    fs.appendFile(file,myCatElt,err =>{if(err) throw err});
}

//fin des catégories
function injectionFinBodyCatElmts(file)
{
    let myFinCatElmts = 
    `       </div>
        </div>
`;
    fs.appendFile(file,myFinCatElmts,err =>{if(err) throw err});
}

//injection des elements à vendre saisis par l'utilisateur
function injectionDebBodyItemShopElmts(file)
{
    let myItemShopElts = "";
    for(let i = 0; i < client.bodyItemShopElts.length; i++)
    {
        myItemShopElts +=
`       <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#">${client.bodyItemShopElts[i]}</a>
                    </h4>
`;
    }
    fs.appendFile(file,myItemShopElts,err =>{if(err) throw err});
}

//function injectionFinBodyItemShopElmts(file)
//{
//`                   </h4>
//`;
//
//    fs.appendFile(file,myElts,err =>{if(err) throw err});
//}

//injection des prix des elements à vendre saisis par l'utilisateur
function injectionDebBodyPrixItemShopElmts(file)
{
    let myPrixItemShopElts = "";
    for(let i = 0; i < client.bodyPrixItemShopElts.length; i++)
    {
        myPrixItemShopElts +=
`                   <h5>${bodyPrixItemShopElts[i]}</h5>
`;
    }
    fs.appendFile(file,myPrixItemShopElts,err =>{if(err) throw err});
}

//fin des prix
function injectionFinBodyPrixItemShopElmts(file)
{
    let myFinPrixItemShopElts =
`                   </div>
                    <div class="card-footer">
                        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
    fs.appendFile(file,myFinPrixItemShopElts,err =>{if(err) throw err});
}

function injectionBodyElts(file)
{
    let myElts =
`   <main class="container" role="main">
        <h4 class display-1> Desciption de votre site </h4>
        <p class="lead">${client.bodyText}</p>
    </main>
`;
    fs.appendFile(file,myElts,err =>{if(err) throw err});
}

function injectionFooter(file)
{
    let myFooter =
`   <footer class="py-5 bg-dark'>

        <!-- Footer Elements -->
        <div class="container">

            <!-- Grid row-->
            <div class="row">

                <!-- Grid column -->
                <div class="col-md-12 py-5">
                    <div class="mb-5 flex-center">
                        <div class="social-networks text-center py-3">
`;
    fs.appendFile(file,myFooter,err =>{if(err) throw err});
}

function injectionSocialMedias(file)
{
    let mesRez =
    `                       <!-- Facebook -->
                            <a href="https://facebook.com/${client.fb}" class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </a>
                            <!-- Twitter -->
                            <a href="https://twitter.com/${client.twitter}" class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </a>
`;
    fs.appendFile(file,mesRez,err =>{if(err) throw err});
}

function injectionEndDoc(file)
{   
    let myEnd =
    `                   </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">
            <p>Copyright &copy; 2018 - Template made by Code Save The Queen - All Rights Reserved</p>
        </div>
    </footer>
    
    !-- Bootstrap core JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script> 
</body>
</html>`;
    fs.appendFile(file,myEnd,err =>{if(err) throw err});
}