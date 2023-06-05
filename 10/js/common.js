$(document).ready(function(){

    $('.first_depth > div').click(function (e) {
        e.preventDefault();
        $('ul.sub_menu').not($(this).next().slideDown(400)).slideUp();
        $('.first_depth > div').not($(this).addClass("active")).removeClass("active");
    });


    // all >> checkbox : all check 
    $("#check").click(function(){
        console.log("Test")
        if($("#check").prop("checked")){
            $("input[name=checked]").prop("checked",true);
        }else{
            $("input[name=checked]").prop("checked",false);
        }
    });

    // order >> index.php : hide function
    $('table.company_order tr').click(function (e) {
        e.preventDefault();
        $('.clk_left_detail').show();
    });

    $(function () {

        // all >> scroll plugin
        $('.scrollbar-macosx').scrollbar();
    });


});

