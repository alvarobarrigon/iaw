let current_page = $("#pagina").val()
let per_page = $("#resultados").val()
let total_pages
let buscador = $("#buscar").val()
function paginacion(current_page,per_page) {
    let jugadores = $.ajax({
        url: "https://www.balldontlie.io/api/v1/players",
        method: "get",
        data:{
            page:current_page,
            per_page:per_page,
            search:buscador
        }
    })
    jugadores.done(function (data) {
        let jugadores = data.data
        total_pages = data.meta.total_pages
        let current_page = data.meta.current_page
        $("#pagina").html("")
        for (let i = 1; i <= total_pages; i++) {
            $("#pagina").append(
                "<option value='" + i + "'>" + i + "</option>"
            )
        }
        $("#pagina").val(current_page)

        $("main").html(
            "<table>" +
            "<thead>" +
            "<tr>" +
            "<th id='nombre'>Nombre</th>" +
            "<th id='apellido'>Apellido</th>" +
            "<th id='equipo'>Equipo</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody></tbody>" +
            "</table>"
        )
        for (jugador of jugadores) {
            $("main table tbody").append(
                "<tr>" +
                "<td>" + jugador.first_name + "</td>" +
                "<td>" + jugador.last_name + "</td>" +
                "<td>" + jugador.team.full_name + "</td>" +
                "</tr>"
            )
        }
    })
}