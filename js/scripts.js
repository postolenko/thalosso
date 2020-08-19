function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getHeaderParams() {
  if($(document).scrollTop() > 1) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {

    getHeaderParams();
    getAnimation();

});

$(document).scroll(function() {

    getHeaderParams();
    getAnimation();

});

$(document).ready(function() {

    getHeaderParams();
    getAnimation();

    if( $(".slider").length > 0 ) {


        $(".slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
          var slideDescript = $(".slider .slick-slide:eq("+nextSlide+") .slide_descript").html();
          $(".slider_descript").html(slideDescript);
        });

        $(".slider").on('init', function(){
          var slideDescript = $(".slider .slick-current .slide_descript").html();
          $(".slider_descript").html(slideDescript);
        });

        $(".slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            appendArrows: $(".append_arrows"),
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_arrow.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_arrow.svg"></button>',
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }

    // ---------

    $(".respmenubtn").on("click", function(e) {
        e.preventDefault();
        if(!$("#header").hasClass("visible")) {
            $("#header").addClass("visible");
            $(this).addClass("active");
            $(".menu_bg").addClass("visible");
        } else {
            $("#header").removeClass("visible");
            $(this).removeClass("active");
            $(".menu_bg").removeClass("visible");
        }
    });
    $(".menu_bg").on("click", function(e) {
        e.preventDefault();
        $(this).removeClass("visible");
        $("#header").removeClass("visible");
        $(".respmenubtn").removeClass("active");
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            $(".menu_bg").removeClass("visible");
            $("#header").removeClass("visible");
            $(".respmenubtn").removeClass("active");
        }
    });

    // ------

    $('.main_nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var hrefAttr = $(this).attr("href");
        if( hrefAttr.length > 0 && hrefAttr != "#" ) {
            $('html, body').stop().animate({
                'scrollTop': $(hrefAttr).offset().top+2
            }, 500);
        }
        $(".menu_bg").removeClass("visible");
        $("#header").removeClass("visible");
        $(".respmenubtn").removeClass("active");
    });

    $('.toContacts').on('click', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            'scrollTop': $("#contacts").offset().top+2
        }, 500);
        $(".menu_bg").removeClass("visible");
        $("#header").removeClass("visible");
        $(".respmenubtn").removeClass("active");
    });

    // ---------

    var this_form, name, tel, error;

    $("#submit").on("click", function (event) {
        event.preventDefault();
        error = 0;
        this_form = $(this).closest("form");
        this_form.find('.input_box').removeClass('error');
        this_form.find(".radios").removeClass('error');
        $(".error_box").fadeOut(300);
        if(this_form.find('input').is('input[name="name"]')) {
            name = this_form.find('input[name="name"]');
            if(typeof name.attr('required') != typeof undefined) {
                if(name.val().length<=2) {
                    name.closest(".input_box").addClass('error');
                    error = 1;
                }
            }
        }
        if(this_form.find('input').is('input[name="tel"]')) {
            tel = this_form.find('input[name="tel"]');
            if(typeof tel.attr('required') != typeof undefined) {
                if(tel.val().length<=2) {
                    tel.closest(".input_box").addClass('error');
                    error = 1;
                }
            }
        }
        if(this_form.find('input').is('input[name="radio"]')) {
            radio = this_form.find('input[name="radio"]');
            if(typeof radio.attr('required') != typeof undefined) {
                if(!radio.is(":checked")) {
                    radio.closest(".radios").addClass('error');
                    error = 1;
                }
            }
        }
        if(error==1) {
            $(".error_box").fadeIn(300);
            return false;            
        }
    });


    $("#submit2").on("click", function (event) {
        event.preventDefault();
        error = 0;
        this_form = $(this).closest("form");
        this_form.find('.input_box_2').removeClass('error');
        $(".error_box").fadeOut(300);
        if(this_form.find('input').is('input[name="name2"]')) {
            name = this_form.find('input[name="name2"]');
            if(typeof name.attr('required') != typeof undefined) {
                if(name.val().length<=2) {
                    name.closest(".input_box_2").addClass('error');
                    error = 1;
                }
            }
        }
        if(this_form.find('input').is('input[name="tel2"]')) {
            tel = this_form.find('input[name="tel2"]');
            if(typeof tel.attr('required') != typeof undefined) {
                if(tel.val().length<=2) {
                    tel.closest(".input_box_2").addClass('error');
                    error = 1;
                }
            }
        }
        if(error==1) {
            $(".error_box").fadeIn(300);
            return false;            
        }
    });

    $(".error_box .close_btn").on("click", function(event) {
        event.preventDefault();
        $(this).closest(".error_box").fadeOut(300);
    });

});




