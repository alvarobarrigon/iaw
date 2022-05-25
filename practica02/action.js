$(function () {
    $("#bt1").on("click",(e)=> {
        if($(e.target).text() ==="Expandir todo") {
            $(e.target).text("Contraer todo");
            $("h2,h3").next().slideDown();
            $("h2,h3").addClass("click");
        }else {
            $(e.target).text("Expandir todo");
            $("h2,h3").next().slideUp();
            $("h2,h3").removeClass("click");
        }
    });
    $("h2,h3").on("click",(e)=>{
        $(e.currentTarget).toggleClass("click");
        $(e.currentTarget).next().slideToggle();
    });
    /*let temporizador=setTimeout(
        handler:function() {
            $("ayuda").show
    };timeout:10000
    )*/
})

