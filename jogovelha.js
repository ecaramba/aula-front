$(document).ready(function(){
    
    var jogador = 1;

    var tabuleiro = [
        0,0,0,
        0,0,0,
        0,0,0
    ];

    // var posibilidades = [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9],

    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [3, 6, 9],

    //     [1, 5, 9],
    //     [3, 5, 7]
    // ];

    $(".casa").click(function(){

        var pos = $(this).attr("pos");

        if (tabuleiro[pos] != 0)
        {
            // para a função nesse ponto
            return;
        }

        tabuleiro[pos] = jogador;

        if (jogador == 1)
        {
            $(this).html("X");
            jogador = 2;
        } else {
            $(this).html("O");
            jogador = 1;
        }
        console.log(tabuleiro)

        if (tabuleiro[0] == tabuleiro[1] && tabuleiro[1] == tabuleiro[2] && tabuleiro[0] != 0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[0]);
        } else if (tabuleiro[3] == tabuleiro[4] && tabuleiro[4] == tabuleiro[5] && tabuleiro[3] != 0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[3]);
        } else if (tabuleiro[6] == tabuleiro[7] && tabuleiro[7] == tabuleiro[8] && tabuleiro[6] != 0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[6]);
        } else if (tabuleiro[0] == tabuleiro[3] && tabuleiro[3] == tabuleiro[6] && tabuleiro[0] != 0 )
        {
            alert("O vencedor é o jogador: " + tabuleiro[3]);
        } else if (tabuleiro[1] == tabuleiro[4] && tabuleiro[4] == tabuleiro[7] && tabuleiro[1] != 0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[1]);
        } else if (tabuleiro[2] == tabuleiro[5] && tabuleiro[5] == tabuleiro[8] && tabuleiro[2] != 0 )
        {
            alert("O vencedor é o jogador: " + tabuleiro[2]);
        } else if (tabuleiro[0] == tabuleiro[4] && tabuleiro[4] == tabuleiro[8] && tabuleiro[0] != 0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[0]);
        } else if (tabuleiro[2] == tabuleiro[4] && tabuleiro[4] == tabuleiro[6] && tabuleiro[2] != 0)
        {
            alert("O vencedor é o jogador: " + tabuleiro[2]);
        }


    }); // fim do .casa

    $(".bt-novo").click(function(){
        location.reload();
    });



});