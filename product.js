$(document).ready(function(){
    $("div.home>div>a").click(function(){
        event.preventDefault()
        //xu ly tab
        $("div.home>div>a").removeClass("active")
        $(this).addClass("active")

        //xu ly content
        var home=$(this).attr("href")
        $(".products>div>p").hide()
        $(".products>div>div").hide()
        $(home).show()
})
 })