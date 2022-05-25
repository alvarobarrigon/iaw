$(function () {
    $("#bt1").on("click",(e)=>{
        e.preventDefault();
        let contenido=$("#tarea").val();
        if($("#tarea").val().trim()!=""){
            $("#lista").append(
                "<li>" +
                "<span>"+contenido+"</span>" +
                "<a href=''>quitar</a>" +
                "</li>");
            $("#tarea").val("");
        }
    })
    $("#lista").on("click","a",(e)=>{
        e.preventDefault();
        $(e.currentTarget).parent().remove();
    })

    $("#lista").on("click","span",(e)=> {
        let $li = $(e.currentTarget).parent().remove();
        $("#lista").prepend($li)
    })
})