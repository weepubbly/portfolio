$('nav li').mouseover(function(){
    $('nav .wrap').css('height', '290px');
});
$('nav li').mouseleave(function(){
    $('nav .wrap').css('height', '75px');
});

$('.banner .bx').bxSlider({
    mode: 'horizontal',
    auto: true,
    speed: 3000
});