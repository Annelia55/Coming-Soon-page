/* FISH */
$(window).scroll(function(){

    var wScroll = $(this).scrollTop(); // this = window. It tells how far it is scrolled from the top
    $('.fish').css({
        'transform' : 'translate(0px, '+ wScroll /1.5 +'%)'
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
var modal = document.getElementById('myModal');


var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}