$(function () {
    paginacion(1,25)
    $("#avanzar").on("click", (e) => {
            current_page = $("#pagina").val()
            per_page = $("#resultados").val()
            $("#pagina").val(current_page)
        if(current_page<total_pages){
            current_page++
            paginacion(current_page, per_page)
        }
    })
    $("#retroceder").on("click",(e)=>{
        current_page = $("#pagina").val()
        per_page = $("#resultados").val()
        current_page--
        $("#pagina").val(current_page)
        paginacion(current_page,per_page)
    })
    $("#inicio").on("click",(e)=>{
        let per_page = $("#resultados").val()
        $("#pagina").val(1)
        paginacion(1,per_page)
    })
    $("#fin").on("click",(e)=>{
        paginacion(total_pages,per_page)

    })
    $("#resultados").on("change",(e)=>{
        per_page = $("#resultados").val()
        $("#pagina").val(1)
        paginacion(1,per_page)
    })
    $("#pagina").on("change",(e)=>{
        current_page = $("#pagina").val()
        per_page = $("#resultados").val()
        paginacion(current_page,per_page)
    })
    $("#btBuscar").on("click",(e)=>{
        current_page = $("#pagina").val()
        per_page = $("#resultados").val()
        buscador=$("#buscar").val()
        paginacion(current_page,per_page,buscador)
    })
})