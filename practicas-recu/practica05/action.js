$(function (e) {
    let numero = aleatorio(1,1000)
    let i=0
    let iTotal=0
    let partidas=0
    console.log(numero)
        $("#comprobar").on("click", (e) => {
            e.preventDefault()
            console.log("iTotal: "+iTotal)
            console.log("i: "+i)
            if ($("#number").val() > numero) {
                i++
                $("#fallo").html(
                    "<p>¡¡Fallaste!!</p>" +
                    "<p>Mi numero es menor</p>" +
                    "<p>Intentos: " + i + "</p>"
                )
            } else if ($("#number").val() < numero) {
                i++
                $("#fallo").html(
                    "<p>¡¡Fallaste!!</p>" +
                    "<p>Mi numero es mayor</p>" +
                    "<p>Intentos: " + i + "</p>"
                )
            } else {
                $(".normal").css("display", "none")
                $(".bt2").css("display", "block")
                i++
                iTotal=iTotal+i
                partidas++
                $("#acierto").html(
                    "<div class='acertado'>" +
                    "<h1>¡¡Has Acertado!!</h1>" +
                    "<p>Intentos: " + i + "</p>" +
                    "</div>"
                )
            }
        })
        $("#dejar").on("click", (e) => {
            e.preventDefault()
            $(".cancelado,.bt2").css("display", "none")
            if (partidas >= 1) {
                $(".dejar").css("display", "block").append(
                    "<p>Partidas jugadas: " + partidas + "</p>" +
                    "<p>Intentos por partidas: " + iTotal / partidas + "</p>"
                )
                $(".acertado").css("display", "none")

            } else {
                $(".dejar").css("display", "block")
            }

        })
        $("#volver").on("click", (e) => {
            e.preventDefault()
            numero = aleatorio(1,1000)
            i=0
            $("#number").val("500")
            console.log(numero)
            $("small").html(partidas+1)
            $(".normal").css("display", "block")
            $(".cancelado,.bt2,.acertado").css("display", "none")
        })
        $("#cancelar").on("click", (e) => {
            e.preventDefault()
            $(".normal").css("display", "none")
            $(".cancelado,.bt2").css("display", "block")
        })
        $("#number").on("focus", (e) => {
            $("#fallo").html(" ")
        })

})