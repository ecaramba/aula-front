
jQuery(document).ready(function(){

    $("h3").click(function()
    {
        var cor = $("#cor").val();
        $(this).css("color", cor);
    }); // fim do h3


    $(".bt").click(function(){

        var valor = $("#nome").val();
        var sexo = $("#sexo").val();

        $(".campo input, .campo select").removeClass("erro");


        if (valor.trim().length < 3)
        {
            alert("O campo nome é obrigatório");
            $("#nome").addClass("erro");
        }

        if (sexo == '')
        {
            alert("O campo sexo é obrigatório");
            $("#sexo").addClass("erro");
        }

    }); // fim do .bt

});
