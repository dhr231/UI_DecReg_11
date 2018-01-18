$(window).scroll(function(){

    var scrollPos = $(window).scrollTop();
    // console.log(scrollPos);
    if (scrollPos > 400) {
        $("#header").addClass("active");
    }
    else {
        $("#header").removeClass("active");
    }

    // var section_1 = $("#section_1").offset().top;
    // console.log(section_1);
    
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
})