$(function (e) {
    let jqxhr = $.ajax({
        url:"https://www.balldontlie.io/api/v1/teams",
        method: "get",
        dataType: "json"
    })
    jqxhr.done(function (data) {
        let equipos = data.data
        for(equipo of equipos){
            if(equipo.conference=="West"){
                $("#oeste").append("<p>"+equipo.full_name+" (<em>"+equipo.abbreviation+"</em>)</p>")
            }else{
                $("#este").append("<p>"+equipo.full_name+" (<em>"+equipo.abbreviation+"</em>)</p>")
            }
        }
    })
})