$(function () {
    var d = new Date();
    var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
    console.log(strDate);
    let jqxrh=$.ajax({
        url:"https://api.nasa.gov/planetary/apod",
        dataType:"json",
        method:"GET",
        data:{
            "api_key":"0MNJcvHtDEYNzEHKZOPehG7z71aKloBaV7iGiuve",
            date:strDate
        }
    })
    jqxrh.done(function (data) {
            $("main").html(
                "<p><img src='"+data.hdurl+"'></p>"
            )
        let fechaNASA =data.date
        console.log(fecha)
        $("#fecha").val(fechaNASA)
    })
    $("#fecha").on("change",(e)=> {
        let fecha = $("#fecha").val()
        console.log(fecha)
        let dia = $.ajax({
            url: "https://api.nasa.gov/planetary/apod",
            dataType: "json",
            method: "GET",
            data: {
                "api_key": "0MNJcvHtDEYNzEHKZOPehG7z71aKloBaV7iGiuve",
                date: fecha
            }
        })
        dia.done(function (data) {
            $("main").html(
                "<p><img src='" + data.hdurl + "'></p>"
            )
        })
    })
})