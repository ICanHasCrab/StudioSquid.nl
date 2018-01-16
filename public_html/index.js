var list =  ["home", "description", "portfolio", "team", "contact"];

$("body").ready(function () {
    
    $("#menu-button").click(function () {
        $("#mobile-menu").toggle();
    });
    
    $("#header-navigate").click(function () {
        $('html, body').animate({
            scrollTop: $("#description").offset().top
        }, 1500);
    });
    
    $("#read-more").click(function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1500);
    });
    
    list.forEach(function (target) {
        $("#link-" + target).click(function () {
            $('html, body').animate({
                scrollTop: $("#" + target).offset().top
            }, 2000);
        });
    });
});

$(window).on('resize', function() {
  if($(window).width() > 642) {
    $('#mobile-menu').css("display", "block");
  } else {
    $('#mobile-menu').css("display", "none");
  }
})