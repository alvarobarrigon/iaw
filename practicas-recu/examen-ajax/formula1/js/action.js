$(function (e) {
    let año
    $("#btEquipos").on("click",(e)=>{
        año = $("#temporada").val()
        let jqxhr = $.ajax({
            url:"http://ergast.com/api/f1/"+año+"/constructors.json",
            method:"get",
            dataType:"json"
        })
        jqxhr.done(function (data) {
            let equipos = data.MRData.ConstructorTable.Constructors
            $("#sectTemporada").siblings().html("")
            $("#sectTemporada").after(
                "<section id='sectEquipos'>" +
                "<h1>Lista de Equipos, temporada "+año+"</h1>" +
                "</section>"
            )
            for(equipo of equipos){
                $("main").find("#sectEquipos").append(
                    "<p>"+equipo.name+" <button class='pilotos' " +
                    "data-constructor='"+equipo.constructorId+"' data-equipo='"+equipo.name+"'>" +
                    "Ver pilotos</button></p>")
            }
        })
    })
    $("main").on("click",".pilotos",(e)=>{
        let constructor = $(e.currentTarget).data('constructor')
        let equipo = $(e.currentTarget).data('equipo')
        let jqxhr = $.ajax({
            url:"http://ergast.com/api/f1/"+año+"/constructors/"+constructor+"/drivers.json",
            method:"get",
            dataType:"json"
        })
        jqxhr.done(function (data) {
            let pilotos = data.MRData.DriverTable.Drivers
            $("main").find("#sectEquipos").next().html("")
            $("main").find("#sectEquipos").after(
                "<section id='sectPilotos'>" +
                "<h1>Conductores del equipo "+equipo+", temporada "+año+"</h1>" +
                "</section>"
            )
            for(piloto of pilotos){
                $("main").find("#sectPilotos").append(
                    "<p>"+piloto.givenName+" "+piloto.familyName+"</p>"
                )
            }
        })
    })
})