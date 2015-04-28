$(document).ready(function() {
    "use strict"


    $('#textbox').hide();
    $('#profile').hide();
    $('#logout').hide();

    $.ajax({
        type: "GET",    
        url: "http://private-7906c-ipproject2.apiary-mock.com/posts/1", 
        success: function(msg){
        }
    });


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
        $('#profile').html(name + "<br>" + "@" + name.replace(' ', '')).show();
        $('#logout').show();
    });

    $("#logout").click(function(){
    	$('#textbox').hide();
    	$('#profile').hide();
    	$('#logout').hide();
    	$('#signIn').show();
        $('#registration').show();
    });


    $("#post").click(function(){


    	$.ajax({
        	type: "POST",
        	url: "http://private-7906c-ipproject2.apiary-mock.com/posts",  
        	title: "Post3", 
        	text: "Excuse Me",    
        	success: function(msg){ 
        	}
    	});

        var text = $("#text").val();
        var name = $("#name").val();
        if (text.length<=0) {
            alert("Write something !");
            return false;
        }

        $("#tweet").html(name.replace(' ', '') + "<br>" + text);

    });


});
