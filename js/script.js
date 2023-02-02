function funcionResize() {
    $('#widthval').html($(document).width());        
    if ($(window).width() < 768) {
        $('.container-fluid').css('padding-left', '5%');
        $('.container-fluid').css('padding-right', '8%');
        //console.log("768");
    }
    else if ($(window).width() < 1600 ) {
        $('.container-fluid').css('padding-left', '5%');
        $('.container-fluid').css('padding-right', '0%');
        //console.log("1600");
    }
    else
    {
        $('.container-fluid').css('padding-left', '15%');
        $('.container-fluid').css('padding-right', '10%');
        //console.log("else");
    }
}

$(window).on("resize", funcionResize);