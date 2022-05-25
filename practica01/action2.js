$(function () {
    $("#btImagen").on("click", (e) => {
        $("img").toggleClass("ocultar")
        let $text = $(e.currentTarget).text();
        if ($text == "Ocultar") {
            $(e.currentTarget).text("Mostrar")
        } else {
            $(e.currentTarget).text("Ocultar")
        }
    })
    $(".fondo").on("click", (e) => {
        let $fondo = $(e.currentTarget).css("background-color");
        $("main").css({
            "background-color": $fondo
        })
    })
    $(".letra").on("click", (e) => {
        let $letra = $(e.currentTarget).css("background-color");
        $("main").css({
            "color": $letra
        })
    })
})