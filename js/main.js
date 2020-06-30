$(document).ready(function () {

    // $('.drop_hed').attr('href', 'javascript:void(0)');

    $('.drop-nav').slideUp();

    $('.drop-nav').parent().find('.drop_hed').addClass('drop_head_active');
    // $('.drop-nav').parent().find('.drop_hed').attr('href', 'javascript:void(0)');

    // logo to index page

    $('.logo').click(function () {
        window.location.href = "index.html";
    })

    // mobile nav

    $('.mb_nav').click(function () {
        $('.main_nav').slideToggle();
        $(this).toggleClass('close');
    })

    // profile dropdown

    $('.pro_arr').click(function () {
        $('.profile_drop').slideToggle();
    })

    // $(document).mouseup(function (e) {
    //     if ($(e.target).closest(".profile_drop").length
    //         === 0) {
    //         $(".profile_drop").hide();
    //     }
    // });


    // $(".side_nav_sec").on('change', function () {
    //     var indx = $("select#selectId").find(":selected").index();
    //     $('#selectId').animate({
    //         scrollTop: indx * 14
    //     }, 500);
    // });

    $(".side_nav_sec").change(function (e) {




        document.location.href = $(this).val();

        var target = $(this).val();
        $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top - 120

        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });



    $(document).on("scroll", onScroll);

    $('.side_nav_sec li a, .faq_qus li a').on('click', function (e) {


        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 63
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });



    $('.drop_main').each(function () {
        var x = $(this).find('.drop-nav').length;
        if (!x) {
            $(this).find('.drop_hed').removeClass('drop_head_active')
        } else {
            $(this).find('.drop_hed').addClass('drop_head_active')
        }
    })




});





function onScroll(event) {

    var scrollPosition = $(document).scrollTop();

    $('.dcs').addClass('scrl_active');


    $('.side_nav_sec li a').each(function () {
        var currentLink = $(this);
        if (currentLink.attr("href")) {

            var refElement = $(currentLink.attr("href"));
            // console.log(refElement, currentLink.attr("href"));



            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                $('.side_nav_sec li a').removeClass("active");
                currentLink.addClass("active");
            }
            else {
                currentLink.removeClass("active");
            }

        }

    });





}



window.addEventListener('scroll', function () {

    if ($(window).scrollTop() == 0) {

        $('.dcs').removeClass('scrl_active');
        $('.dcs').removeClass('active');
        $('.get_strt_lnk').addClass('active')

    }
});




$('.init_sld').on('click', function (e) {

    $(this).nextAll('.drop-nav:eq(0)').slideToggle();

});




$('.edit_code').click(function () {



    $(this).parents('.tlt_sec').find('.c_prt pre').css('background', '#080808');
    $(this).parent().find('.run_code').addClass('donecode');
    $(this).parent().find('.run_code').text('Done');
    $(this).parents('.tlt_sec').find('.alm__progress-bar').hide();
    $(this).hide();
})

$(document).on('click', '.donecode', function () {
    $(this).text('Run');
    $(this).removeClass('donecode');
    $('.edit_code').show();
    $(this).parents('.tlt_sec').find('.c_prt pre').css('background', '#333333');
    $(this).parents('.tlt_sec').find('.alm__progress-bar').hide();

});

$('.run_code').click(function () {


    $(this).parents('.tlt_sec').find('.alm__progress-bar').show();

    var this_is = $(this).parents('.tlt_sec')

    setTimeout(function () {

        $(this_is).find('.nav-tabs li').removeClass('active');

        $(this_is).find('.nav-tabs li:nth-child(2)').addClass('active');
        $(this_is).find('.tab-pane').removeClass('active');
        $(this_is).find('.tab-pane:nth-child(2)').addClass('active');
        // $(this_is).find('.nav-tabs li:nth-child(2)').next().hide();
        $(this_is).find('.alm__progress-bar').hide();
    }, 3000);
})

// $(document).click(function (e) {
//     var target = e.target;
//     if (!$(target).is('.drop_main') && !$(target).parents().is('.drop_main')) {
//         $('.drop-nav').hide();
//     }
// });



$('.clps').on('click', function () {





    if ($(this).hasClass('clps_active')) {

        // $('.clps').parent().find('.drop-nav').slideUp();
        $(this).removeClass('clps_active');
        $('.clps').parent().find('.drop-nav').slideUp();
        // $(this).parent().find('.drop-nav').slideDown();
    } else {
        $('.clps').removeClass('clps_active');
        $('.clps').parent().find('.drop-nav').slideUp();
        $(this).addClass('clps_active');
        $(this).parent().find('.drop-nav').slideDown();


    }





    // let $this = $(this);


    // if ($this.next().hasClass('clps_active')) {
    //     $this.next().removeClass('clps_active');
    //     $this.next().slideUp(350);
    // } else {
    //     $this.parent().find('.clps').removeClass('clps_active');
    //     $this.parent().find('.drop-nav').slideUp(350);
    //     $this.next().toggleClass('clps_active');
    //     $this.next().slideToggle(350);
    // }



});


$(window).scroll(function (e) {
    e.preventDefault();
    $('.drop-nav').each(function () {

        var xx = $(this).find('a').hasClass('active');


        if (xx) {
            $(this).find('a').parents('.drop-nav').slideDown();
        } else {
            $(this).slideUp();
        }
    })

});

// $(window).scroll(function () {
//     var dropActive = $('.side_nav_sec a').hasClass('active');

//     if (dropActive) {
//         dropActive.parents('.drop-nav').show();
//     }
// })


// $(document).on('click', '.clps_active', function () {

//     $('.clps_active').parent().find('.drop-nav').slideUp();
//     $('.clps_active').removeClass('clps_active');

// })


