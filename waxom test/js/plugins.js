$(document).ready(function () {
    $(".projects .gallery a").click(function(){
        $(this).css({backgroundColor:"#5d4b44",color:"#fff"}).nextAll().css({backgroundColor:"#fff",color:"#000"});
        $(this).prevAll().css({backgroundColor:"#fff",color:"#000"});
        $(".projects .card-body").css({"backgroundColor":"#5d4b44",color:"#fff"});
        $(".projects .row .col .span").css({"backgroundColor":"#5d4b44"})
    });
    $(".projects .gallery a:eq(0)").click(function(){
        $(".all").show();
    });
    $(".projects .gallery a:eq(1)").click(function(){
        $(".design").show();
        $(".mobile").fadeOut(1000);
        $(".illustration").fadeOut(1000);
        $(".photography").fadeOut(1000);
    });
    $(".projects .gallery a:eq(2)").click(function(){
        $(".mobile").show();
        $(".design").fadeOut(1000);
        $(".illustration").fadeOut(1000);
        $(".photography").fadeOut(1000);
    });
    $(".projects .gallery a:eq(3)").click(function(){
        $(".illustration").show();
        $(".mobile").fadeOut(1000);
        $(".design").fadeOut(1000);
        $(".photography").fadeOut(1000);
    });
    $(".projects .gallery a:eq(4)").click(function(){
        $(".photography").show();
        $(".mobile").fadeOut(1000);
        $(".design").fadeOut(1000);
        $(".illustration").fadeOut(1000);
    });
    $(".posts .card").hover(function(){
        $(this).css({backgroundColor:"#372f2d",color:"#fff"});
        $(".posts .card a").css({color:"#fff"});
    },function(){
        $(this).css({backgroundColor:"#fff",color:"#372f2d"})
    });
    $(".fa-chevron-circle-right").click(function(){
        $("posts .card:eq(0)").addClass("activeOne")
    });
    $(".fa-search").click(function(){
        $(".navbar input[type='search']").toggle(1000)
    })
})
//$(".fa-chevron-circle-right").on("click",function(){
//$(".posts .second-card").css({backgroundColor:"#372f2d",color:"#fff"});
        //$(".posts .second-card a").css("color","#fff")

