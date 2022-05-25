$(function (e) {
    let jqxhr = $.ajax({
        url:"https://www.breakingbadapi.com/api/episodes",
        method:"get",
        data:{
            series:"Breaking Bad"
        }
    })
    jqxhr.done(function (data) {
        $("#capitulos").html(
            "<option selected disabled>Elige un capítulo</option>"
        )
        for(capitulo of data){
            $("#capitulos").append(
                "<option value='"+capitulo.episode_id+"'>Temporada "+capitulo.season+"-"+capitulo.episode+", " +
                capitulo.title+"</option>"
            )
        }
        $("#capitulos").on("change",(e)=>{
            let id = $(e.currentTarget).val()
            $("main").html("")
            let personajes = $.ajax({
                url:"https://www.breakingbadapi.com/api/episodes/"+id,
                method:"get",
            })
            personajes.done(function (data) {
                for(personaje of data[0].characters){
                    //$("main").append("<p>"+personaje+"</p>")
                    let foto = $.ajax({
                        url:"https://www.breakingbadapi.com/api/characters?name="+personaje,
                        method:"get",
                    })
                    foto.done(function (data) {
                        for(foto of data)
                        $("main").append(
                        "<figure>"+
                        "<img src='"+foto.img+"' alt='"+foto.name+"'>"+
                            "<figcaption>"+foto.name+"</figcaption>"+
                        "</figure>"
                        )
                    })
                }
            })
        })
    })
})