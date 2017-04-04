/**
 * Created by Manoj on 2/8/2017.
 */




$(document).ready(function() {
    $("#btn").click(function () {
        $("#panel").slideToggle("slow");
    })
    $(".btn1").click(function () {
        $("#panel").slideUp("slow");
    })
    $(".btn2").click(function () {
        if($(".btn2").html()=="Submit") {
            $("#panel").slideUp("slow");
            var x = $("#test").val();
            $("#test").val("");
            $(".hidediv").append($("<div></div>").attr("class", "divv").append($("<h4/>").html(x).click(y)))
            $(".divv").append($("<div class='checkboxdiv'><input type='checkbox'>"))
        }
        else{
            $("#area").parent().html($("#test").val())
            $("#area").remove();
            $("#test").val("");
        }
    })
        var chec=$("<div/>").addClass("check");
        var a=  $(chec).append($("<img/>").attr("src","../image/edit.jpeg").addClass("img").click(edit));
        var b= $(chec).append($("<img/>").attr("src","../image/delete.png").addClass("imgs").click(del));

    function y() {
        $(chec).insertAfter($(this).closest(".divv"))
    }
    function del() {
       $(".check").remove()
       $(".divv").remove()
    }
        // $(".img").click(function () {
        //     $("#panel").slideDown("slow")
        // })
})
function  edit() {
    $("#panel").slideToggle("slow");
    var testt = ($(this).parent().prev().find($("h4")).html());
    $("#test").val(testt)
    $(".btn2").html("edit")
    $(this).parent().prev().find($("h4")).append($("<span id='area'></span>"))
}



// $(".btn2").html("edit")




