$(function(){
    $("#contactSubmission").removeAttr("method");

    $("input.contactForm-button").click(function(){
        $("#contactSubmission").attr("method", "post");
    
        var checkExist = setInterval(function(){      
            var attr = $("#contactSubmission").attr("method");
            if (typeof attr !== typeof undefined && attr !== false)
            {
                $("#contactSubmission").submit();
                clearInterval(checkExist);
            }
        }, 100);
    });
});