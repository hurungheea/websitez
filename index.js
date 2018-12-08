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
    res.sendFile('index.html',{root:'./public/index.html'});
});

app.post("/siteNameCheck",function(req,res)
{
    res.send('hello');
});

app.post("/create",function(req,res)
{
    /*
    client = req.body
    createFiles(client.siteName);
    */
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
    injectionBodyElts(file);
    injectionFooter(file);
    injectionSocialMedias(file);
    injectionEndDoc(file);
}

function injectionHeader(file)
{
    let myHeader =
`<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8"/>
    <title> ${client.siteName} </title>
    <link rel="stylesheet" type="text/css" href="./public/css/style.css"/>
    <link rel="stylesheet" type="text/css" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-grid.min.css"/>
    <link rel="stylesheet" type="text/js" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js"/>
`;
    fs.appendFile(file,myHeader,err =>{if(err) throw err});
}

function injectionBody(file)
{
    let myBody =
`</head>
<body class="text-center">
`;

fs.appendFile(file,myBody,err =>{if(err) throw err});
}

function injectionBodyElts(file)
{
    let myElts =
`   <main class="container" role="main">
        <h4> ${client.bodyText} </h4>
    </main>
`;

    fs.appendFile(file,myElts,err =>{if(err) throw err});
}

function injectionDebNav(file)
{
    let myNav = 
`   <!-- Navigation -->
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="masthead mb-auto">
            <div class="inner">
                <nav class="nav nav-masthead justify-content-center">
`;
    fs.appendFile(file,myNav,err =>{if(err) throw err});
}

function injectionNavA(file)
{
    let myNav= "";/*
    for(let i = 0; i < client.nav.length; i++)
    {
        myNav += 
`                   <a class="nav-link active" href="#">${client.nav[i]}</a>
`;
    }*/
    fs.appendFile(file,myNav,err =>{if(err) throw err});
}

function injectionFinNav(file)
{
    let myFinNav = 
    `           </nav>
            </div>
        </header>
    </div>
`;
    fs.appendFile(file,myFinNav,err =>{if(err) throw err});
}

function injectionFooter(file)
{
    let myFooter =
`<footer class="footer'>

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
        <p> © 2018 Template made by Code Save The Queen - All Rights Reserved</p>
    </div>
</footer>
</body>
</html>`;
    fs.appendFile(file,myEnd,err =>{if(err) throw err});
}