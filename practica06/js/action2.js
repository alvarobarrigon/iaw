$(function () {
    $("#ocultar").on("click",(e)=>{
        $("article").fadeOut()
        $("[type='checkbox']").prop("checked",false)
    })
    $("#mostrar").on("click",(e)=>{
        $("article").fadeIn()
        $("[type='checkbox']").prop("checked",true)
    })
    $("article").on("click",(e)=>{
        $(e.currentTarget).fadeOut()
        let $texto=$(e.currentTarget).text()
        console.log($texto)
        if($("#"+$texto).prop("checked")){
            $("#"+$texto).prop("checked",false)
        }
    })
})
