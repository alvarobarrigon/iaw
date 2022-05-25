$(function () {
    $("article").html(
        "<h1>ESPERANDO DATOS</h1>"
    )
    let jqxhr=$.ajax({
        url:"https://randomuser.me/api/",
        method:"GET",
        dataType:"json",
        data:{
            results:10
        }
    })
    jqxhr.done(function (data) {
        for (let persona of data.results) {
            $("main").append(
                "<article>" +
                "<div><p><img src='" + persona.picture.large + "' alt='persona'></p>" +
                "<p>" + persona.name.first + " " + persona.name.last + "</p>" +
                "<p>" + persona.email + "</p>" +
                "<p>" + persona.location.street.name + ", " + persona.location.street.number + "</p>" +
                "<p>" + persona.location.city + " (" + persona.location.country + ")" + "</p></div>" +
                "<button class='bt'>Cambiar</button>" +
                "</article>"
            )

        }
    })
    $("main").on("click",".bt", (e) => {
        console.log("hola")
        let jqxhr=$.ajax({
            url:"https://randomuser.me/api/",
            method:"GET",
            dataType:"json",
            data:{
                results:10
            }
        })
        jqxhr.done(function (data) {
            let persona = data.results[0]
                $(e.currentTarget).parent().html(
                    "<div><p><img src='" + persona.picture.large + "' alt='persona'></p>" +
                    "<p>" + persona.name.first + " " + persona.name.last + "</p>" +
                    "<p>" + persona.email + "</p>" +
                    "<p>" + persona.location.street.name + ", " + persona.location.street.number + "</p>" +
                    "<p>" + persona.location.city + " (" + persona.location.country + ")" + "</p></div>" +
                    "<button class='bt'>Cambiar</button>"
                )
        })
    })
})