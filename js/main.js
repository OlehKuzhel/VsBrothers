// WebFont.load({
//     google: {
//         families: ['Montserrat:400,500,600,700:cyrillic']
//     }
// });

$(document).ready(function($) {


var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;



$(window).scroll(function() {
    var height = $(window).scrollTop(),
        heightSection = $('.section-main').height();
    if(height > heightSection){
        $('header').addClass('invert');
    } else{
        $('header').removeClass('invert');
    }
});
var loginBtn = $('.btn--primary.login'),
    formLogin = $('.form-login');

loginBtn.on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    formLogin.toggleClass('show');
});


$(document).click(function (e) {
    if ( !loginBtn.is(e.target) && !formLogin.is(e.target) && formLogin.has(e.target).length === 0) {
        formLogin.removeClass('show');
        loginBtn.removeClass('active');
    };
});

var sliderInsurance = new Swiper('.insurance-slider', {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        // fadeEffect: { crossFade: true },
        // effect: 'fade',
        navigation: {
            nextEl: '.insurance-next',
            prevEl: '.insurance-prev',
        },
        on: {
            init: function () {
                $all = this.slides.length
                $index = this.activeIndex
                $numbers = $('.insurance-navigalion').find('p')
                $activenumb = $numbers.find('.active').text($index + 1)
                $allnumb = $numbers.find('.all').text($all)
            },
            slideChange: function () {
                $index = this.activeIndex
                $numbers = $('.insurance-navigalion').find('p')
                $activenumb = $numbers.find('.active').text($index + 1);
                
                $prevIndex = this.previousIndex;
                $('.insurance-content').find('.insurance-content__text').eq($prevIndex).fadeOut('fast', function() {
                    $('.insurance-content').find('.insurance-content__text').eq($index).fadeIn('fast')
                });
            },
        }

    });


var sliderCabinet = new Swiper('.cabinet-slider', {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        fadeEffect: { crossFade: true },
        effect: 'fade',
        navigation: {
            nextEl: '.cabinet-next',
            prevEl: '.cabinet-prev',
        },
        on: {
            init: function () {
                $all = this.slides.length
                $index = this.activeIndex
                $numbers = $('.cabinet-navigalion__row').find('p')
                $activenumb = $numbers.find('.active').text($index + 1)
                $allnumb = $numbers.find('.all').text($all)
            },
            slideChange: function () {
                $index = this.activeIndex
                $numbers = $('.cabinet-navigalion__row').find('p')
                $activenumb = $numbers.find('.active').text($index + 1);
                
                // $prevIndex = this.previousIndex;
                // $('.infrastructure-block__texts').find('.infrastructure-block__text').eq($prevIndex).fadeOut('fast', function() {
                    // $('.infrastructure-block__texts').find('.infrastructure-block__text').eq($index).fadeIn('fast')
                // });
            },
        }

    });





   

 opnsFancy = {
        touch: false,
        baseClass: "modal",
        beforeLoad: function(instance, slide) {
            if (isMobile == false) {} else {

            }

        },
        afterShow: function(instance, current) {
        },
        afterLoad: function(instance, current) {
        },
        afterClose: function(instance, slide) {
        },
        hideScrollbar: true,
        btnTpl: {
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><span class="text">закрыть форму</span>' +
                '<span class="icon"><svg viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.33-.001L1.163 7.164 2 8 9.165.835 8.33-.001z" fill="#686C78"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1.67-.001l7.166 7.165L8 8 .835.835l.836-.836z" fill="#686C78"/></svg></span>' +
                "</button>",

        },
    }

$('body').on('click', '.fancybtn', function(event) {
        popup = $(this).data('popup')
        // popup = '#callback';
        $.fancybox.open({
            src: popup,
            type: 'inline',
            opts: opnsFancy,
        });
        return false
    });

$('body').on('click', '.link--more', function(event) {
    event.preventDefault();
    /* Act on the event */
    $closeText = $(this).attr('data-close');
    $openText = $(this).attr('data-open');
    $(this).toggleClass('active');

    $servicesItems = $('.cabinet-content ul').find('.non-visible')

    $.each($servicesItems, function(index, el) {
        $(el).toggle()
    });



    if ($(this).hasClass('active')) {
        $(this).text($closeText);
    } else {
        $(this).text($openText);
    }



});



$('.link--tooltip').on('click',  function(event) {
    event.preventDefault();
    /* Act on the event */
});

$('.terminal-visual .tooltip-circle').hover(function() {
    /* Stuff to do when the mouse enters the element */
    parentPos = $(this).parents('.terminal-visual').offset()
    textTitle = $(this).attr('data-title')
    $xp = $(this).offset().left
    $yp = $(this).offset().top
    $('.terminal-tooltip p').text(textTitle)
    $('.terminal-tooltip').css({
        top: $yp - parentPos.top + 'px',
        left: $xp - parentPos.left + 'px',
    });
    $('.terminal-tooltip').addClass('shown');
}, function() {
    /* Stuff to do when the mouse leaves the element */
    // console.log('no')
    $('.terminal-tooltip').removeClass('shown');
});

// $('body').on('hover', '.terminal-visual .tooltip-circle', function() {
//      Stuff to do when the mouse enters the element 
//     console.log('yes')
// }, function() {
//     console.log('no')
//     /* Stuff to do when the mouse leaves the element */
// });

var $servicesItems = $('.services-items').find('.services-item:hidden')
$('.link--service span').text($servicesItems.length)
$('.link--service').attr('data-open', $('.link--service').text())

// var $servicesItems = $('.services-items').find('.services-item:hidden')

$('body').on('click', '.link--service', function(event) {
    event.preventDefault();
    /* Act on the event */
    $closeText = $(this).attr('data-close');
    $openText = $(this).attr('data-open');
    $(this).toggleClass('active');

    

    $.each($servicesItems, function(index, el) {
        $(el).toggle()
    });



    if ($(this).hasClass('active')) {
        $(this).text($closeText);
    } else {
        $(this).text($openText);
    }



});


if($.cookie("cookie-confirm") != 'yes'){
    // myDate = $.cookie("timer");
    $('.cookie-save').show()
}


$('body').on('click', '.cookie-save .btn--start', function(event) {
    event.preventDefault();
    $.cookie("cookie-confirm", 'yes', {expires: 30});
    $(this).parents('.cookie-save').hide()
});

if (isMobile == false) {
    $wrapperMl = $('.wrapper').css('margin-left')
    $wrapperPl = $('.wrapper').css('padding-left')
    // console.log($wrapperPl)
    $('.cabinet-navigalion').css('margin-left', $wrapperMl)
    $('.cabinet-navigalion').css('padding-left', $wrapperPl)
    $('.cabinet-content').css('margin-right', $wrapperMl)
    $('.cabinet-content').css('padding-right', $wrapperPl)
}





$('body').on('click', '.save-content__tabs .link--tabs', function(event) {
    event.preventDefault();


    $(this).addClass('active').siblings().removeClass('active')
    $tabActive = $(this).attr('data-visible')
    $('.save-content__tab').hide()
    $('.save-content__tab[data-visible='+$tabActive+']').show()
    $('.save-visual img').hide()
    $('.save-visual img[data-visible='+$tabActive+']').show()
    /* Act on the event */
});

$('body').on('click', '.contacts-tabs__head .link--tabs', function(event) {
    event.preventDefault();
    $(this).addClass('active').siblings().removeClass('active')
    $tabActive = $(this).attr('data-country')
    $('.contacts-tabs__item').removeClass('active')
    $('.contacts-tabs__item[data-country='+$tabActive+']').addClass('active')
    /* Act on the event */
});


$('.select-field').styler()


});