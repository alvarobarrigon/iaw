$(function (e) {
    let jqxhr=$.ajax({
        url:"https://jorgesanchez.net/servicios/geografia/comunidades.php",
        method:"get",
        dataType:"json"
    })
    jqxhr.done(function (data) {
        let comunidades = data.comunidades
        for(comunidad of comunidades){
            $("main").append(
                "<h2 data-comunidad='"+comunidad.id_comunidad+"'>"+comunidad.nombre+"</h2>"
            )
        }
    })
    $("main")
        .on("click","h2",(e)=>{
            let comunidad = $(e.currentTarget).data('comunidad')
            let jqxhr=$.ajax({
                url:"https://jorgesanchez.net/servicios/geografia/provincias.php?comunidad="+comunidad,
                method:"get",
                dataType:"json"
            })
            jqxhr.done(function (data) {
                let provincias = data.provincias
                if($(e.currentTarget).next().is("h2")){
                    $(e.currentTarget).after("<div id='"+comunidad+"'></div>")
                    for(provincia of provincias){
                        $("#"+comunidad).append(
                            "<h3 data-provincia='"+provincia.n_provincia+"'>"+provincia.nombre+"</h3>"+
                            "<div data-provincia='"+provincia.n_provincia+"'></div>"
                        )
                    }
                }
                $(e.currentTarget).toggleClass("click").next().slideToggle()
            })
        })
        .on("click","h3",(e)=>{
            let provincia = $(e.currentTarget).data('provincia')
            let jqxhr=$.ajax({
                url:"https://jorgesanchez.net/servicios/geografia/localidades.php?provincia="+provincia,
                method:"get",
                dataType:"json"
            })
            jqxhr.done(function (data) {
                let localidades = data.localidades
                let totalHabitantes = 0
                let siguiente = $(e.currentTarget).next()
                $(e.currentTarget).toggleClass("click").next().slideToggle()
                if($(e.currentTarget).next().text("")){
                    //$(e.currentTarget).after("<div id='" + provincia + "' class='contenido'></div>").next().slideToggle()
                    //he mirado tu codigo porque no se me ocurria lo del 'text("")'
                    //aun asi lo he intentado hacer a mi manera y no me funciona del bien
                    for (localidad of localidades) {
                        $(siguiente).append(
                            "<h4 data-localidad='" + localidad.id_localidad + "'>" + localidad.nombre +
                            "<span>, " + localidad.poblacion + " habitantes</span></h4>"
                        )
                        totalHabitantes+=localidad.poblacion
                    }
                    $(siguiente).append("<h4>TOTAL: <span>"+totalHabitantes+" habitantes</span></h4>")
                }
            })

        })
})