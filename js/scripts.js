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

});




