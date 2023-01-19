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

$('#num1').click(function(){
    $('#cp1').css('display', 'block');
    $('#cp2').css('display', 'none');
    $('#cp3').css('display', 'none');
    $(this).css('color', 'orange');
    $('#num2').css('color', 'black');
    $('#num3').css('color', 'black');
});
$('#num2').click(function(){
    $('#cp1').css('display', 'none');
    $('#cp2').css('display', 'block');
    $('#cp3').css('display', 'none');
    $(this).css('color', 'orange');
    $('#num1').css('color', 'black');
    $('#num3').css('color', 'black');
});
$('#num3').click(function(){
    $('#cp1').css('display', 'none');
    $('#cp2').css('display', 'none');
    $('#cp3').css('display', 'block');
    $(this).css('color', 'orange');
    $('#num2').css('color', 'black');
    $('#num1').css('color', 'black');
});

$('#fb_btn').click(function(){
    $(this).css({
        backgroundColor: 'white',
        color: 'darkblue'
    });
    $('#blog_btn').css({
        backgroundColor: '#eee',
        color: 'black'
    });
    $('#facebook').css('display', 'block');
    $('#blog').css('display', 'none');
});
$('#blog_btn').click(function(){
    $(this).css({
        backgroundColor: 'white',
        color: 'darkblue'
    });
    $('#fb_btn').css({
        backgroundColor: '#eee',
        color: 'black'
    });
    $('#facebook').css('display', 'none');
    $('#blog').css('display', 'block');
});