$(document).ready(function () {

    $('div.sideMenu').hide();

    $('div.mainNav > button').click(function (e) { 
        e.preventDefault();
        $('div.sideMenu').show();
    });

    $('div.closeArea > img.close').click(function (e) { 
        e.preventDefault();
        $('div.sideMenu').hide();
    });


    $('div.subMenu').hide();

    $('ul.menuContent > li a.bigLink').click(function (e) { 
        e.preventDefault();
        $('ul.menuContent > li a.bigLink').removeClass('active');
        $(this).addClass('active');
        $('div.subMenu').not($(this).next('div.subMenu').slideToggle(700)).slideUp();
    });

    $(function() {
        $(window).on("scroll", function() {
            console.log("test1");
            if($(window).scrollTop() > 100) {
                console.log("test2");
                $(".mainNav").css({"background-color":"#ed7e37"});
            } else {
                console.log("test3");
                $(".mainNav").css({"background-color":"transparent"});
            }
        });
    });

});