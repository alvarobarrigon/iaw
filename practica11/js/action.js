$(function () {

    let jqxhr=$.ajax({
        url:"http://jorgesanchez.net/practicas/iaw/practica11/comunidades.php",
        dataType:"json",
        method:"GET"
    })
    jqxhr.done(function (data) {
        let comunidades = $(data.comunidades)
        for (var comunidad of comunidades) {
            $("#comunidad").append(
                "<option value='" + comunidad.id_comunidad + "'>" + comunidad.nombre + "</option>"
            )
        }
    })
    $("#comunidad").on("change",(e)=>{
        let id_comun = $("#comunidad").val()
        let jqxhr=$.ajax({
            url:"http://jorgesanchez.net/practicas/iaw/practica11/provincias.php",
            dataType:"json",
            method:"GET",
            data:{
                id_comunidad:id_comun
            }
        })
        jqxhr.done(function (data) {
            console.log(id_comun)
            //for (var)
        })


    })
    /*let jqxhr=$.ajax({
        url:"http://jorgesanchez.net/practicas/iaw/practica11/localidades.php",
        dataType:"json",
        method:"GET"
    })*/
})