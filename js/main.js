/*$.getJSON('https://ipfind.co/me?auth=d1685842-31b4-4399-8650-ee656dad01c2', function(data) {
    console.log(JSON.stringify(data, null, 2));
});*/

$('.header-nav-button').click(function () {
    $('#mobile-sidebar-nav').toggleClass('show-sidebar');
    $('body').toggleClass('hidden');
    $('#mobile-sidebar-nav').css({
        top: $(window).scrollTop()
    })
    $(window).scroll(function () {
        $('#mobile-sidebar-nav').css({
            top: $(window).scrollTop()
        })
    })
})



$('.search-icon-hide').click(function () {
    $('.mobile-search-block ').toggleClass('show-search');
    $('body').toggleClass('hidden');
    $('.mobile-search-block').css({
        top: $(window).scrollTop()
    });
    $(window).scroll(function () {
        $('.mobile-search-block').css({
            top: $(window).scrollTop()
        })
    })
});


var lastScrollTop = 0;
window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        document.getElementById("nav").classList.add('hide');
    } else {
        document.getElementById("nav").classList.remove('hide');
    }
    lastScrollTop = st;
}, false);

/*$("#nav").css({top: 0});
window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "0";
    }
    lastScrollTop = st;
}, false);*/


