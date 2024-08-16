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
});

$(window).scroll(function(){
    var height = 0;
    height = $(window).scrollTop();
    if(height >= 103){
        $('header').addClass('blur');
    }else{
        $('header').removeClass('blur');
    }
});