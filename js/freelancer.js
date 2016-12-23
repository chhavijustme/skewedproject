// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    $('a[data-toggle=modal').each(function(){
        var hrefVal = $(this).attr('href');
        if(window.location.href.indexOf(hrefVal) != -1) {
           $(hrefVal).modal('show');
           // break;
         }
    });    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

    $(".filter-button").click(function(){
                var value = $(this).attr('data-filter');
                
                $(".filter-button").not('div[data-filter="'+value+'"]').removeClass('active');
                $(".filter-button").filter('div[data-filter="'+value+'"]').addClass('active');
                

                if(value == "all")
                {
                    //$('.filter').removeClass('hidden');
                    $('.filter').show('1000');
                }
                else
                {
        //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                    $(".filter").not('.'+value).hide('3000');
                    $('.filter').filter('.'+value).show('3000');
                    
                }
            });
    $(".filter2-button").click(function(){
                var value = $(this).attr('data-filter');
                
                $(".filter2-button").not('div[data-filter="'+value+'"]').removeClass('active2');
                $(".filter2-button").filter('div[data-filter="'+value+'"]').addClass('active2');
                

                if(value == "all")
                {
                    //$('.filter').removeClass('hidden');
                    $('.filter2').show('1000');
                }
                else
                {
        //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                    $(".filter2").not('.'+value).hide('3000');
                    $('.filter2').filter('.'+value).show('3000');
                    
                }
            });

})(jQuery); // End of use strict
