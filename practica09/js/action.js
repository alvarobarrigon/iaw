$(function (e) {
    let jqxhr = $.ajax({
        url: "https://randomuser.me/api/",
        dataType: "json",
        method: "GET",
        data: {
            results: 50
        }
    })
    jqxhr.done(function (data) {
        let persona = data.results[0]
        $("main").html(
            "<article>" +
            "<p><img src='" + persona.picture.large + "' alt='persona'></p>" +
            "<div><p>" + persona.name.first + " " + persona.name.last + "</p>" +
            "<p>" + persona.email + "</p>" +
            "<p>" + persona.location.street.name + ", " + persona.location.street.number + "</p>" +
            "<p>" + persona.location.city + " (" + persona.location.country + ")</p>" +
            "</div></article>"
        )
        //setInterval(data,1000)
    })
    $("main").on("click", "img", (e) => {
        console.log("imagen");
        let jqxhr = $.ajax({
            url: "https://randomuser.me/api/",
            dataType: "json",
            method: "GET",
        })
        jqxhr.done(function (data) {
            let persona = data.results[0]
            $(e.currentTarget).parent().html(
                "<p><img src='" + persona.picture.large + "' alt='persona'></p>"
            )
        })
        $("main").on("click", "div", (e) => {
            console.log("texto");
            let jqxhr = $.ajax({
                url: "https://randomuser.me/api/",
                dataType: "json",
                method: "GET",
            })
            jqxhr.done(function (data) {
                let persona = data.results[0]
                $(e.currentTarget).html(
                    "<p>" + persona.name.first + " " + persona.name.last + "</p>" +
                    "<p>" + persona.email + "</p>" +
                    "<p>" + persona.location.street.name + ", " + persona.location.street.number + "</p>" +
                    "<p>" + persona.location.city + " (" + persona.location.country + ")</p>"
                )
            })
        })
    })
})