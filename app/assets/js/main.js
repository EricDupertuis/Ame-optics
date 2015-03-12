$( document ).ready(function(){
    $('.navList a').click(function(){
        $('.navList').slideToggle();    
    });

    if ($(window).width() < 960) {
        $('.navList').slideUp();
    }
});

$('.navList a[href*=#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});

$('.navToogle').click(function(e){
    e.preventDefault();
    $('.navList').slideToggle();
});