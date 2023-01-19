//carregando o módulo http
const http =  require('http');

//cria servidor http que envia mensagem
var server = http.createServer(function(request, response){
    //define cabeçalho com tipo resposta
    response.writeHead(200, {"Content-type" : "text/plain"});

    //menssagem de retorno
    response.end("Ola mundo NODE\n");
});

//porta que servidor vai usar
server.listen(3000);

//menssagem ao iniciar
console.log("Servidor iniciado em http://localhost:3000/");
    
