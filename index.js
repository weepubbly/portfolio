    let flag = 0;
    $('.header #monthly').click(function(){
        if(flag == 0){
            $('.header .hide').css('top', '0px');
            flag = 1;
        }else{
            $('.header .hide').css('top', '-210px');
            flag =0;
        }
    });
    $('.nav li').mouseenter(function(){
        $(this).find('.sub').css('height','350px');
        $(this).find('.circle').css('height', '13px');
    });
    $('.nav li').mouseleave(function(){
        $(this).find('.sub').css('height','0');
        $(this).find('.circle').css('height', '0');
    });

//----------------------------슬라이드------------------------------    
$('.banner .bx').bxSlider({
    mode: 'horizontal',
    auto: true,
    speed: 2000
});
$('.banner2 .bx').bxSlider({
    mode: 'horizontal',
    auto: true,
    speed: 2000
});

$('.event .bx2').bxSlider({
    mode: 'horizontal',
    auto: true,
    speed: 2000
});
//----------------------------슬라이드------------------------------

$(window).scroll(function(){
    let sc =parseInt($(this).scrollTop());
    let ht = $(window).height();
    $(window).resize(function(){ //윈도우 크기조정 이벤트 함수
        ht = $(window).height();
    });
    if(sc >= (ht*2)-300 && sc < (ht*3)+100){
        $('.content').children('img').eq(0).stop().animate({
            left:'30%'
        },800);
        $('.content').children('img').eq(1).stop().animate({
            right:'35%'
        },800);
    }else{
        $('.content').children('img').eq(0).stop().animate({
            left:'0%'
        },800);
        $('.content').children('img').eq(1).stop().animate({
            right:'0%'
        },800);
        }
});

//----------------------------모바일 헤더메뉴------------------------------
$('.header .bar_menu').click(function(){
    $('.gnb').css({
        left:0
    });
});
$('.gnb .close').click(function(){
    $('.gnb').css('left', '-100%')
});

// $('.gnb li').children('svg').click(function(){
//     $('.gnb li').css('height', '30%')
// });