$(function () {
    $("#bt1").on("click",(e)=>{
        let $texto=$(e.currentTarget).text()
        if($texto=="Expandir todo"){
            $(e.currentTarget).text("Ocultar todo")
            $("h2,h3").addClass("click")
            $(".contenido").slideDown()

        }else{
            $(e.currentTarget).text("Expandir todo")
            $("h2,h3").removeClass("click")
            $(".contenido").slideUp()
        }
    })
    $("h2,h3").on("click",(e)=>{
        $(e.currentTarget).next().slideToggle()
        $(e.currentTarget).toggleClass("click")
    })
})