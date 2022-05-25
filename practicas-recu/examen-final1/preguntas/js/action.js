$(function (e) {
    $("li").on("click",(e)=>{
        $(e.currentTarget).addClass("seleccionado").siblings().removeClass("seleccionado")
    })
    $("button").on("click",(e)=>{
        let i=0
        let p1 = $("#pregunta1").find(".correcto").hasClass("seleccionado")
        let p2 = $("#pregunta2").find(".correcto").hasClass("seleccionado")
        let p3 = $("#pregunta3").find(".correcto").hasClass("seleccionado")
        let p4 = $("#pregunta4").find(".correcto").hasClass("seleccionado")
        if(p1==true){
            i++
        }
        if(p2==true){
            i++
        }
        if(p3==true){
            i++
        }
        if(p4==true){
            i++
        }
        $(e.currentTarget).next().html("")
        $(e.currentTarget).after("<h2>Respuestas acertadas: "+i+"</h2>")
    })
})