$(document).ready(function(){

// function for scrolling around website (links to "#section" will scroll to that section)
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-15
        }, 900, 'swing');
    });
    
});