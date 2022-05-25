$(function () {
    let $jqxhr = $.ajax({
        url: "https://randomuser.me/api/",
        method: "GET",
        dataType: "json",
    })
    $jqxhr.done(function (data) {
        let $persona = data.results[0]
        $("main").html(
            "<p><img src='"+ $persona.picture.large +"' alt='persona'></p>"+
            "<p>" + $persona.name.first +" "+ $persona.name.last + "</p>"+
            "<p>Email: " + $persona.email + "</p>"+
            "<p>" + $persona.location.street.name +", "+$persona.location.street.number+ "</p>"+
            "<p>" +$persona.location.city+ " ("+$persona.location.country+")"+"</p>"
        )
    })
})