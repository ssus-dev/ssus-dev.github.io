$(document).ready(function(){
    // tab menu
    $('.slide_tab > li').click(function (e) { 
        e.preventDefault();
        $('.slide_tab > li').not($(this).addClass('active')).removeClass('active');
    });


})