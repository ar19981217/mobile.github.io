$('.header-nav-button').click(function () {
    $('#mobile-sidebar-nav').toggleClass('show-sidebar');
    $('body').toggleClass('hidden');
});

/*************player *************/
var hgP = $('.player-content').innerHeight();
var hgI = $('.videoView-content').innerHeight();
$('.poster-play').css({height: (hgP-hgI)});
$('.poster img').css({height: hgP});

$('.poster-play, .play-icon').click(function () {

    var iframe = $('.iframe-block iframe');
    var ifAtt = $(iframe).attr('src');
    $(iframe).attr('src', ifAtt+'=1');
    setTimeout(() => {
        var that = $('.poster, .play-icon');
        $(that).css({
            display:'none'
        });
        $('.videoView-name').addClass('is-nt-before')
    }, 500)

});
