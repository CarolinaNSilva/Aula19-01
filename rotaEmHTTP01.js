// carrega modulos
var http = require('http');
var url = require('url');

//função de callback par servidor http
var callback = function (request, response){
    //define o  hader com typo de resposta
    response.writeHead(200, {"Content-type" : "text/plain; charset=utf-8"});
    //fas o parse da url separando caminho ou rota
    var parts = url.parse(request.url);

    //verifica rota
    if(parts.path == "/"){
        response.end("site principal");
    }else if(parts.path == "/rota1"){
        response.end("rota1");
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