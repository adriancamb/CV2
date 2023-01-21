function funcionResize() {
    $('#widthval').html($(document).width());        
        if ($(window).width() < 1700) {
            $('.container-fluid').css('padding-left', '5%');
            $('.container-fluid').css('padding-right', '0%');
        }
        else{
            $('.container-fluid').css('padding-left', '15%');
            $('.container-fluid').css('padding-right', '10%');
        }
    }

$(window).on("resize", funcionResize);