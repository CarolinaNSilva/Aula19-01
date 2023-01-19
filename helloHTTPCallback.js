//carregando o módulo http
const http = require('http');

//cria servidor http que envia mensagem
var callback = function(request, response){
    //define cabeçalho com tipo resposta
    response.writeHead(200, {"Content-type" : "text/plain"});

    //menssagem de retorno
    response.end("Ola mundo NODE\n");
};
// Servidor HTTP
var server = http.createServer(callback);

//porta que servidor vai usar
server.listen(3000);

//menssagem ao iniciar o servidor
console.log("Servidor Iniciado");