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

});

$(document).scroll(function() {

    getHeaderParams();

});

$(document).ready(function() {

    getHeaderParams();

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
            // fade: true,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                // {
                //   breakpoint: 540,
                //   settings: {
                //     slidesToShow: 1,
                //     slidesToScroll: 1
                //   }
                // }
              ]
        });
    }

    // ---------

    $(".respmenubtn").on("click", function(e) {
        e.preventDefault();
        if(!$("#header").hasClass("visible")) {
            div = document.createElement('div');
            div.style.overflowY = 'scroll';
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.visibility = 'hidden';
            document.body.appendChild(div);
            scrollWidth = div.offsetWidth - div.clientWidth;
            document.body.removeChild(div);
            $("body").addClass("fixed");
            $("body").css({
                "position" : "fixed",
                "top" :  -$(document).scrollTop() + "px",
                "overflow" : "hidden",
                "right" : 0,
                "left" : 0,
                "bottom" : 0,
                "padding-right" : scrollWidth + "px"
            });
            $("#header").addClass("visible");
            $(this).addClass("active");
            $(this).css({
                "right" : scrollWidth + "px"
            });
            $(".menu_bg").addClass("visible");
        } else {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $("#header").removeClass("visible");
            $(this).removeClass("active");
            $(this).css({
                "right" : "10px"
            });
            $(".menu_bg").removeClass("visible");
        }
    });
    $(".menu_bg").on("click", function(e) {
        e.preventDefault();
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $(this).removeClass("visible");
        $("body").removeClass("fixed");
        $("#header").removeClass("visible");
        $(".respmenubtn").removeClass("active");
        $(".respmenubtn").css({
            "right" : "10px"
        });
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $(".menu_bg").removeClass("visible");
            $("body").removeClass("fixed");
            $("#header").removeClass("visible");
            $(".respmenubtn").removeClass("active");
            $(".respmenubtn").css({
                "right" : "10px"
            });
        }
    });
});