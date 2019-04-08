/*$(document).ready(function(){
    // console.log("This works");
    // $('input').on("click", function(){
    //     alert("test");
    // });
    $(".btn.btn-primary").on("click", function(event){
        event.preventDefault();

        data = {
            name: $('#name').val(),
            email: $('#email').val(),
            username: $('#username').val(),
            password: $('#password').val(),
            password: $('#password2').val() 
        }
        console.log(data)
        
         $.ajax({
             method: "POST",
             url:"/users/register",
             data: data
         }).then(function(data) {
             location.reload();
         });
    });
});*/


