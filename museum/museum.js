
$('#topbutton').click(function(){
    $('body, html').animate({
        scrollTop:0
    },500);
});

//----------------------------------슬라이드---------------

$('.content .slide').bxSlider({
    mode: 'horizontal',
    auto: true,
    speed: 3000
});
$('.content2 .slide2').bxSlider({
    mode: 'horizontal',
    auto: true,
    speed: 3000
});
//------------------------------------하단 미니 슬라이드
$('.banner .minislide').bxSlider({
    mode: 'horizontal',
    auto: true,
    speed: 3000
});


//----------------------------------슬라이드---------------

/*----------------네비게이션 호버이벤트------------------*/
$('.nav #gnbmenu').mouseenter(function(){
    $(this).find('#submenu1').fadeIn(100);
});
$('.nav #gnbmenu').mouseleave(function(){
    $(this).find('#submenu1').delay(500).fadeOut(300);
});
$('.nav #gnbmenu').mouseenter(function(){
    $(this).find('#submenu2').fadeIn(100);
});
$('.nav #gnbmenu').mouseleave(function(){
    $(this).find('#submenu2').delay(500).fadeOut(300);
});
$('.nav #gnbmenu').mouseenter(function(){
    $(this).find('#submenu3').fadeIn(100);
});
$('.nav #gnbmenu').mouseleave(function(){
    $(this).find('#submenu3').delay(500).fadeOut(300);
});
$('.nav #gnbmenu').mouseenter(function(){
    $(this).find('#submenu4').fadeIn(100);
});
$('.nav #gnbmenu').mouseleave(function(){
    $(this).find('#submenu4').delay(500).fadeOut(300);
});
$('.nav #gnbmenu').mouseenter(function(){
    $(this).find('#submenu5').fadeIn(100);
});
$('.nav #gnbmenu').mouseleave(function(){
    $(this).find('#submenu5').delay(500).fadeOut(300);
});
$('.nav #gnbmenu').mouseenter(function(){
    $(this).find('#submenu6').fadeIn(100);
});
$('.nav #gnbmenu').mouseleave(function(){
    $(this).find('#submenu6').delay(500).fadeOut(300);
});

$('.nav .submenu li').mouseenter(function(){
    $(this).find('a').css('color', 'orange');
});
$('.nav .submenu li').mouseleave(function(){
    $(this).find('a').css('color', 'white');
});

/*------------------게시판 버튼 클릭이벤트--------------------*/
$('#btn1').css('borderBottom','2px solid black');
$('#btn2,#btn3,#btn4').focusin(function(){
    $(this).css('borderBottom','2px solid black');
    $('#btn1').css('borderBottom','0');
});
$('#btn1,#btn2,#btn3,#btn4').focusout(function(){
    $(this).css('borderBottom','0');
});

$('#btn1').click(function(){
    $('#sub1').css('display', 'block');
    $('#sub2,#sub3,#sub4').css('display', 'none');
});
$('#btn1').focus(function(){
    $(this).css('border-bottom','2px solid black');
});
$('#btn2').click(function(){
    $('#sub1,#sub3,#sub4').css('display', 'none');
    $('#sub2').css('display', 'block');
});
$('#btn3').click(function(){
    $('#sub1,#sub2,#sub4').css('display', 'none');
    $('#sub3').css('display', 'block');
});
$('#btn4').click(function(){
    $('#sub1,#sub2,#sub3').css('display', 'none');
    $('#sub4').css('display', 'block');
});

/*------------------하단 링크박스 클릭이벤트--------------------*/
let flag = 0;
$('.footer .linktitle1').click(function(){
    if(flag == 0){
        setTimeout(function(){
            $('.linkbox1').css({
                overflow :'visible'
            });
        },100);
        
        $('.linktitle1').css({
            background: 'url(images/ico_down_white_img.png) no-repeat',
            backgroundPosition: '200px 20px',
            backgroundColor: 'black',
            color: 'white'
        });
        $('.linkbox1 dl').css({
            height: '190px',
            top : '-190px'
        });
        flag = 1;
    }else{
        setTimeout(function(){
            $('.linkbox1').css({
                overflow :'hidden',
            });
        },300);
        
        $('.linktitle1').css({
            background: 'url(images/ico_lg_black_open.png) no-repeat',
            backgroundPosition: '200px 20px',
            backgroundColor: 'white',
            color: 'black'
        });
        $('.linkbox1 dl').css({
            height: '0',
            top : '63px'
        });
        flag = 0;
    }
});
    //     setTimeout(function(){
    //         $('.linkbox1').css({
    //             height: '60px',
    //             top : '60px'
    //         });
    //         $('.footer .link:nth-child(2) li:nth-child(1)').css({
    //             overflow :'hidden',
    //             backgroundColor: 'white',
    //             color: 'black'
    //         });

    //     },400);
    //     flag = 0;
    // }


$('.footer .linktitle2').click(function(){
    if(flag == 0){
        setTimeout(function(){
            $('.linkbox2').css({
                overflow :'visible'
            });
        },200);
        
        $('.linktitle2').css({
            background: 'url(images/ico_down_white_img.png) no-repeat',
            backgroundPosition: '200px 20px',
            backgroundColor: 'black',
            color: 'white'
        });
        $('.linkbox2 dl').css({
            height: '390px',
            top : '-390px'
        });
        flag = 1;
    }else{
        setTimeout(function(){
            $('.linkbox2').css({
                overflow :'hidden',
            });
        },100);
        
        $('.linktitle2').css({
            background: 'url(images/ico_lg_black_open.png) no-repeat',
            backgroundPosition: '200px 20px',
            backgroundColor: 'white',
            color: 'black'
        });
        $('.linkbox2 dl').css({
            height: '0',
            top : '63px'
        });
        flag = 0;
    }
});

$('.footer .linktitle3').click(function(){
    if(flag == 0){
        setTimeout(function(){
            $('.linkbox3').css({
                overflow :'visible'
            });
        },200);
        
        $('.linktitle3').css({
            background: 'url(images/ico_down_white_img.png) no-repeat',
            backgroundPosition: '200px 20px',
            backgroundColor: 'black',
            color: 'white'
        });
        $('.linkbox3 dl').css({
            height: '440px',
            top : '-440px'
        });
        flag = 1;
    }else{
        setTimeout(function(){
            $('.linkbox3').css({
                overflow :'hidden',
            });
        },300);
        
        $('.linktitle3').css({
            background: 'url(images/ico_lg_black_open.png) no-repeat',
            backgroundPosition: '200px 20px',
            backgroundColor: 'white',
            color: 'black'
        });
        $('.linkbox3 dl').css({
            height: '0',
            top : '63px'
        });
        flag = 0;
    }
});

/*------------------상단 링크박스 클릭이벤트--------------------*/
$('.header #quick').click(function(){
    if(flag == 0){
        $('.header .hdlink1').css({
            overflow :'visible',
            height: '380px'
        });
        $('.hdlink1 dl').css('height', '380px');
        $('.header li:nth-child(4)').css({
            background: 'url(images/ico_sm_white.png) no-repeat',
            backgroundPosition: '138px 17px',
            backgroundColor: 'black'
        });
        $('.padding1 a').css('color', 'white');
        flag = 1;
    }else{
        $('.header .hdlink1').css({
            overflow :'hidden',
            height: '0'
        });
        $('.hdlink1 dl').css('height', '0');
        $('.header li:nth-child(4)').css({
            background: 'url(images/ico_sm_black_open.png) no-repeat',
            backgroundPosition: '138px 17px',
            backgroundColor: 'white'
        });
        $('.padding1 a').css('color', 'black');
        flag = 0;
    }
});

$('.header #language').click(function(){
    if(flag == 0){
        $('.header .hdlink2').css({
            overflow :'visible',
            height: '230px'
        });
        $('.hdlink2 dl').css('height', '230px');
        $('.header li:nth-child(5)').css({
            background: 'url(images/ico_sm_white.png) no-repeat',
            backgroundPosition: '100px 17px',
            backgroundColor: 'black'
        });
        $('.padding2 a').css('color', 'white');
        flag = 1;
    }else{
        $('.header .hdlink2').css({
            overflow :'hidden',
            height: '0'
        });
        $('.hdlink2 dl').css('height', '0');
        $('.header li:nth-child(5)').css({
            background: 'url(images/ico_sm_black_open.png) no-repeat',
            backgroundPosition: '100px 17px',
            backgroundColor: 'white'
        });
        $('.padding2 a').css('color', 'black');
        flag = 0;
    }
});
/*모바일 상단 언어메뉴*/
$('.mlang').click(function(){
    if(flag == 0){
        $('.mlinkbox').css({
            height: '225px'
        });
        $('.mlinkbox dl').css('height', '225px');
        $('.langbox').css({
            backgroundColor: 'black'
        });
        $('.langbox a').css('color', 'white');
        flag = 1;
    }else{
        $('.mlinkbox').css({
            height: '0'
        });
        $('.mlinkbox dl').css('height', '0');
        $('.langbox').css({
            backgroundColor: 'white'
        });
        $('.langbox a').css('color', 'black');
        flag = 0;
    }
});

/*모바일 상단바 서브메뉴 클릭이벤트*/
$('.box3 li').click(function(){
    if(flag == 0){
        $(this).css({
            height: '340px',
            overflow: 'visible'
        });
        flag = 1;
    }else{
        $(this).css({
            height: '100px',
            overflow: 'hidden'
        });
        flag = 0;
    }
});

$('#bar').click(function(){
    $('.mobilenav').css('display', 'block');
    $('.back').css('display','block');
});
$('.xbox').click(function(){
    $('.mobilenav').css('display', 'none');
    $('.back').css('display','none');
});