$(document).ready(function () {

    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.mainnav').addClass("sticky");
        } else {
            $('.mainnav').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide up scroll
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });

    });

    // counter
    $('.counter').counterUp({
        delay: 20,
        time: 1000
    });

    // progress-bar
    $(".bar").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                    width: $(this).attr("aria-valuenow") + "%",
                },
                3000
            )
        });
        this.destroy();
    }, {
        offset: "bottom-in-view",

    });

    // window on load isotope
    $(window).on("load", function () {
        // init Isotope
        $('.project-filter').isotope({
            // options
        });
        // filter items on button click
        $('#isotope-filter').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $('.project-filter').isotope({
                filter: filterValue
            });
            // active button
            $('#isotope-filter').find(".active").removeClass("active");
            $(this).addClass("active");
        });

    });

    // Swiper
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        loop: true,
    });

    // active link
    $(".nav .nav-item .nav-link").click(function (e) {
        var current_link = $(this);
        var current_link_href = current_link.attr('href');

        $(".nav .nav-item .nav-link").removeClass('active');
        current_link.addClass('active');

    });

    // typing animate script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // aos
    $('[data-aos]').parent().addClass('delete-overflow');

});