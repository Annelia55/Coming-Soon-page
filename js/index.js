/* FISH */
$(window).scroll(function(){

    var wScroll = $(this).scrollTop(); // this = window. It tells how far it is scrolled from the top
    $('.fish').css({
        'transform' : 'translate(0px, '+ wScroll /1.5 +'%)'
    });
});
