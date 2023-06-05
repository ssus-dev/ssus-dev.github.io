$(function() {
    var xOffset = 10;
    var yOffset = 30;
    $(document).on("mouseover",".img_wrap",function(e){
        var imgSrc = $(this).children("img.preview_thumbnail");
        $("body").append("<div class='previewHover'><img src='"+ $(imgSrc).attr("src") +"' width='500px' /></div>");
        $(".previewHover")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px")
            .fadeIn("fast");
    });
    $(document).on("mousemove",".img_wrap",function(e){
        $(".previewHover")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px");
    });
    $(document).on("mouseout",".img_wrap",function(){
        $(".previewHover").remove();
    });
});