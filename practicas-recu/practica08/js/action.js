$(function (e) {
    let jqxhr = $.ajax({
        url:"https://breakingbadapi.com/api/characters",
        method:"get"
    })
    jqxhr.done(function (data) {
        $("#personajes").html('')
        $("select").append(
            "<option value='' disabled selected>Selecciona un personaje</option>"
        )
        for(personaje of data){
            $("select").append(
                "<option value='"+personaje.char_id+"'>"+personaje.name+"</option>"
            )
        }
        $("#personajes").on("change",(e)=>{
            let idPersonaje = $(e.currentTarget).val()
            let foto = $.ajax({
                url: "https://www.breakingbadapi.com/api/characters/"+idPersonaje,
                method: "get"
            })
            foto.done(function (data) {
                $("main").html(
                    "<img src='"+data[0].img+"' alt='"+data[0].name+"'>"
                )
            })
        })
    })
})