
jQuery(document).ready(function(){

    $("h3").click(function()
    {
        var cor = $("#cor").val();
        $(this).css("color", cor);
    });

});
