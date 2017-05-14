/* FISH */
$(window).scroll(function(){

    var wScroll = $(this).scrollTop(); // this = window. It tells how far it is scrolled from the top
    $('.fish').css({
        'transform' : 'translate(0px, '+ wScroll /0.8 +'px)'
    });
});


/* COUNT UP */
window.onload=function() {
    // Month,Day,Year,Hour,Minute,Second
    upTime('may,07,2017,00:00:00');
};

function upTime(countTo) {
    now = new Date();
    countTo = new Date(countTo);
    difference = (now - countTo);
    days = Math.floor(difference/(60*60*1000*24));
    years = Math.floor(days / 365);

    if (years > 1){ days = days - (years * 365)}

    hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000));
    mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000));
    secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000);

    document.getElementById('years').firstChild.nodeValue = years;
    document.getElementById('days').firstChild.nodeValue = days;
    document.getElementById('hours').firstChild.nodeValue = hours;
    document.getElementById('minutes').firstChild.nodeValue = mins;
    document.getElementById('seconds').firstChild.nodeValue = secs;

    clearTimeout(upTime.to);
    upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}


/* MODAL WINDOW - images */
var modal = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');

var img = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');

var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");
var modalImg5 = document.getElementById("img05");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
};
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
};
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
};
img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
};
img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};


/* SIDEBAR */
$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});