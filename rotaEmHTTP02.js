// carrega modulos
var fs = require('fs');
var http = require('http');
var url = require('url');

//função p/ ler um arquivo
function readFile(response,file){

    //faz leitura de forma assincrona
    fs.readFile(file, function(err, data){
        //responde json
        response.end(data);
    });
}

//função callback para servidor http
var callback = function (request,response){
    //define cabeçalho
     response.writeHead(200, {"Content-type" : "application/json; charset=utf-8"});

    //parse da url separando caminho (rota)
     var parts = url.parse(request.url);
     var path = parts.path;

     //verifica rota
    if(parts.path == "/rota1/cadastro"){
        readFile(response, "cadastro.json");
    }else if(parts.path == "/rota1/catalogo"){
        readFile(response, "catalogo.json");
    }else if(parts.path == "/rota1/dados"){
        readFile(response, "dados.json");
    }else {
        response.end("Rota invalida: " + parts.path);
    }
};
// Servidor HTTP
var server = http.createServer(callback);

//porta que servidor vai usar
server.listen(3000);

//menssagem ao iniciar o servidor
console.log("Servidor Iniciado");