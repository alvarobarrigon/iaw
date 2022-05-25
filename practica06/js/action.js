$(function () {
    $("#ocultar").on("click",(e)=>{
        $("article").fadeOut()
        $("[type='checkbox']").prop("checked",false)
    })
    $("#mostrar").on("click",(e)=>{
        $("article").fadeIn()
        $("[type='checkbox']").prop("checked",true)
    })
    $("[type='checkbox']").on("change",(e)=>{
        let $id=$(e.currentTarget).attr("id");
        console.log($id);
        $(`[data-pais="${$id}"]`).css({
            "display":"inline-block"
        })
    })
    $("article").on("click",(e)=>{
        let $data=$(e.currentTarget).data("pais");
        console.log($data);
        if($("#"+$data).prop('checked')){
            $("#"+$data).prop('checked',false)
            $(e.currentTarget).removeClass("mostrar").fadeOut()
        }else{
            $("#"+$data).prop('checked',true)
            $(e.currentTarget).addClass("mostrar")

        }
    })
})