$(function (e) {
    $("div").on("click",(e)=>{
        let id = $(e.currentTarget).data('numero')
        $("#numero").val(id)
    })
    $("#aplicar").on("click",(e)=>{
        let texto = $("#texto").val()
        let color = $("#color").val()
        let n = $("#numero").val()
        $("#diapositiva"+n+"").css("background-color",color)
        $("#diapositiva"+n+" p").html(texto)
    })
    $("#borrar").on("click",(e)=>{
        $("#texto").val("")
        $("#color").val("#c8b699")
        $("#numero").val(1)
    })
    $("div").on("dblclick",(e)=>{
        $(e.currentTarget).css("background-color","#c8b699")
        $(e.currentTarget).find("p").html("")
    })

    $( "main" ).sortable({
        revert: true
    });
    $( "main, div" ).disableSelection();
})