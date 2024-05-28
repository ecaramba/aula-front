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
