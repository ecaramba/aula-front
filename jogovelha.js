$(document).ready(function(){
    
    var jogador = 1;

    $(".casa").click(function(){
        if (jogador == 1)
        {
            $(this).html("X");
            jogador = 2;
        } else {
            $(this).html("O");
            jogador = 1;
        }
    });

});