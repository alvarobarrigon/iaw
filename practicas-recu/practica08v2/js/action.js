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
                "<option value='"+personaje.img+"'>"+personaje.name+"</option>"
            )
        }
        $("#personajes").on("change",(e)=>{
            let imagen = $(e.currentTarget).val()
            $("main").html(
                "<img src='"+imagen+"' alt='Personaje de Breaking Bad'>"
            )
        })
    })
})