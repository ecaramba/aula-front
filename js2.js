// aula Js

var idade = 12; // number

if (idade == "12abc")
{
    console.log("verdade");
} else {
    console.log("falso");
}



// lista -> vetor -> array
var cidades = ["Curitiba", "Pinhais", "Colombo"];

// lendo um item
console.log( cidades[1] );

// add um elemento no vetor
cidades.push("Araucaria");


console.log( cidades[0] );
console.log( cidades[1] );
console.log( cidades[2] );
console.log( cidades[3] );

// loops -> repetições

var ini = 0;
var fim = cidades.length - 1; // 3

while (ini <= fim)
{
    console.log( cidades[ini] );

    ini = ini + 1; // 3
}

function oi()
{

    console.log(valor.value);
}

function maiusculas() 
{
    var texto = valor.value;
    console.log( texto.toUpperCase() );   
}

function letra()
{
    var texto = valor.value;
    var letra = texto.charAt(0);
    var resto = texto.substring(1);

    var novo = letra.toUpperCase() + resto.toLowerCase();

    console.log(novo);
}

function contagem()
{
    var ini = parseInt(valor.value);

    while (ini >= 0) 
    {
        console.log(ini);
        ini = ini - 1;   
    }
}