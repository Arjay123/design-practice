// nav underline code reused from https://css-tricks.com/jquery-magicline-navigation/

$(function(){

    $("#modal-nav-group").append("<li id='nav-underline'></li>");

    $navline = $("#nav-underline");
    $navline
        .width($(".current-nav a").width())
        .css("left", $(".current-nav a").position().left)
        .data("prevLeft", $navline.position.left)
        .data("prevWidth", $navline.width());

    $(".modal-nav-link").click(function() {
        // var $navlink = $(this);
        // var leftPosition = $navlink.position().left;
        // var width = $(this).width();
        // $navline.stop().animate({
        //     left: leftPosition,
        //     width: width
        // });
        moveNav($(this));
        moveDiv($(this)[0].name);
    });

    function moveNav(element){
        var leftPosition = element.position().left;
        var width = element.width();
        $navline.stop().animate({
            left: leftPosition,
            width: width
        });
    }

    function moveDiv(name){

        if(name === "signup"){
            $("#login").animate({left:"-100%"}, function(){
                $("#signup").animate({left:"0"});
            });
        }
        else {
            $("#signup").animate({left:"100%"}, function(){
                $("#login").animate({left:"0"});
            })
        }

    }
});