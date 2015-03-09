$(window).scroll(function() {
    if ($(this).scrollTop() > $("#about").offsetTop) {
        $( "#nav" ).fadeIn();
    } else {
        $( "#nav" ).fadeOut();
    }
});

$('a[href*=#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});