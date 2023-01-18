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
            top:'80%'
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
            background : 'rgba(0,0,0,0.2)',
            boxShadow : '0 2px 5px #333'
        });
    }else{
        $('.header').css({
            background: 'rgba(0,0,0,0)',
            boxShadow : 'none'
    });
    }
});

$('.workwrap').children('.box').mouseenter(function(){
    $(this).find('.hide').css('display', 'block');
});
$('.workwrap .box').mouseleave(function(){
    $(this).find('.hide').css('display', 'none');
});



// console.log(document.querySelector('.st1').getTotalLength());
// console.log(document.querySelector('.st2').getTotalLength());
// console.log(document.querySelector('.st3').getTotalLength());
// console.log(document.querySelector('.st4').getTotalLength());

// $('.banner .bx').bxSlider({
//     mode: 'horizontal',
//     auto: true,
//     speed: 2000
// });