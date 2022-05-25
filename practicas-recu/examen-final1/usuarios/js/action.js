$(function (e) {
    let i = 1
    function peticion(i) {
        let jqxhr = $.ajax({
            url: "http://jsonplaceholder.typicode.com/users/" +i,
            method: "get",
            dataType: "json"
        })
        jqxhr.done(function (data) {
            $("article").html(
                "<h2>" + data.name + "</h2>" +
                "<p><a href=''>" + data.email + "</a></p>" +
                "<button id='menos'><</button><button id='mas'>></button><br><br>" +
                "<button id='ver'>Ver post del usuario/a</button>"
            )
        })
    }
    peticion(i)
    $("article")
        .on("click","#mas",(e)=>{
            i++
            if(i==11){
                i=1
            }
            peticion(i)
        })
        .on("click","#menos",(e)=>{
            i--
            if(i==0){
                i=10
            }
            peticion(i)
         })
        .on("click","#ver",(e)=>{
            let jqxhr = $.ajax({
                url: "http://jsonplaceholder.typicode.com/users/" +i+"/posts",
                method: "get",
                dataType: "json"
            })
            jqxhr.done(function (data) {
                $("main").append("<h1>Mensajes</h1>")
                for(post of data){
                    $("main").append(
                        "<div>"+
                        "<h2>" + post.title + "</h2>" +
                        "<p>" + post.body + "</p>" +
                        "<a href='http://jsonplaceholder.typicode.com/users/" +i+"/comments'>Ver comentarios (en JSON)</a>"+
                        "</div>"
                    )
                }
        })
    })
})