$(document).ready(function() {
    "use strict"

    $.ajax({
        type: "GET", 
        url: "http://private-7906c-ipproject2.apiary-mock.com/posts",
        success: function(response){
            $.each(response, function() {
                $("#tweet").append("<div id='"+response[this.id - 1].id+"' class='msg'>" + response[this.id - 1].user.replace(' ', '') + "<br>" + 
                    response[this.id - 1].text + "<br>" + "<button id='btn-"+response[this.id - 1].id+"' class='del'>Delete</button>" + "<br><br></div>");
                
                var data_id = response[this.id - 1].id;

                $("#btn-"+data_id).click(function(){
                $.ajax({
                    type: "DELETE",
                    url: "http://private-7906c-ipproject2.apiary-mock.com/posts/" + data_id,  
                    success: function(response){
                        $("#"+data_id).remove();
                    }
                });

                });

                $('.del').hide();
            })
         }
    });


    $('#textbox').hide();
    $('#profile').hide();
    $('#logout').hide();



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
        var text = $("#text").val();
        var name = $("#name").val();
        if (text.length<=0) {
            alert("Write something !");
            return false;
        }

        var Obj = { "text": $("#text").val() }
        $.ajax({
            type: "POST",
            contentType: 'application/json',
            url: "http://private-7906c-ipproject2.apiary-mock.com/posts",  
            data: JSON.stringify(Obj),
            success: function(response){
                $("#tweet").append("<div id='"+response.id+"' class='msg'>" + response.user.replace(' ', '') + "<br>" + 
                    response.text + "<br>" + "<button id='btn-"+response.id+"' class='del'>Delete</button>" + "<br><br></div>");

                // Post without the use of json what you have written in the textbox:
                // $("#tweet").append("<div id='"+response.id+"' class='msg'>" + name.replace(' ', '') + "<br>" + text + "<br>" + 
                //     "<button id='btn-"+response.id+"' class='del'>Delete</button>" + "<br><br></div>");

                var data_id = response.id;

                $("#btn-"+data_id).click(function(){
                $.ajax({
                    type: "DELETE",
                    url: "http://private-7906c-ipproject2.apiary-mock.com/posts/" + data_id,
                    success: function(response){
                        $("#"+data_id).remove();
                    }
                });

            });

            }
        });

    });


});
