// 01. All Element selector *
$(document).ready(function(){
    $("*").css("background","green");
});


// 02. #id selector
$(document).ready(function(){
    $("#intro").css("background","yellow");
});

// 03. .class selector
$(document).ready(function(){
    $(".intro1").css("background","blue");  
});

// 04. :first selector and :last selector
$(document).ready(function(){
    $("p:first").css("font-size","30px");
    $("p:last").css("font-size","30px");
});

// 05 :even & :odd selector
$(document).ready(function(){
    $("p:even").css("background","orange");
    $("p:odd").css("background","lime");
})


