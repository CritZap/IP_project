$(document).ready(function() {
    "use strict"


    $("#post").click(function(){
        var text = $("#text").val();
        if (text.length<=0) {
            alert("Write something !");
            return false;
        }
        $("#tweet").html(text + "\n");
    });


});
