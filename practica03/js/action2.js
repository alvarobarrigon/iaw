$(function () {
    $("#bt1").on("click",(e)=>{
        e.preventDefault()
        let $texto=$("#tarea").val();
        console.log($texto)
        if($("#tarea").val().trim()!="") {
            $("ul").append(
                "<li>" +
                "<span>" +
                $texto +
                "</span>" +
                "<a href=''>quitar</a>" +
                "</li>");
            $("#tarea").val("");
        }
    })
    $("#lista").on("click","span",(e)=>{
        $(e.currentTarget).prepend()
        let $li=$(e.currentTarget).parent().remove();
        $("#lista").prepend($li)
    })
    $("#lista").on("click","a",(e)=>{
        e.preventDefault()
        $(e.currentTarget).parent().remove();
    })
})