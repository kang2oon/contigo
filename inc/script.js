$(document).ready(function(){
    
});

$(window).load(function(){
    var page = $('body').attr('data-page');
    console.log(page);
    $('#gnb li').each(function(){
        var pgtype = $(this).attr('data-page');
        console.log(pgtype);
        if(pgtype == page){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });

    $('.scroll').click(function(){
        $('html, body').animate({scrollTop:0},1000);
        //$('html, body').scrollTop(0);
    });
});

$(window).scroll(function(){
    var height = 0;
    height = $(window).scrollTop();
    if(height >= 103){
        $('header').addClass('blur');
        $('.scroll').removeClass('hide');
    }else{
        $('header').removeClass('blur');
        $('.scroll').addClass('hide');
    }
});