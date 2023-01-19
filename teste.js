// function testarVar(){
//     var a = 1;
//     var b = 2;
//     var soma = a +b;
//     var nome = "Nicoly avelinooo";
//     if(nome == undefined){
//         console.log("Teste 1 - Nome não foi definido")
//     }
//     if(typeof(nome) == "undefined"){
//         console.log("Teste 2 - Nome não definido")
//     }
//     console.log("O tipo do nome é %s e o tipo de soma é %s", typeof(nome), typeof(soma))
//     console.log("Olá %s, o resultado da soma é: %d", nome, soma, "que" , "legal");


// }

// testarVar();


//----------------------------------------------
// function testeArray(){
//     var numeros = [1,2,3];
//     numeros.push(4);
//     numeros.push(5);
//     numeros.push(6);
//     numeros.pop();
//     console.log("FOR----------")
//     for(let i = 0; numeros.length > i; i++){
//         console.log(numeros[i]);
//     }
//     console.log("FOR IN----------")
//     for(let i in numeros){  // outra forma de percorrer um array
//         console.log(numeros[i]);
//     }
//     // outra forma usando MAP
//     console.log("MAP----------")
//     numeros.map(n => console.log(n));
// }
// testeArray();


//-------------------------------Declarando Classes e Objetos----------------------------------------------
function objeto1(){
    var pessoa = Object();
    pessoa.nome = "Carol";
    pessoa.hello = function(){
        return "Hello " + pessoa.nome;
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}
objeto1();

function objeto2(){
    var pessoa = {
        nome: "Nicoly",
        hello: function(){
            return "hello " + pessoa.nome;
        }
    }
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}
objeto2()

function Pessoa(){
    this.nome = "Leticia";
    this.hello = function(){
        return "Hello " + this.nome;
    }
}
function objeto3(){
    var pessoa = new Pessoa();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}
objeto3();

class Pessoa2 {
    constructor(){
        this.nome = "Karina";
    }
    hello(){
        return "Hello " + this.nome;
    }
}
function objeto4(){
    var pessoa = new Pessoa2();
    console.log(pessoa);
    console.log(pessoa.nome);
    console.log(pessoa.hello());
}
objeto4();

//-----------------------------------------------------------------------------