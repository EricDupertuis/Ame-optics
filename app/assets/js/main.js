$( document ).ready(function(){
    if ($(window).width() < 901) {
        $('.navList a').click(function(){
            $('.navList').slideDown( 400, function() {

            });
        });
    }

    if ($(window).width() < 901) {
        $('.navList').slideUp();
    }
});

$('.navList a[href*=#], #introButton').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});

$('.navToogle').click(function(e){
    e.preventDefault();
    $('.navList').show;
});