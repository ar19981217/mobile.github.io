$('.header-nav-button').click(function () {
    $('#mobile-sidebar-nav').toggleClass('show-sidebar');
    $('body').toggleClass('hidden');
});

/*************player *************/

$(function () {
    var hgP = $('.player-content').innerHeight();
    var hgI = $('.videoView-content').innerHeight();
    $('.poster-play').css({height: (hgP - hgI)});
    $('.poster img').css({height: hgP});

    $('.poster-play, .play-icon').click(function () {

        var iframe = $('.iframe-block iframe');
        var ifAtt = $(iframe).attr('src');
        $(iframe).attr('src', ifAtt + '=1');
        setTimeout(function () {
            var that = $('.poster, .play-icon');
            $(that).css({
                display: 'none'
            });
            $('.videoView-name').addClass('is-nt-before')
        }, 500)

    });
});


/******************Trailer*******************/
$(function () {
    $('.videoView-gallery .trailer').click(function () {

        $("html, body").animate({scrollTop: 0}, "slow");
        setTimeout(function () {
            var iframe = $('.iframe-block iframe');
            var ifAtt = $(iframe).attr('src');
            $(iframe).attr('src', ifAtt + '=1');
            setTimeout(function () {
                var that = $('.poster, .play-icon');
                $(that).css({
                    display: 'none'
                });
                $('.videoView-name').addClass('is-nt-before')
            }, 400);

        }, 500);
        return false
    })
});
/******************Trailer*******************/

/***********--Gallery-js--*****************/
$(function () {
    var zoomDiv = $('.gallery-top .swiper-wrapper >div');
    var gallery = $('.gallery-zoom-id .card > .thumb');
    for (let i = 0; i < zoomDiv.length; i++) {
        $(zoomDiv).eq(i).attr('data-id', i);
        $(gallery).eq(i).attr('data-id', i);
    }
    $(gallery).click(function () {
        for (let i = 0; i < zoomDiv.length; i++) {
            if ($(this).attr('data-id') == $(gallery).eq(i).attr('data-id')) {
                var swiper = new Swiper('.swiper-container', {
                    spaceBetween: 30,
                    effect: 'fade',
                    initialSlide: parseInt($(this).attr('data-id')),
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction',
                    },
                });
            }
        }
    });
})
/***********--Gallery-js--*****************/

$(function () {
    $('.videoView-gallery .card').click(function () {
        $('.zoom-foto').addClass('zoom_show');

    })
    $('.icon-close').click(function () {
        $('.zoom-foto').removeClass('zoom_show');
        /*console.log($('#zoomFoto').html())*/
        $('#zoomThis').html($('#zoomDefault').html());
        $('#zoomThis .gallery-top').addClass('swiper-container');

        $('#zoomThis .pagin').addClass('swiper-pagination');
    })

})






