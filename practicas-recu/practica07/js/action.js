$(function (e) {
    let tono = $("#tono").val();
    let saturacion = $("#saturacion").val();
    let luminosidad = $("#luminosidad").val();
    $("input").on("input change",(e)=>{
        let parametro = $(e.currentTarget).attr("id")
        let valor = $(e.currentTarget).val()
        tono = $("#tono").val();
        saturacion = $("#saturacion").val();
        luminosidad = $("#luminosidad").val();
        switch (parametro) {
            case "tono":
                $("#secTono span").html(valor)
                $("main").css("background-color","hsl("+tono+","+saturacion+"%,"+luminosidad+"%)")
                break
            case "saturacion":
                $("#secSaturacion span").html(valor+"%")
                $("main").css("background-color","hsl("+tono+","+saturacion+"%,"+luminosidad+"%)")
                break
            case "luminosidad":
                $("#secLuminosidad span").html(valor+"%")
                $("main").css("background-color","hsl("+tono+","+saturacion+"%,"+luminosidad+"%)")
        }
    })
    $("main").on("click",(e)=>{
        let fondo = $(e.currentTarget).css("background-color")
        $("footer").append(
            "<article style='background-color: "+fondo+"' data-tono='"+tono+"' data-saturacion='"+saturacion+"' " +
            "data-luminosidad='"+luminosidad+"'>&nbsp;</article>"
        )
    })
    $("footer")
        .on("click","article",(e)=>{
            let fondo = $(e.currentTarget).css("background-color")
            let dTono = $(e.currentTarget).data('tono')
            let dSaturacion = $(e.currentTarget).data('saturacion')
            let dLuminosidad = $(e.currentTarget).data('luminosidad')
            $("main").css("background-color",fondo)


            $("#tono").val(dTono)
            $("#secTono span").html(dTono)
            $("#saturacion").val(dSaturacion)
            $("#secSaturacion span").html(dSaturacion+"%")
            $("#luminosidad").val(dLuminosidad)
            $("#secLuminosidad span").html(dLuminosidad+"%")
        })
        .on("dblclick","article",(e)=>{
            $(e.currentTarget).remove()
        })
    $("#borrar").on("click",(e)=>{
        $("footer article").remove()
    })
    $("article").on("click",(e)=>{
        $("main").css("background-color",fondo)
    })
    $(".range").on("dblclick",(e)=>{
        if($(e.currentTarget).attr("id")=="tono"){
            $("#tono").val("180")
            $("#secTono span").html("180")
            $("main").css("background-color","hsl(180,"+saturacion+"%,"+luminosidad+"%)")
        }else if($(e.currentTarget).attr("id")=="saturacion"){
            $("#saturacion").val("50")
            $("#secSaturacion span").html("50%")
            $("main").css("background-color","hsl("+tono+",50%,"+luminosidad+"%)")
        }else if($(e.currentTarget).attr("id")=="luminosidad"){
            $("#luminosidad").val("50")
            $("#secLuminosidad span").html("50%")
            $("main").css("background-color","hsl("+tono+","+saturacion+"%,50%)")
        }
    })
})