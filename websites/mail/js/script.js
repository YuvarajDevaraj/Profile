! function(l) {
    "use strict";
    var clicked = 0;
    l("#sidebarToggle, #sidebarToggleTop").on("click", function(e) {
        clicked++;
        if (clicked % 2 === 0) {
            l("body").toggleClass(), l(".sidebar").toggleClass("toggled"), l(".sidebar").hasClass("toggled") && l(".sidebar .collapse").collapse("show");
            $(".nav-item span").css("display","initial"); 
            $(".sbr").css("display","initial");
            $(".msbr").css("display","none");
        } else {
           l("body").toggleClass("sidebar-toggled"), l(".sidebar").toggleClass("toggled"), l(".sidebar").hasClass("toggled") && l(".sidebar .collapse").collapse("hide")
            $(".accordion .nav-item span").css("display","none");
            $(".msbr").css({"display":"initial","text-align":"center","font-size":"30px"});
            $(".sbr").css("display","none");
        }
    }), l(window).resize(function() {
         if ($(window).width() < 768) {
                $('.mtable table').addClass('tbs').removeClass('table');
            } else {
                $('.mtable table').addClass('table').removeClass('tbs');
            }
        l(window).width() < 768 && l(".sidebar .collapse").collapse("hide"), l(window).width() < 480 && !l(".sidebar").hasClass("toggled") && (l("body").addClass("sidebar-toggled"), l(".sidebar").addClass("toggled"), l(".sidebar .collapse").collapse("hide"))
    }), l("body.fixed-nav .sidebar").on("mousewheel DOMMouseScroll wheel", function(e) {
        var o;
        768 < l(window).width() && (o = (o = e.originalEvent).wheelDelta || -o.detail, this.scrollTop += 30 * (o < 0 ? 1 : -1), e.preventDefault())
    }), l(document).on("scroll", function() {
        100 < l(this).scrollTop() ? l(".scroll-to-top").fadeIn() : l(".scroll-to-top").fadeOut()
    })
}
(jQuery);
