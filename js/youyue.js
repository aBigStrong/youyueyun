/**
 * Created by Administrator on 2016/7/8.
 */
//angular.module('youyue',['ng'])
//    .controller('parentCtrl',function($scope,$location,$http){
//    })
//    .controller('startCtrl',function($scope,$location){
//    })
$(function(){
    if(localStorage.biaoti==$('.chapter-title h2').html()){
        if(localStorage.scroll!==undefined){
            $('body')[0].scrollTop=localStorage.scroll;
        }
    }
})
$(window).scroll(function(){
    localStorage.setItem('scroll', $('body')[0].scrollTop);
    localStorage.setItem('biaoti', $('.chapter-title h2').html());
    console.log(localStorage.biaoti);
    console.log($('body')[0].scrollTop);
})
$('[data-role="mode"]').click(function (event) {
    event.preventDefault();
    if ($('#bg').hasClass('nightbg')) {
        $('#bg').removeClass().addClass('readbg');
        localStorage.setItem('beijing', 'readbg');
        //sessionStorage.getItem(key)
        $('[data-role="mode"] i')[0].style.backgroundPosition = '0% 100%'
    } else {
        $('#bg').removeClass().addClass('nightbg');
        localStorage.setItem('beijing', 'nightbg');
        $('[data-role="mode"] i')[0].style.backgroundPosition = '0% 0%';
        $('.bg_bar a').css('border', 'none');
        $('.bg_bar li:first-child a')[0].style.border = '1px solid #666';
    }
});
$('.bg_bar').on('click', 'a', function () {
    if (this.nodeName == 'A') {
        $('[data-role="mode"] i')[0].style.backgroundPosition = '0% 100%'
        $('.bg_bar a').css('border', 'none');
        this.style.border = '1px solid #666';
    }
})
$('.aadd').click(function (event) {
    event.preventDefault();
    console.log(1);
    if ($('.chapter-content').hasClass('font-normal')) {
        $('.font-normal').removeClass('font-normal').addClass('font-large');
        localStorage.setItem('ziti', 'font-large');
    } else if ($('.chapter-content').hasClass('font-large')) {
        $('.font-large').removeClass('font-large').addClass('font-xlarge');
        localStorage.setItem('ziti', 'font-xlarge');
    } else if ($('.chapter-content').hasClass('font-xlarge')) {
        $('.font-xlarge').removeClass('font-xlarge').addClass('font-xxlarge');
        localStorage.setItem('ziti', 'font-xxlarge');
    } else if ($('.chapter-content').hasClass('font-xxlarge')) {
        $('.font-xxlarge').removeClass('font-xxlarge').addClass('font-xxxlarge');
        localStorage.setItem('ziti', 'font-xxxlarge');
    }
});
$('.aminus').click(function (event) {
    event.preventDefault();
    if ($('.chapter-content').hasClass('font-xxxlarge')) {
        $('.font-xxxlarge').removeClass('font-xxxlarge').addClass('font-xxlarge');
        localStorage.setItem('ziti', 'font-xxlarge');
    } else if ($('.chapter-content').hasClass('font-xxlarge')) {
        $('.font-xxlarge').removeClass('font-xxlarge').addClass('font-xlarge');
        localStorage.setItem('ziti', 'font-xlarge');
    } else if ($('.chapter-content').hasClass('font-xlarge')) {
        $('.font-xlarge').removeClass('font-xlarge').addClass('font-large');
        localStorage.setItem('ziti', 'font-large');
    } else if ($('.chapter-content').hasClass('font-large')) {
        $('.font-large').removeClass('font-large').addClass('font-normal');
        localStorage.setItem('ziti', 'font-normal');
    }
});
/*book*/
$('#bookNav li a').click(function (event) {
    event.preventDefault();
    $(this).attr('class', 'current').siblings('.current').removeAttr('class');
});
/*nav*/
$('.nav a').click(function (event) {
    // event.preventDefault();
    $(this).attr('class', 'current').siblings('.current').removeAttr('class');
});
