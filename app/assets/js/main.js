$( document ).ready(function(){
    if ($(window).width() < 901) {
        $('.navList').hide();

        $('.navList a').click(function(){
            $('.navList').slideToggle( 400, function() {

            });
        });
    }
});

$('.navList a[href*=#], #introButton').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});

$('.navToogle').click(function(e){
    e.preventDefault();
    $('.navList').slideToggle();
});