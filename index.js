$('.center3, .center2, .center1, .title').hide();
$('.center3').delay(500).show("pulsate",500, function(){
    $('.center2').show("pulsate",500);
    $('.center1').delay(500).show("pulsate",500);
    $('.title').delay(1500).show("fade",1000);
});

$('.section').on('mousewheel',function(e, d){
    if(d > 0){
        //휠을 올릴 때
        let prev = $(this).prev().offset().top;
        $('html, body').stop().animate({
            'scrollTop':prev
        },1000, 'swing');
    }else if( d < 0){
        //휠을 내릴 때
        let next = $(this).next().offset().top;
        $('html, body').stop().animate({
            'scrollTop':next
        },1000, 'swing');
    }
});



$(window).scroll(function(){
    let sc =parseInt($(this).scrollTop());
    let ht = $(window).height();
    $(window).resize(function(){ //윈도우 크기조정 이벤트 함수
        ht = $(window).height();
    });
    if(sc >= (ht*1)-400 && sc < (ht*2)+100){
        $('#about .wrap').stop().animate({
            top:'60%'
        },800);
    }else{
        $('#about .wrap').stop().animate({
            top:'85%'
        },800);
        }
    if(sc >= (ht*2)-400 && sc < (ht*3)+100){
        $('#skills .st1').addClass('ani02');
        $('#skills .st2').addClass('ani03');
        $('#skills .st3').addClass('ani04');
        $('#skills .st4').addClass('ani05');
    }else{
        $('#skills .st1').removeClass('ani02');
        $('#skills .st2').removeClass('ani03');
        $('#skills .st3').removeClass('ani04');
        $('#skills .st4').removeClass('ani05');
        }
    
    if(sc > (ht*1)-200){
        $('.header').css({
            background : 'rgba(13,92,76,0.3)',
            boxShadow : '0 2px 5px #333'
        });
    }else{
        $('.header').css({
            background: 'rgba(0,0,0,0)',
            boxShadow : 'none'
        });
    }

    if(sc >= (ht*5)-400 && sc < (ht*6)+100){
        $('#design .wrap').stop().animate({
            top:'60%'
        },800);
    }else{
        $('#design .wrap').stop().animate({
            top:'85%'
        },800);
        }
});


$('#work').bxSlider({
    mode: 'horizontal',
    auto: false,
    speed: 1000
});

$('.popup').colorbox({
    rel: 'popup' ,
    iframe:true,
    innerWidth:717,
    innerHeight:600
});