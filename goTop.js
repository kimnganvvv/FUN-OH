$(document).ready(function() {
    $("#goTop").hide()

    $(window).scroll(function(){

        if($(this).scrollTop() >= 220)
            $("header").css({
                "position":"fixed",
                "left": 0,
                "right": 0,
                "top":0,
                "z-index": 1000
            })
        else
            $("header").css({
                "position":"relative",
                "left": 0,
                "right": 0,
                "top":0,
                "z-index": 1000
            })


        if($(this).scrollTop() >= 150)
            $("#goTop").show("flow")
        else
            $("#goTop").hide("flow")

    })

    $("#goTop").click(function(){
        $("html, body").animate({
                scrollTop:0
            },800);
    })
})