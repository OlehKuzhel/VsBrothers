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
        heightSection = $('.section-main').height() - 200;
    if (!$('header').hasClass('open')) {
        if(height > heightSection){
            $('header:not(.page)').addClass('invert');
        } else{
            $('header:not(.page)').removeClass('invert');
        }
    }
});

$("header, footer").on("click",".scrollbtn", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        var id = $(this).attr('href');
        console.log(location.pathname)
        if (location.pathname!='/') {
            location.href = '/'+id
        } else {
            var top = $(id).offset().top - $('.section-header').height();
            if (isMobile == true) {
                $('.link--openmenu').trigger('click')
                top = $(id).offset().top - $('.section-header').height() - 15;
            }
            $('body,html').animate({scrollTop: top}, 1500);
        }



    });


var loginBtn = $('.btn--primary.login'),
    formLogin = $('.form-login');

loginBtn.on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    formLogin.toggleClass('show');
});

if (isMobile == false) {
    $(document).click(function (e) {
        if ( !loginBtn.is(e.target) && !formLogin.is(e.target) && formLogin.has(e.target).length === 0) {
            formLogin.removeClass('show');
            loginBtn.removeClass('active');
        };
    });
}



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
                $numbers = $('.insurance-navigation').find('p')
                $activenumb = $numbers.find('.active').text($index + 1)
                $allnumb = $numbers.find('.all').text($all)
            },
            slideChange: function () {
                $index = this.activeIndex
                $numbers = $('.insurance-navigation').find('p')
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
                $numbers = $('.cabinet-navigation__row').find('p')
                $activenumb = $numbers.find('.active').text($index + 1)
                $allnumb = $numbers.find('.all').text($all)
            },
            slideChange: function () {
                $index = this.activeIndex
                $numbers = $('.cabinet-navigation__row').find('p')
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
    $('.cabinet-navigation').css('margin-left', $wrapperMl)
    $('.cabinet-navigation').css('padding-left', $wrapperPl)
    $('.cabinet-content').css('margin-right', $wrapperMl)
    $('.cabinet-content').css('padding-right', $wrapperPl)
} else {

    $mapCount = $('.contacts-tabs__item.active').find('.map')
    $('.contacts-navigation .all').text($mapCount.length);

    startSlide = 0;

    $('body').on('click', '.contacts-navigation .contacts-next', function(event) {
        event.preventDefault();
        
        $activeCountry = $('.contacts-tabs__item.active').find('.map')

        if (startSlide < $activeCountry.length - 1) {
            $($activeCountry[startSlide]).fadeOut('fast', function() {
                startSlide++
                $($activeCountry[startSlide]).fadeIn('fast')
                $('.contacts-navigation .active').text(startSlide + 1)
            });

        }

    });

    $('body').on('click', '.contacts-navigation .contacts-prev', function(event) {
        event.preventDefault();
        
        $activeCountry = $('.contacts-tabs__item.active').find('.map')

        if (startSlide > 0) {
            $($activeCountry[startSlide]).fadeOut('fast', function() {
                startSlide--
                $($activeCountry[startSlide]).fadeIn('fast')
                $('.contacts-navigation .active').text(startSlide + 1)
            });

        }

    });

    $('body').on('click', '.link--openmenu', function(event) {
        event.preventDefault();
        /* Act on the event */
        if ($(this).parents('.section-header').hasClass('invert') || $(this).parents('.section-header').hasClass('page')) {
            $(this).parents('.section-header').toggleClass('open');
        } else {
            $(this).parents('.section-header').toggleClass('open invert');
        }
        
    });


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

    if (isMobile == true) {
        startSlide = 0;
        $('.contacts-tabs__item.active .map').hide()
        $mapCount = $('.contacts-tabs__item.active').find('.map')
        $($mapCount[startSlide]).show()
        $('.contacts-navigation').attr('data-type', $tabActive)
        $('.contacts-navigation .active').text('1')
        $('.contacts-navigation .all').text($mapCount.length)
    }
});


$('.select-field').styler()



// Форма сотрудничества

// Первый шаг
   
   $('body').on('click', '.link--diller', function(event) {
       event.preventDefault();
       $val = $(this).attr('data-val');
       $id = $(this).attr('data-type')

       
       $('[name=partner_about_id]').val($id)

       $('[name=partner_about]').val($val)

       $('.link--diller').removeClass('active')
       $(this).addClass('active')

       $(this).parents('.steps-content__item').removeClass('required')
       $('.link--next').attr('data-type', $id)
       $('.link--back').attr('data-type', $id)
       $('.link--next').removeClass('not-active')

       /* Act on the event */
   });

   $('body').on('change', 'input[name=city]', function(event) {
       // event.preventDefault();
       $val = $(this).val();
       $('[name=partner_businesscity]').val($val)

       if ($val != '') {
            $(this).addClass('filled')
            $(this).removeClass('required-field')
            // $('#city-styler').removeClass('required-field')
       } else {
            $(this).addClass('required-field')
            $(this).removeClass('filled')
            // $('#city-styler').addClass('required-field')
       }
       checkFields($(this))

       /* Act on the event */
   });

   var $cities = [],
        $citiesBlock =  $('.cities').find('div');
       $.each($citiesBlock, function(index, el) {
           
           $cities.push($(el).attr('data-value'))
       });

    $('#city').autocomplete({
        appendTo: $('[name="city"]').parent(),
        lookup: $cities,
        maxHeight: 150,
        lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
            return suggestion.value.toLowerCase().indexOf(queryLowerCase) === 0;
        },
        onSelect: function(suggestion) {
            $(this).trigger('change')
            // checkFields($(this))
        },
    });

   $('body').on('change', 'select[name=years]', function(event) {
       // event.preventDefault();
       $val = $(this).val();
       $('[name=partner_dileryears]').val($val)
       /* Act on the event */
   });

   $('body').on('change', 'input[name=companies]', function(event) {
       // event.preventDefault();
       $val = $(this).val();
       
       if ($val.length > 0) {
            $(this).addClass('filled')
            $('[name=partner_contactsnames]').val($val)
       } else {
            $(this).removeClass('filled')
            $('[name=partner_contactsnames]').val('')
       }
       /* Act on the event */
   });

   $('body').on('change', 'input[name=companies-old]', function(event) {
       // event.preventDefault();
       $val = $(this).val();
       
       if ($val.length > 0) {
            $(this).addClass('filled')
            $('[name=partner_contactsnames]').val($val)
       } else {
            $(this).removeClass('filled')
            $('[name=partner_contactsnames]').val('')
       }
       /* Act on the event */
   });

   $('body').on('change', 'input[name=name]', function(event) {
       // event.preventDefault();
       $val = $(this).val();
       
       if ($val.length > 0) {
            $(this).addClass('filled')
            $('[name=partner_name]').val($val)
             $(this).removeClass('required-field')
       } else {
            $(this).removeClass('filled')
            $('[name=partner_name]').val('')
            $(this).addClass('required-field')
       }

       checkFields($(this))

       /* Act on the event */
   });
   $('body').on('change', 'input[name=email]', function(event) {
       // event.preventDefault();
       $val = $(this).val();
       
       if ($val.length > 0) {
            $(this).addClass('filled')
            $('[name=partner_email]').val($val)
            $(this).removeClass('required-field')
       } else {
            $(this).removeClass('filled')
            $('[name=partner_email]').val('')
            $(this).addClass('required-field')
       }
       checkFields($(this))
       /* Act on the event */
   });
   $('body').on('change', 'input[name=client-city]', function(event) {
       // event.preventDefault();
       $val = $(this).val();
       $('[name=partner_city]').val($val)

      if ($val != '') {
            $(this).addClass('filled')
            $(this).removeClass('required-field')
       } else {
            $(this).addClass('required-field')
            $(this).removeClass('filled')
       }
       checkFields($(this))
   });

   $('#client-city').autocomplete({
        appendTo: $('[name="client-city"]').parent(),
        lookup: $cities,
        maxHeight: 150,
        lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
            return suggestion.value.toLowerCase().indexOf(queryLowerCase) === 0;
        },
        onSelect: function(suggestion) {
            $(this).trigger('change')
        },
    });


   $('body').on('change', 'input[name=office]', function(event) {
       // event.preventDefault();
       $val = $(this).val();
       
       if ($val.length > 0) {
            $(this).addClass('filled')
            $(this).parents('[data-block="office"]').removeClass('required-field')
            $('[name=partner_officeaddress]').val($val)
       } else {
            $(this).parents('[data-block="office"]').addClass('required-field')
            $(this).removeClass('filled')
            $('[name=partner_officeaddress]').val('')
       }

       checkFields($(this))

       /* Act on the event */
   });

   $('body').on('change', 'input[name=phone_notauto]', function(event) {
       // event.preventDefault();
       $val = $(this).val();
       
       if ($val.length > 0) {
            $(this).addClass('filled')
            $('[name=partner_phone]').val($val)
            $(this).removeClass('required-field')
       } else {
            $(this).removeClass('filled')
            $('[name=partner_phone]').val('')
            $(this).addClass('required-field')
       }
       /* Act on the event */
       checkFields($(this))
   });

   
   $('.sites').on('change', 'input[type=text]', function(event) {

       $sitesBlock = $(this).parents('.sites').find('input[type=text]');

       $arrInput = $sitesBlock.serializeArray()
       var out=[];
       $.each($arrInput, function(index, el) {
           out.push(el.value)
       });


       $('[name=partner_sociallinks]').val(out.toString())

       
        // for (var x=0; x<a.length;x++){ //перебераем все объекты
        //     out.push(a[x].value); //добавляем значения в выходной массив
        // }
        // console.log(out); //с массивом делаем что угодно.


   })

   $('body').on('click', '.repeat-form', function(event) {
       event.preventDefault();

       // $inputsEmpty = $('.steps-content__items').find('inputs')

       $activeStep = $('.steps-content__items').find('.steps-content__item:visible')
       $activeNumb = $activeStep.attr('data-step');
       $nextStep = $('.steps-content__item[data-step=1]')
       $activeStep.fadeOut('fast', function() {
            $nextStep.fadeIn('fast')
            $('.steps-content__navigation').removeClass('not-active')
            $('.link--back').addClass('not-visible not-active')

            $filled = $('.steps-progress__items').find('.steps-progress__item')
            $.each( $filled, function(index, el) {
                $(el).removeClass('active filled')
            });
            $('.steps-progress__item:nth-child(1)').addClass('active')
            $('.link--next').removeClass('send-ajax')
        }); 

       /* Act on the event */
   });

   $('body').on('change', 'textarea[name=steps-comment]', function(event) {
       // event.preventDefault();
       $val = $(this).val();
       
       if ($val.length > 0) {
            $(this).addClass('filled')
            $('[name=partner_question]').val($val)
       } else {
            $(this).removeClass('filled')
            $('[name=partner_question]').val('')
       }
       /* Act on the event */
   });

   $('body').on('click', '.link--radio', function(event) {
       event.preventDefault();
       $val = $(this).attr('data-val');
       $(this).addClass('active').siblings().removeClass('active')
       $('[name=partner_countcar]').val($val)

       // if ($(this).val() != '') {
            $(this).parents('.content-row').removeClass('required-field')
       // } else {
            // $(this).parents('[data-block="office"]').addClass('required-field')
       // }
        checkFields($(this))

       /* Act on the event */
   });


   $('[data-block="sites"]').on('change', '.checkbox-site', function(event) {
       // event.preventDefault();

       if ($(this).attr('data-radio') == 'yes') {
        $(this).parents('.steps-content__item').find('.inputs').addClass('active')
       } else {
        $(this).parents('.steps-content__item').find('.inputs').removeClass('active')
       }

       if ($(this).val() != '') {
            $(this).parents('[data-block="sites"]').removeClass('required-field')
       } else {
            $(this).parents('[data-block="sites"]').addClass('required-field')
       }
       

       $('[name=partner_social]').val($(this).val())
       checkFields($(this))

       /* Act on the event */
   });


   $('[data-block="companies"]').on('change', '.checkbox-site', function(event) {
       // event.preventDefault();

       if ($(this).attr('data-radio') == 'yes') {
        $(this).parents('.steps-content__item').find('.companies').show()
       } else {
        $(this).parents('.steps-content__item').find('.companies').hide()
       }

       if ($(this).val() != '') {
            $(this).parents('[data-block="companies"]').removeClass('required-field')
       } else {
            $(this).parents('[data-block="companies"]').addClass('required-field')
       }
        checkFields($(this))

       $('[name=partner_contacts]').val($(this).val())

       /* Act on the event */
   });

   $('[data-block="office"]').on('change', '.checkbox-site', function(event) {
       // event.preventDefault();

       if ($(this).attr('data-radio') == 'yes') {
        $(this).parents('.steps-content__item').find('.office').show()
       } else {
        $(this).parents('.steps-content__item').find('.office').hide()
       }

       if ($(this).val() != '') {
            $(this).parents('[data-block="office"]').removeClass('required-field')
       } else {
            $(this).parents('[data-block="office"]').addClass('required-field')
       }
        checkFields($(this))

       $('[name=partner_office]').val($(this).val())

       /* Act on the event */
   });

   $('body').on('click', '.link--sites', function(event) {
       event.preventDefault();

       $html = '<div class="sites-field ">' +
                   '<input type="text" name="site[]" placeholder="https://" class="field field--site">' +
                    '<p class="error">' +
                     '  Неверный формат' +
                    '</p>' +
                    '</div>';
        $(this).parents('.steps-content__item').find('.inputs .sites').append($html)

   });

   $('.steps-content__navigation').on('click', '.link--back', function(event) {
       event.preventDefault();

       $activeStep = $('.steps-content__items').find('.steps-content__item:visible')
       $activeNumb = $activeStep.attr('data-step');
       $activeCheckbox = $(this).attr('data-type')

       if ($activeNumb == 3) {
            $nextStep = $('.steps-content__item[data-type='+$activeCheckbox+']')
            $('.link--next').text($('.link--next').attr('data-nexttext'))
            $('[name="name"]').val('').addClass('required-field')
            checkFields($('[name="name"]'))
       } else {
            $nextStep = $('.steps-content__item[data-step=1]')
       }

       // if (!$activeStep.hasClass('required')) {
          $activeStep.fadeOut('fast', function() {
              $nextStep.fadeIn('fast')
              if ($nextStep.attr('data-step') == 1) {
                 $('.link--back').addClass('not-visible not-active')

              }
              $('.link--next').removeClass('not-active')
              $('.link--next').removeClass('send-ajax')
             
          });  
       // }
   });

   $('.steps-content__navigation').on('click', '.link--next:not(.not-active)', function(event) {
       event.preventDefault();

       $activeStep = $('.steps-content__items').find('.steps-content__item:visible')
       $activeNumb = $activeStep.attr('data-step');
       $activeCheckbox = $(this).attr('data-type')

       if ($activeNumb != 3) {
           if ($activeNumb == 1) {
                $nextStep = $('.steps-content__item[data-type='+$activeCheckbox+']')
                $('.steps-progress__item:nth-child(1)').addClass('filled')
                $('.steps-progress__item:nth-child(2)').addClass('active')
           } else {
                $nextStep = $('.steps-content__item[data-step=3]')
                $('.link--next').addClass('send-ajax')
                $('.steps-progress__item:nth-child(2)').addClass('filled')
                $('.steps-progress__item:nth-child(3)').addClass('active')

                
           }
           // console.log($activeNumb)
           if ($activeNumb == 2) {

                $activeStep.fadeOut('fast', function() {
                      $nextStep.fadeIn('fast')
                      $('.link--back').removeClass('not-visible not-active')
                      $('.link--next').addClass('not-active')
                      $('.link--next').text($('.link--next').attr('data-laststep'))
                  }); 
           } else {
                if (!$activeStep.hasClass('required')) {
                  $activeStep.fadeOut('fast', function() {
                      $nextStep.fadeIn('fast')
                      $('.link--back').removeClass('not-visible not-active')
                      $('.link--next').addClass('not-active')
                      $('.link--next').text($('.link--next').attr('data-nexttext'))
                  });  
               }
           }
       } else {
        $('.form-partner').trigger('submit')
       }

       
   });

    numberFirst = $('.main-footer__numb:nth-child(1) h4')
    numberSecond = $('.main-footer__numb:nth-child(2) h4')
    numberThird = $('.main-footer__numb:nth-child(3) h4')
    numberFour = $('.main-footer__numb:nth-child(4) h4')

    animateNumber(parseInt(numberFirst.text()), numberFirst)
    animateNumber(parseInt(numberSecond.text()), numberSecond)
    animateNumber(parseInt(numberThird.text()), numberThird)
    animateNumber(parseInt(numberFour.text()), numberFour)

        function animateNumber(number, element) {
           $({numberValue: 0}).animate({numberValue: number}, {
                duration: 2000, 
                easing: "linear",
                step: function(val) {
                    element.text(Math.ceil(val))
                },
                complete: function (val) {
                    if (element.parent().hasClass('plus-numb')) {
                        element.append('+')
                    }
                }

            }); 
        }


    // $('body').on('click', '.link--next.send-ajax:not(.not-active)', function(event) {
    // $('body').on('click', '.link--next.send-ajax', function(event) {
        // event.preventDefault();
        /* Act on the event */
        
    // });

        // Обработчик формы
    $('.form-partner').submit(function(event) {
        var _form = $(this);
        var th = _form.serialize();
        var form_url = _form.attr('action');
        th = th + "&_token=" + $('meta[name="csrf-token"]').attr('content');
        $.ajax({
            type: "POST",
            url: form_url,
            data: th,
            success: function(data) {
                setTimeout(function() {
                    _form.trigger("reset");
                }, 3000);
                $activeStep = $('.steps-content__items').find('.steps-content__item:visible')
                $nextStep = $('.steps-content__item[data-step=4]')
                $nextStep.find('.success').addClass('active')
                $('.steps-content__navigation').addClass('not-active')
                // $('.steps-progress__item:nth-child(3)').addClass('active')
                $('.steps-progress__item:nth-child(3)').addClass('filled')
                $activeStep.fadeOut('fast', function() {
                  $nextStep.fadeIn('fast')
                  
                }); 
                // setTimeout(function() {
                    // $.fancybox.close();
                // }, 15000)
            },
            error: function(data) {
                // console.log(data)
                $activeStep = $('.steps-content__items').find('.steps-content__item:visible')
                $nextStep = $('.steps-content__item[data-step=4]')
                $nextStep.find('.error').addClass('active')
                $('.steps-content__navigation').addClass('not-active')
                $('.steps-progress__item:nth-child(3)').addClass('filled')
                $activeStep.fadeOut('fast', function() {
                  $nextStep.fadeIn('fast')
                }); 
            }
        });
        event.preventDefault();
    });


    $('.phone-check').mask('+38 (000) 000 00 00').focus(function(event) {
        if ($(this).val() == '') {
            $(this).val('+38 (0')
        }
    }).blur(function(event) {
        if ($(this).val() == '+38 (0') {
            $(this).val('')
        }
    });

    function checkFields(input) {
        $parent = input.parents('.steps-content__item')
        $required = $parent.find('.required-field')
        if ($required.length > 0) {
            $('.link--next').addClass('not-active')
        } else {
            $('.link--next').removeClass('not-active')
        }
    }
        


});