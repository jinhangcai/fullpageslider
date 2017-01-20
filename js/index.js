/**
 * Created by Administrator on 2017/1/16.
 */
$(function(){
    var section1,section2,section3;
    $('#dowebok').fullpage({
        //sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        resize:true,
        verticalCentered:false,
        controlArrowColor:'#000',
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        menu: '#menu',
        loopBottom:true,

        continuousHorizontal: true,
        continuousHorizontalKey: 'YWx2YXJvdHJpZ28uY29tX00zVVkyOXVkR2x1ZFc5MWMwaHZjbWw2YjI1MFlXdz12Nk0=',
        slidesNavigation: true,

        afterLoad: function(anchorLink, index){
            if(index == 3){
                section1 = setTimeout(function(){
                    $('.section2').find('.introduce-250km').removeClass('opacity').addClass('animated bounceInLeft');
                },1);
                section2 = setTimeout(function(){
                    $('.section2').find('.introduce-50kw').removeClass('opacity').addClass('animated bounceInDown');
                },1000);
                section3 = setTimeout(function(){
                    $('.section2').find('.introduce-61m').removeClass('opacity').addClass('animated bounceInRight');
                },2000);
            }
        },
        onLeave: function(index, direction){
            if( direction != 1){
                $('#menu li').eq(0).removeClass('index-red');
            }else{
                $('#menu li').eq(0).addClass('index-red');
            }
            if(index == '3'){
                clearTimeout(section1);
                clearTimeout(section2);
                clearTimeout(section3);
                $('.section2').find('.introduce-250km').addClass('opacity').removeClass('animated bounceInLeft');
                $('.section2').find('.introduce-50kw').addClass('opacity').removeClass('animated bounceInDown');
                $('.section2').find('.introduce-61m').addClass('opacity').removeClass('animated bounceInRight');
            }
        }
    });
    $('.navig span').on('click',function(){
        if($('.bottom-red').index() == $(this).index())return;
        $('.navig span').removeClass('bottom-red');
        if($(this).index() == 0){
            $(this).addClass('bottom-red index-red');
        }else{
            $('.navig span').removeClass('index-red');
            $(this).addClass('bottom-red');
        }
    })

    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 6000);

});