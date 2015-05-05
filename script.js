$(document).ready(function() {
    "use strict"

    $.ajax({
        type: "GET", 
        url: "http://private-7906c-ipproject2.apiary-mock.com/posts",
        success: function(response){
            $.each(response, function() {
                $("#tweet").append("<div class='msg'>" + response[this.id - 1].user.replace(' ', '') + "<br>" + 
                    response[this.id - 1].text + "<br>" + "<button class='del'>Delete</button>" + "<br><br></div>");
            })
         }
    });


    $('#textbox').hide();
    $('#profile').hide();
    $('#logout').hide();
    $('.del').hide();



    $("#register").click(function(){
        var name = $("#regName").val();
        var pass = $("#regPass").val();
        if (name.length<=0 || pass.length<=0) {
            alert("You forgot to add a username or a password !");
            return false;
        }
    });


    $("#login").click(function(){
        var name = $("#name").val();
        var pass = $("#password").val();
        if (name.length<=0 || pass.length<=0) {
            alert("Did you forget your username or password ?");
            return false;
        }
        $('#signIn').hide();
        $('#registration').hide();
        $('#textbox').show();
        $('.del').show();
        $('#profile').html(name + "<br>" + "@" + name.replace(' ', '')).show();
        $('#logout').show();
    });

    $("#logout").click(function(){
        $('#textbox').hide();
        $('.del').hide();
        $('#profile').hide();
        $('#logout').hide();
        $('#signIn').show();
        $('#registration').show();
    });


    $("#post").click(function(){
        var Obj = { "text": $("#text").val() }
        $.ajax({
            type: "POST",
            contentType: 'application/json',
            url: "http://private-7906c-ipproject2.apiary-mock.com/posts",  
            data: JSON.stringify(Obj),
            success: function(response){
            }
        });
  

        var text = $("#text").val();
        var name = $("#name").val();
        if (text.length<=0) {
            alert("Write something !");
            return false;
        }

        $("#tweet").append("<div class='msg'>" + name.replace(' ', '') + "<br>" + text + "<br>" + 
            "<button class='del'>Delete</button>" + "<br><br></div>");



        $(".del").click(function(){
        $.ajax({
            type: "DELETE",
            url: "http://private-7906c-ipproject2.apiary-mock.com/posts/1",      
            success: function(response){
                    $(".msg").remove();
            }
        });

    });

    });


});
