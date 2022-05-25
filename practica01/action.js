$(function(){
    $("#btImagen").on("click",function(e){
        $("img").toggleClass("ocultar");
        if($(e.target).text()==="Ocultar"){
            $(e.target).text("Mostrar");
        }else{
            $(e.target).text("Ocultar")
        }
    });
    $(".fondo").on("click",function (e) {
        $("main").css({
            "background-color":$(e.currentTarget).css("background-color")
        })
    })
    $(".letra").on("click",function (e) {
        $("main").css({
            "color":$(e.currentTarget).css("background-color")
        })
    })
})
